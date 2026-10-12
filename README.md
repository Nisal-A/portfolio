# Nisal Abhishek: Portfolio

A responsive personal portfolio built with React 19, TypeScript and plain CSS custom properties.
Content lives in typed data files under `src/data/`, so you can update it without touching components.

## Project structure

```
nisal-portfolio/
├── index.html                # HTML shell, SEO and Open Graph metadata
├── public/                   # Static files copied as-is (favicon, robots.txt, images)
├── scripts/
│   ├── build.mjs             # Production build (esbuild -> dist/)
│   ├── dev.mjs               # Dev server with rebuild-on-change
│   └── preview.mjs           # Serves dist/ for a local check
└── src/
    ├── main.tsx              # Entry point
    ├── App.tsx               # Section order
    ├── styles.css            # Design tokens (dark default + light theme), layout, responsive rules
    ├── types.ts              # Shared content types
    ├── components/           # One file per section plus shared UI (Reveal, Section, Placeholder)
    ├── data/
    │   ├── profile.ts        # Name, intro, about text, education, social links
    │   ├── skills.ts         # Skill groups, hero labels, learning topics
    │   └── projects.ts       # Project cards and academic projects
    ├── hooks/                # useTheme, useInView
    └── lib/contact.ts        # Contact endpoint config and form validation
```

## Run locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build and preview:

```bash
npm run build      # type-checks, then builds to dist/
npm run preview    # http://localhost:4173
```

## Fill in your information

1. **Personal details** (`src/data/profile.ts`): set `email`, `photo` and `siteUrl`. Leave a value as `null`
   and the site shows a visible placeholder instead.
2. **Social links**: set `url` on the LinkedIn and Email entries in `socialLinks`.
3. **Education**: fill in `faculty`, `enrolmentYear`, `expectedGraduation`, `coursework` and `achievements`
   only with confirmed information.
4. **Skills** (`src/data/skills.ts`): edit the groups freely. No proficiency levels are shown by default.
5. **Projects** (`src/data/projects.ts`): set `repoUrl` and `liveUrl`, add `screenshot` paths
   (files in `public/`), and update each feature's status from `verify` to `completed`, `in-progress` or
   `planned` after checking the code. Add academic work to `academicProjects`.
6. **Domain and metadata** (`index.html`): replace `REPLACE-WITH-YOUR-DOMAIN.example` in the canonical URL and
   Open Graph tags, and add a real 1200x630 `public/og-image.png`. Also update `public/robots.txt`.

## Connect the contact form

The form validates input in the browser and shows success, server-error and network-error states. It does **not**
send anything until you connect a delivery service. Without one, it displays an honest "not connected" message.

1. Create a form endpoint with a service such as Formspree or Web3Forms, or write your own API that validates
   the request on the server and forwards it by email.
2. Set `CONTACT_ENDPOINT` in `src/lib/contact.ts`.
3. Server-side validation is required for any real backend. The client-side checks are for user experience only.
4. Never put API keys or secrets in the frontend. A public form endpoint URL is fine.

## Deploy

The output in `dist/` is static, so any static host works.

- **Netlify / Cloudflare Pages**: build command `npm run build`, publish directory `dist`.
- **Vercel**: framework preset "Other", build command `npm run build`, output directory `dist`.
- **GitHub Pages**: upload the contents of `dist/`, or add a workflow that runs the build and publishes `dist/`.

After deploying, update `siteUrl` and the metadata placeholders, then check the page with a social-preview
debugger and Google's Rich Results test.

## Accessibility and performance

- Semantic landmarks, one `h1`, ordered headings, a skip link, and visible focus states in both themes.
- Animations are disabled under `prefers-reduced-motion`.
- Project thumbnails use `loading="lazy"`. No external fonts or images are loaded.
- Theme choice is saved in `localStorage`, and the saved theme is applied before first paint.

## Known limitations

- There is no router, so there is no separate 404 page. Adding `react-router` would enable one.
- The page is a single document. Each section is reached via an anchor link.
