# Alghaith V2 — Software Studio

Arabic/English portfolio site for Alghaith, built with Next.js App Router.

## Stack
- Next.js 16.3.6 (current Maintenance/production-safe branch at project creation time)
- React 19.2
- TypeScript
- App Router
- Custom CSS, no UI lock-in
- Vercel-ready

## Routes
- `/` → redirects to `/ar`
- `/ar`
- `/en`
- `/ar/portfolio` · `/en/portfolio`
- `/{locale}/portfolio/{slug}`
- Localized 404 for `/ar/*` and `/en/*`

## SEO foundation
- Locale-specific metadata
- Title template (`%s | Alghaith`) inherited from the root layout
- Canonical URLs
- Arabic/English alternate links with `x-default` pointing to `/ar`
- Open Graph + Twitter Card (`summary_large_image`) on every route
- `sitemap.xml` with `lastModified`, locale alternates and per-locale priority
- `robots.txt` (blocks `noindex` on 404 via metadata `robots.index: false`)
- Unique portfolio metadata with `keywords` and per-project OG image
- Localized 404 page (`app/[locale]/not-found.tsx`) that keeps the active language

## Structured data (JSON-LD)
- `app/[locale]/layout.tsx` → `Organization` + `ProfessionalService` + `WebSite`
- `app/[locale]/portfolio/page.tsx` → `BreadcrumbList` + `CollectionPage` + `ItemList`
- `app/[locale]/portfolio/[slug]/page.tsx` → `BreadcrumbList` + `CreativeWork` (+ `WebApplication` when a `liveUrl` exists)
- Validate with the Rich Results Test before publishing.

## Security headers
Defined in `next.config.ts` and applied to every route:
`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`,
`Permissions-Policy`, `Strict-Transport-Security` (HSTS) and a
`Content-Security-Policy`.

The CSP intentionally allows `'unsafe-inline'` for styles and scripts because
Next.js injects inline bootstrap data. If you later remove all inline scripts
you can tighten `script-src`. Do not remove the headers without re-testing the
production build.

## Accessibility
- Skip-to-content link on every localized layout
- Visible `:focus-visible` outline for keyboard navigation
- Semantic landmarks (`header`, `main`, `nav`, `footer`) and labelled sections
- `viewport` export with `themeColor` and `colorScheme`

## Current portfolio media
Media lives in `public/projects/<project-slug>/` using Latin filenames, numbered from
`-01` (the card/hero cover) upward. Each project entry in `lib/content.ts` lists its own
files; nothing else references them.

| Project slug | Files | Count | `mediaFit` |
|---|---|---|---|
| `earth-aljawhara` | `earth-aljawhara-01…08.png` | 8 | `cover` (16:9 desktop) |
| `talaat-hael` | `talaat-hael-01…12.png` | 12 | `cover` |
| `ghithops` | `ghithops-01…07.png` | 7 | `cover` |
| `housing` | `housing-safe.png` | 1 | `contain` |
| `sewing-workshop` | `sewing-workshop.png` | 1 | `contain` |
| `ras-issa-labor` | — | 0 | pending |
| `workplace-cleanliness` | — | 0 | pending |

Notes:
- `earth-aljawhara-01…08.png` were supplied as the authorized Ard Aljawhara screenshots.
  The source files were inconsistently named (`ارض الجوهرة*` and `ارض الجزهرة*`) and were
  renamed during import.
- `ghithops` (تطبيق الغيث الشامل) is the Django + Next.js + Flutter platform in `D:\GhithOps`.
  It has **no `liveUrl`**: the Render endpoints in its `render.yaml` currently return 404.
  Add `liveUrl` once a working public URL exists.
- The `earth-aljawhara` and `talaat-hael` `liveUrl` values were verified reachable (HTTP 200).
- The previous "ثلاجة الصليف المركزية" project has been removed from the portfolio.

When new screenshots are supplied, assign them only to the project the owner confirms. Do not infer project ownership from a filename or visual similarity.

## Local run
```bash
npm install
npm run dev
```
Then open `http://localhost:3000/ar`.

## Production
```bash
npm run build
npm start
```

## Deploy
Import the repository into Vercel. Next.js is supported directly by Vercel with zero-configuration deployment for its standard features.


## Correct deployment

This is a Next.js source project. Do not upload the ZIP file itself as a website file.

### Netlify
1. Extract the ZIP.
2. Connect the extracted project to a Git repository and import that repository into Netlify, or use Netlify Drop with the extracted project folder while logged in.
3. Build command: `npm run build`
4. Publish directory: `.next`

### Vercel
Import the project/repository into Vercel. The framework should be detected as Next.js automatically.

### Local verification
```bash
npm install
npm run build
npm start
```
Then check:
- `http://localhost:3000/`
- `http://localhost:3000/ar`
- `http://localhost:3000/en`

The root URL redirects to `/ar`.


## Verification notes (2026-10-02)
- TypeScript check passed with `npx tsc --noEmit` against the uploaded source snapshot.
- The deployment archive excludes `node_modules` and `.next`; the hosting platform should install dependencies in its own build environment.
- The lockfile includes Next.js Linux SWC optional packages for Linux-based hosting.
- The employee housing screenshot uses `contain` so the full authorized screenshot remains visible rather than being cropped.
- Horizontal overflow audit: 12 routes × 9 viewports (320–1920px) report
  `documentElement.scrollWidth === clientWidth`. The skip link is hidden with
  `transform:translateY(-130%)` instead of `left:-9999px`, because the off-screen
  `left` technique added a 9999px scrollable area on every page (visible in RTL).
  Keep the skip link hidden with `transform`/`clip-path`, never with a large
  negative `left`/`right` offset.
