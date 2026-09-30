# Road Renegades

Next.js rebuild of the Road Renegades motorcycle customization site, migrated from an HTTrack scrape of the original WordPress/Elementor design.

## Stack

- Next.js App Router (static export)
- TypeScript
- Tailwind CSS v4
- `next/font` (Oswald + Roboto)

## Scripts

```bash
npm install
npm run dev
npm run build      # writes static site to out/
npm run preview    # serve out/ locally
```

## GitHub Pages

This repo deploys as a **project site**:

`https://mrhassansaif.github.io/Road-Renegades/`

Static export settings (`next.config.ts`):

- `output: 'export'`
- `trailingSlash: true`
- `basePath` / `assetPrefix`: `/Road-Renegades`
- `images.unoptimized: true` (no image optimization server)

CI: `.github/workflows/deploy-github-pages.yml` builds `out/` and deploys via GitHub Actions Pages.

In the repo **Settings → Pages**, set source to **GitHub Actions**.

To build without a base path (custom domain / root host):

```bash
NEXT_PUBLIC_BASE_PATH= npm run build
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/gallery/` | Builds / works gallery |
| `/services/` | Services |
| `/about/` | About |
| `/testimonials/` | Testimonials |
| `/contact/` | Contact |
| `/faq/` | FAQ |

Visual identity (dark theme, lime `#B6E925`, Oswald/Roboto, sharp outline buttons) is preserved from the original site. See `MIGRATION_ANALYSIS.md` for the scrape inventory and `ASSET_MAP.md` for organized public asset paths.
