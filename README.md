# Road Renegades

Next.js rebuild of the Road Renegades motorcycle customization site, migrated from an HTTrack scrape of the original WordPress/Elementor design.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- `next/font` (Oswald + Roboto)

## Scripts

```bash
npm install
npm run dev
npm run build
```

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/gallery` | Builds / works gallery |
| `/services` | Services |
| `/about` | About |
| `/testimonials` | Testimonials |
| `/contact` | Contact |

Visual identity (dark theme, lime `#B6E925`, Oswald/Roboto, sharp outline buttons) is preserved from the original site. See `MIGRATION_ANALYSIS.md` for the scrape inventory and `ASSET_MAP.md` for organized public asset paths.
