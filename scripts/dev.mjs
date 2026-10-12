// Development server: rebuilds on change and serves from dist-dev/.
import { context } from 'esbuild';
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile, cp } from 'node:fs/promises';
import { extname, join } from 'node:path';

const PORT = Number(process.env.PORT ?? 5173);
const OUT = 'dist-dev';
await mkdir(join(OUT, 'assets'), { recursive: true });

const ctx = await context({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  sourcemap: true,
  target: ['es2020'],
  format: 'esm',
  jsx: 'automatic',
  outdir: join(OUT, 'assets'),
  entryNames: 'main',
  loader: { '.css': 'css' },
  define: { 'process.env.NODE_ENV': '"development"' },
});

async function writeHtml() {
  let html = await readFile('index.html', 'utf8');
  html = html
    .replace('<!--STYLES-->', '<link rel="stylesheet" href="/assets/main.css" />')
    .replace('<!--SCRIPT-->', '<script type="module" src="/assets/main.js"></script>');
  await writeFile(join(OUT, 'index.html'), html);
}

await ctx.rebuild();
await writeHtml();
await cp('public', OUT, { recursive: true });
await ctx.watch();

const TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.txt': 'text/plain',
  '.map': 'application/json',
};

createServer(async (req, res) => {
  const urlPath = decodeURIComponent((req.url ?? '/').split('?')[0]);
  const file = join(OUT, urlPath === '/' ? 'index.html' : urlPath);
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
}).listen(PORT, () => console.log(`Dev server: http://localhost:${PORT}`));
