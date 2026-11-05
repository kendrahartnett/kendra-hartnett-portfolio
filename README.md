# Kendra Hartnett portfolio

Next.js App Router, React, TypeScript, and Tailwind CSS. Static export supports Vercel and static hosting. All five current projects have data-driven detail pages.

## Run

```sh
npm ci
npm run dev
npm run typecheck
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to the deployment origin before building for correct sitemap and social metadata. `.env.local` is ignored. The output directory is `out/`. The contact CTA links to the existing EEVORA contact page; this portfolio collects no form submissions.

## Design dependencies

- Aceternity UI Spotlight: source component from its official registry.
- Magic UI Border Beam: source component from its official registry, powered by Motion.
- GSAP: scoped hero artwork animation with cleanup, pause control, and reduced-motion support.
- Motion: card interaction and border animation; reduced-motion aware.
- Tailwind CSS 4: styling pipeline and source-component utilities.
- Locally bundled Space Grotesk, Inter, and JetBrains Mono fonts.
- Three.js / React Three Fiber were optional and are intentionally not installed; this design does not require WebGL.

See `THIRD_PARTY_NOTICES.md` for component origins. `src/lib/projects.ts` is the content source; `docs/CONTENT_VERIFICATION.md` records evidence and boundaries. Original image assets and optimized WebP versions are in `public/images`.

## Deployment

For Vercel: import the repository, select Next.js, and set `NEXT_PUBLIC_SITE_URL` to the final domain. No database or API credentials are required. The private Sites preview uses `.openai/hosting.json` with the exported `out` directory. Production hosting should serve `404.html` for unknown paths.

## Content still welcome

A preferred LinkedIn URL and public contact email were not supplied. No URLs or addresses were guessed. EEVORADocs is labeled in development and its current website workflow is explicitly illustrative. Future updates should distinguish new implementation from plans.

Run npm start after a build for the production preview at http://127.0.0.1:3107. Run npm run check:export to check the exported routes and asset links. See docs/VERIFICATION.md for checks and limits.
