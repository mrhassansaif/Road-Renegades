# Asset Map — Road Renegades

Inventory of visual assets after organizing the HTTrack / demo scrape into the Next.js `public/` tree.

**Rules followed**
- Original binary files preserved (moved/renamed only; not replaced with stock).
- SVGs kept as-is (logo, partners, signature).
- WordPress resized variants (`-300x200`, `-400x267`, etc.) were **never** kept — only full originals.
- No local webfont files existed in the scrape; typography uses `next/font` (Oswald + Roboto).
- HTTrack HTML archive under `Assets/Images/` and `*.html` left untouched as source reference.

Canonical path constants live in `lib/assets.ts`.

---

## Public structure

```
public/
  backgrounds/
    hero-section.jpg
  fonts/                  # empty — see Fonts section
    .gitkeep
  icons/
    favicon.png
  images/
    motorcycle.png
    people/
      owner.png
      customer-testimonial.png
    services/
      service-1.jpg … service-4.jpg
    team/
      team-1.jpg … team-4.jpg
    testimonials/
      avatar-1.jpg … avatar-6.jpg
    works/
      story-work-1.jpg … story-work-6.jpg   # Home “Latest Works”
      work-1.jpg … work-6.jpg               # Gallery page grid
  logos/
    logo-white.svg
    partner-1.svg … partner-5.svg
    signature.svg
```

---

## Brand & chrome

| Original filename | New path | Dimensions | Used in | Role |
|-------------------|----------|------------|---------|------|
| `custom-bike-builder-logo-white.svg` | `/logos/logo-white.svg` | SVG (132×34 viewBox) | `Header`, `Footer` | Primary site logo (lime mark + white wordmark) |
| `custom-bike-builder-favicon.png` | `/icons/favicon.png` | 512×452 | `app/layout.tsx` metadata | Browser favicon / app icon |
| `signature-1.svg` | `/logos/signature.svg` | SVG | Owner spotlight (`OwnerSpotlight` via `lib/data/about.ts`) | Founder signature graphic |
| `logo-1.svg` | `/logos/partner-1.svg` | SVG | Partner strip | Partner / brand logo 1 |
| `logo-2.svg` | `/logos/partner-2.svg` | SVG | Partner strip | Partner / brand logo 2 |
| `logo-3.svg` | `/logos/partner-3.svg` | SVG | Partner strip | Partner / brand logo 3 |
| `logo-4.svg` | `/logos/partner-4.svg` | SVG | Partner strip | Partner / brand logo 4 |
| `logo-5.svg` | `/logos/partner-5.svg` | SVG | Partner strip | Partner / brand logo 5 |

**Original scrape locations**
- Logo also existed at `Assets/Images/custom-bike-builder-logo-white.svg` (archive copy; identical).
- Partners, favicon, signature were originally remote on `websitedemos.net/.../uploads/sites/736/2020/11/` and downloaded once into `public/` (never redrawn).

---

## Backgrounds

| Original filename | New path | Dimensions | Used in | Role / crop notes |
|-------------------|----------|------------|---------|-------------------|
| `custom-bike-builder-hero-section-bg.jpg` | `/backgrounds/hero-section.jpg` | 1920×960 (2:1) | `HomeHero` | Full-bleed home hero background; CSS `object-cover` + dark gradients match original overlay feel |

Also archived at `Assets/Images/custom-bike-builder-hero-section-bg.jpg`.

---

## People & product photography

| Original filename | New path | Dimensions | Aspect (approx) | Used in | Role |
|-------------------|----------|------------|-----------------|---------|------|
| `custom-bike-builder-motorcycle.png` | `/images/motorcycle.png` | 800×554 | ~4:3 | `StorySection` (Home) | Story / “How It All Started” motorcycle cutout |
| `custom-bike-builder-owner.png` | `/images/people/owner.png` | 494×690 | ~3:4 portrait | `OwnerSpotlight`, About | Founder portrait; UI uses `object-cover object-top` in ~3:4 frame |
| `custom-bike-builder-customer-testimonial.png` | `/images/people/customer-testimonial.png` | 508×850 | ~3:5 portrait | Featured testimonial (Home, Gallery, Testimonials) | Customer-with-bike portrait; UI ~3:4 frame with `object-cover` |

Owner + customer also archived under `Assets/Images/`.

---

## Team

| Original filename | New path | Dimensions | Used in | Role |
|-------------------|----------|------------|---------|------|
| `custom-bike-builder-story-team-1.jpg` | `/images/team/team-1.jpg` | 300×400 (3:4) | `TeamGrid` (Home, About) | Danny Ings |
| `custom-bike-builder-story-team-2.jpg` | `/images/team/team-2.jpg` | 300×400 (3:4) | `TeamGrid` | Rodrigo Lima |
| `custom-bike-builder-story-team-3.jpg` | `/images/team/team-3.jpg` | 300×400 (3:4) | `TeamGrid` | Tim Hendrick |
| `custom-bike-builder-story-team-4.jpg` | `/images/team/team-4.jpg` | 300×400 (3:4) | `TeamGrid` | Mario Jota |

Cards use `aspect-[3/4]` + `object-cover` to preserve original portrait crop.

Also archived under `Assets/Images/`.

---

## Services

| Original filename | New path | Dimensions | Used in | Role |
|-------------------|----------|------------|---------|------|
| `custom-bike-builder-service-1.jpg` | `/images/services/service-1.jpg` | 600×400 (3:2) | Services page + Home services teaser | Bike Modifying |
| `custom-bike-builder-service-2.jpg` | `/images/services/service-2.jpg` | 600×400 (3:2) | Same | Maintenance |
| `custom-bike-builder-service-3.jpg` | `/images/services/service-3.jpg` | 600×400 (3:2) | Same | Spare Parts |
| `custom-bike-builder-service-4.jpg` | `/images/services/service-4.jpg` | 600×400 (3:2) | Same | Custom Build |

UI frames: teaser `aspect-[4/3]`, detail `aspect-[3/2]` with `object-cover` — matches original landscape service imagery.

---

## Works / gallery

### Home “Latest Works” (`story-work-*`)

These are the higher-quality images that shipped in the original HTTrack `Assets/Images/` folder and were used on the Home works grid.

| Original filename | New path | Dimensions | Used in | Role |
|-------------------|----------|------------|---------|------|
| `custom-bike-builder-story-work-1.jpg` | `/images/works/story-work-1.jpg` | 960×560 | Home works grid | Work tile 1 |
| `custom-bike-builder-story-work-2.jpg` | `/images/works/story-work-2.jpg` | 480×560 | Home works grid | Work tile 2 |
| `custom-bike-builder-story-work-3.jpg` | `/images/works/story-work-3.jpg` | 480×560 | Home works grid | Work tile 3 |
| `custom-bike-builder-story-work-4.jpg` | `/images/works/story-work-4.jpg` | 480×560 | Home works grid | Work tile 4 |
| `custom-bike-builder-story-work-5.jpg` | `/images/works/story-work-5.jpg` | 480×560 | Home works grid | Work tile 5 |
| `custom-bike-builder-story-work-6.jpg` | `/images/works/story-work-6.jpg` | 960×560 | Home works grid + Gallery featured build | Work tile 6 / featured |

Grid UI uses `aspect-[3/2]` + `object-cover` (consistent tile crop as on the rebuilt site; originals vary slightly in native ratio).

Also archived under `Assets/Images/`.

### Gallery page (`work-*`)

Dedicated Works-page images from the original demo (downloaded once from the same uploads folder).

| Original filename | New path | Dimensions | Used in | Role |
|-------------------|----------|------------|---------|------|
| `custom-bike-builder-work-1.jpg` | `/images/works/work-1.jpg` | 600×400 (3:2) | `/gallery` grid | Gallery tile 1 |
| `custom-bike-builder-work-2.jpg` | `/images/works/work-2.jpg` | 600×400 (3:2) | `/gallery` | Gallery tile 2 |
| `custom-bike-builder-work-3.jpg` | `/images/works/work-3.jpg` | 600×400 (3:2) | `/gallery` | Gallery tile 3 |
| `custom-bike-builder-work-4.jpg` | `/images/works/work-4.jpg` | 600×400 (3:2) | `/gallery` | Gallery tile 4 |
| `custom-bike-builder-work-5.jpg` | `/images/works/work-5.jpg` | 600×400 (3:2) | `/gallery` | Gallery tile 5 |
| `custom-bike-builder-work-6.jpg` | `/images/works/work-6.jpg` | 600×400 (3:2) | `/gallery` | Gallery tile 6 |

---

## Testimonials (avatars)

| Original filename | New path | Dimensions | Used in | Role |
|-------------------|----------|------------|---------|------|
| `custom-bike-builder-testimonial-1.jpg` | `/images/testimonials/avatar-1.jpg` | 100×128 | Testimonials grid | Tony Rush |
| `custom-bike-builder-testimonial-2.jpg` | `/images/testimonials/avatar-2.jpg` | 100×128 | Testimonials grid | Sam Allison |
| `custom-bike-builder-testimonial-3.jpg` | `/images/testimonials/avatar-3.jpg` | 100×128 | Testimonials grid | Jonathan Doe |
| `custom-bike-builder-testimonial-4.jpg` | `/images/testimonials/avatar-4.jpg` | 100×128 | Testimonials grid | Mia Alicia |
| `custom-bike-builder-testimonial-5.jpg` | `/images/testimonials/avatar-5.jpg` | 100×128 | Testimonials grid | John Stone |
| `custom-bike-builder-testimonial-6.jpg` | `/images/testimonials/avatar-6.jpg` | 100×128 | Testimonials grid | Erick Lim |

Displayed as circular crops (`rounded-full` + `object-cover`) matching the original Elementor testimonial avatars.

---

## Fonts

| Source | Status | Notes |
|--------|--------|-------|
| Oswald / Roboto (original site) | Loaded via `next/font/google` in `lib/fonts.ts` | No `.woff`/`.ttf` files existed in the HTTrack tree |
| Remote `@font-face` URLs in scraped HTML (`websitedemos.net/fonts.gstatic.com/...`) | **Not copied** | Fragile mirrored paths; replaced by Next font pipeline |
| `public/fonts/` | Placeholder only (`.gitkeep`) | Ready for self-hosted files if licensing/local copies are added later |

---

## Path migration cheat sheet (HTML → Next.js)

| Old HTML / scrape reference | Next.js public URL |
|-----------------------------|--------------------|
| `./Assets/Images/custom-bike-builder-logo-white.svg` | `/logos/logo-white.svg` |
| `./Assets/Images/custom-bike-builder-hero-section-bg.jpg` | `/backgrounds/hero-section.jpg` |
| `./Assets/Images/custom-bike-builder-owner.png` | `/images/people/owner.png` |
| `./Assets/Images/custom-bike-builder-customer-testimonial.png` | `/images/people/customer-testimonial.png` |
| `./Assets/Images/custom-bike-builder-story-team-N.jpg` | `/images/team/team-N.jpg` |
| `./Assets/Images/custom-bike-builder-story-work-N.jpg` | `/images/works/story-work-N.jpg` |
| `…/uploads/.../custom-bike-builder-motorcycle.png` | `/images/motorcycle.png` |
| `…/uploads/.../custom-bike-builder-service-N.jpg` | `/images/services/service-N.jpg` |
| `…/uploads/.../custom-bike-builder-work-N.jpg` | `/images/works/work-N.jpg` |
| `…/uploads/.../custom-bike-builder-testimonial-N.jpg` | `/images/testimonials/avatar-N.jpg` |
| `…/uploads/.../logo-N.svg` | `/logos/partner-N.svg` |
| `…/uploads/.../signature-1.svg` | `/logos/signature.svg` |
| `…/uploads/.../custom-bike-builder-favicon.png` | `/icons/favicon.png` |

---

## Intentionally not kept (junk / unused)

Only items we are certain should not live in `public/`:

| Item | Reason |
|------|--------|
| WordPress size variants (`*-300x200.jpg`, `*-400x267.jpg`, `*-225x300.jpg`, `*-768x532.png`, etc.) | Duplicate resized derivatives; Next.js / `next/image` handles sizing |
| `demo-screenshot.jpg` (Contact page remote ref) | Demo chrome screenshot, not site content imagery |
| Remote Astra / Elementor / Font Awesome CSS icon fonts | Framework chrome, not brand assets |
| Duplicate flat copies previously under `public/images/*.jpg` before reorg | Moved into role folders (no second copy left in `public/`) |

**Preserved archive (not deleted):** `Assets/Images/*` — original HTTrack subset, kept as source-of-truth copies of the first 14 local files.

---

## Component → asset wiring

| Component / data module | Assets |
|-------------------------|--------|
| `components/layout/Header.tsx` | `/logos/logo-white.svg` |
| `components/layout/Footer.tsx` | `/logos/logo-white.svg` |
| `components/sections/HomeHero.tsx` | `/backgrounds/hero-section.jpg` |
| `components/sections/StorySection.tsx` | `/images/motorcycle.png` |
| `components/sections/OwnerSpotlight.tsx` | owner + signature via `lib/data/about.ts` |
| `components/sections/ServicesTeaser.tsx` / `ServiceDetail.tsx` | `lib/data/services.ts` → `/images/services/*` |
| `components/sections/WorksGrid.tsx` | `lib/data/works.ts` → story-work / work images |
| `components/sections/FeaturedWorkBlock.tsx` | featured → `story-work-6` |
| `components/sections/FeaturedTestimonial.tsx` | customer portrait via testimonials data |
| `components/sections/TestimonialsGrid.tsx` | `/images/testimonials/avatar-*` |
| `components/sections/TeamGrid.tsx` | `/images/team/team-*` |
| `components/sections/PartnerLogos.tsx` | `/logos/partner-*` |
| `app/layout.tsx` | `/icons/favicon.png` |

---

*Asset reorganization only — no visual redesign in this pass.*
