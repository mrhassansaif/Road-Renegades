# Road Renegades

Custom bike builder site for a motorcycle workshop vibe — builds, mods, gallery, and “let’s talk” CTAs — rebuilt as a modern static Next.js app.

**Live:** [mrhassansaif.github.io/Road-Renegades](https://mrhassansaif.github.io/Road-Renegades/)

---

## Project

Once upon a bored afternoon (or year), there was an older WordPress site.

I scraped the whole thing with **HTTrack** into a pile of static HTML/CSS, threw it on a disk, and then proceeded to completely forget about it.

**For years.**

Then one day I was listening to [**“Renegades” by X Ambassadors**](https://youtu.be/8j741TUIET0) and somehow remembered:

> **“OH SHIT. I HAVE THAT OLD BIKE WEBSITE REPO.”**

So naturally — **very naturally, extremely naturally, concerningly naturally** — I opened it.

And then, for reasons still unknown to science:

> “What if I turn this into Next.js?”

Because apparently leaving old projects alone is not an option.

Tried it.

**Worked.**

Then I thought:

> “Okay... what if I deploy it too? But not on Vercel?”

Why not Vercel?

**No fookin' idea.**

I’d heard somewhere that you could deploy Next.js on **GitHub Pages**, and apparently that was enough motivation to spend my time figuring out how to turn a Next.js app back into a pile of static files.

So I tried it.

And somehow...

**IT FOOKIN' WORKED.**

Felt slightly ridiculous converting Next.js into static HTML/CSS/JS just to put it on GitHub Pages.

Which is basically:

> **“Congratulations. You reinvented the thing you started with.”**

And here we are.

A WordPress site.  
Scraped with HTTrack.  
Forgotten for years.  
Resurrected because of a song.  
Rebuilt in Next.js for absolutely no reason.  
Then turned back into static files.

**Was this necessary?**  
No.

**Did I learn something?**  
Probably.

**Would I do it again?**  
...Give me another abandoned repo and find out.

**Shenanigans: successful. 🏍️💀**

This repo is that rebuild. The old WordPress site is **not** treated as currently active; this is the new static Next.js front-end based on that scrape.

---

## Tech Stack

| Piece | What we actually use |
|--------|----------------------|
| Framework | [Next.js](https://nextjs.org/) 15 (App Router) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Fonts | `next/font` — Oswald + Roboto |
| Lint | ESLint + `eslint-config-next` |
| Deploy | GitHub Actions → GitHub Pages (`output: 'export'`) |

Runtime deps are just `next`, `react`, and `react-dom`. Everything else in `package.json` is tooling.

---

## Features

- Multi-page App Router site: Home, Gallery, Services, About, Testimonials, Contact, FAQ
- Responsive layout and mobile navigation
- Motorcycle services + build/gallery showcase
- Contact / CTA sections throughout
- Interactive UI bits (gallery filters, counters, forms UI, etc.)
- Static export ready for GitHub Pages (`out/`)
- Project-site `basePath` so assets and routes work under `/Road-Renegades/`

---

## Project Structure

```text
app/                 # Routes + layout + globals.css
components/          # layout, navigation, sections, ui
lib/                 # assets paths, data, SEO helpers, basePath, fonts
public/              # Static images, logos, icons, backgrounds (.nojekyll)
.github/workflows/   # GitHub Pages deploy workflow
next.config.ts       # static export + basePath / assetPrefix
```

Handy extras (not required to run the site): `ASSET_MAP.md`, `MIGRATION_ANALYSIS.md`, `scripts/`, `visual-compare/`.

---

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/Road-Renegades/](http://localhost:3000/Road-Renegades/) — `basePath` is `/Road-Renegades` by default.

```bash
npm run lint
```

---

## Build

```bash
npm run build
```

Next writes a fully static site to **`out/`** (HTML, CSS, JS, and copied `public/` assets).

Local peek at the export (serves `out/` at the server root — paths still expect `/Road-Renegades/...` unless you mirror that folder layout):

```bash
npm run preview
```

Root host / custom domain (no repo subpath):

```bash
NEXT_PUBLIC_BASE_PATH= npm run build
```

---

## Deployment

This repo deploys as a **GitHub Pages project site**:

`https://mrhassansaif.github.io/Road-Renegades/`

Config highlights (`next.config.ts`):

- `output: 'export'`
- `trailingSlash: true`
- `basePath` / `assetPrefix`: `/Road-Renegades` (override with `NEXT_PUBLIC_BASE_PATH`)
- `images.unoptimized: true` (no Next image optimizer on Pages)

CI workflow: [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml)

- Triggers on push to `main` (and manual `workflow_dispatch`)
- `npm ci` → `npm run build` with `NEXT_PUBLIC_BASE_PATH=/Road-Renegades`
- Sanity-checks `out/` (pages, `.nojekyll`, basePath-prefixed image URLs)
- Uploads `out/` and deploys with `actions/deploy-pages`

### How to?

1. Push this repo to GitHub (repo name `Road-Renegades` matches the default `basePath`).
2. Repo **Settings → Pages → Build and deployment → Source**: **GitHub Actions**.
3. Push to `main` (or run the **Deploy GitHub Pages** workflow manually).
4. Wait for the Action to finish → open the Pages URL above.
5. If images 404 but routes work, you probably lost `basePath` — keep `NEXT_PUBLIC_BASE_PATH=/Road-Renegades` on the project-site build and don’t hand-edit asset prefixes in every component (paths are centralized in `lib/assets.ts` / `lib/basePath.ts`).

---

## Assets

Website media lives under **`public/`** and is referenced through `lib/assets.ts`:

| Path | Contents |
|------|----------|
| `public/images/` | Works, team, services, testimonials, etc. |
| `public/logos/` | Brand + partner logos |
| `public/backgrounds/` | Hero / section backgrounds |
| `public/icons/` | Favicon |

Display fonts (Oswald / Roboto) come from **`next/font`**. Local `public/fonts/` is reserved if you add self-hosted files later.

See `ASSET_MAP.md` if you need the scrape → `public/` mapping.

---

## Notes

- This is a **static-export** Next.js site. No server components that need a Node server, no Route Handlers, no ISR, no `next/image` optimizer — Pages only gets HTML/CSS/JS from `out/`.
- Contact details / quotes in the UI may still be placeholders from the migration; swap them before treating it as a real shop site.
- This whole thing started because I remembered an abandoned repo while listening to a song. So really, this is less of a project and more of a **chain of increasingly unnecessary decisions that somehow worked.**
- Static Next on GitHub Pages works. **Apparently.**

### The song that started this nonsense

🎵 [**X Ambassadors — Renegades**](https://youtu.be/8j741TUIET0)

---
```


### Road Renegades — timeline of questionable decisions

```text
WordPress
   ↓
HTTrack
   ↓
Static HTML/CSS
   ↓
Forgotten for years
   ↓
"Renegades" starts playing
   ↓
"Oh shit, I remember that repo"
   ↓
Next.js
   ↓
"Let's put it on GitHub Pages"
   ↓
Static Export
   ↓
GitHub Pages
   ↓
...wait
   ↓
I MADE A STATIC WEBSITE AGAIN
   ↓
🏍️💀
```

**10/10 would make unnecessary technology choices again.**
