// Production build: bundles src/main.tsx into dist/ and copies static assets.
import { build } from 'esbuild';
import { cp, mkdir, rm, readdir, readFile, writeFile } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist/assets', { recursive: true });

await build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  minify: true,
  target: ['es2020'],
  format: 'esm',
  jsx: 'automatic',
  outdir: 'dist/assets',
  entryNames: '[name]-[hash]',
  loader: { '.css': 'css' },
  define: { 'process.env.NODE_ENV': '"production"' },
});

const files = await readdir('dist/assets');
const js = files.find((f) => f.endsWith('.js'));
const css = files.find((f) => f.endsWith('.css'));

// Inject the hashed bundle names into the HTML template.
let html = await readFile('index.html', 'utf8');
html = html
  .replace('<!--STYLES-->', css ? `<link rel="stylesheet" href="/assets/${css}" />` : '')
  .replace('<!--SCRIPT-->', `<script type="module" src="/assets/${js}"></script>`);
await writeFile('dist/index.html', html);

await cp('public', 'dist', { recursive: true });
console.log(`Built dist/ -> assets/${js}, assets/${css}`);
