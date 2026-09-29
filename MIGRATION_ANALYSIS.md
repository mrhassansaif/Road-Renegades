# Road Renegades — HTTrack → Next.js Migration Analysis

**Status:** Analysis only — no migration started.  
**Source scrape:** [websitedemos.net/bike-modification-04](https://websitedemos.net/bike-modification-04/) (Astra + Elementor demo, mirrored via HTTrack on 2023-04-09)  
**Repo state:** Partially cleaned static HTML (6 pages) + 14 local images under `Assets/Images/`. No standalone `.css` / `.js` files exist in the repo.

> **Branding note:** The scraped site is branded **“Bike Modification”** (logo SVG text: **BIKE**). There are **zero** occurrences of “Road Renegades” / “Renegades” in the HTML. Placeholder copy also references “NGENG Garage.” Visual identity (lime accent, dark theme, Oswald/Roboto, layout patterns) should be preserved; business naming, copy, contact data, and logo should be updated to Road Renegades during rebuild.

---

## 1. Existing page inventory

| File | Title | Role | Approx. size |
|------|--------|------|--------------|
| `index.html` | Home - Bike Modification | Landing / marketing home | ~654 KB / ~16k lines |
| `Pages/about-us.html` | About Us | Story, owner, team | ~270 KB |
| `Pages/services.html` | Services | Four service offerings | ~309 KB |
| `Pages/works.html` | Works | Portfolio / project gallery | ~271 KB |
| `Pages/testimonial.html` | Testimonial | Reviews + ratings | ~292 KB |
| `Pages/contact.html` | Contact | Map + contact form | ~241 KB |

**Why files are huge:** Each page duplicates ~125 KB of **inline CSS** (Astra theme variables + Elementor kit styles) and still references **dozens of remote CSS/JS** from `websitedemos.net`. Content markup is a minority of each file.

### Home (`index.html`) — section map (~10 top-level Elementor sections)

1. **Hero** — eyebrow “Custom Bike Builder”, H1 “Make Your Bike Truly Yours”, CTA “Check Our Works”, full-bleed dark hero with local bg `custom-bike-builder-hero-section-bg.jpg`
2. **Origin / story** — “How It All Started” + body copy + motorcycle imagery (remote `custom-bike-builder-motorcycle.png` still referenced in meta/OG)
3. **Services teaser** — “We Build Custom Bike” + image-box grid of services
4. **Latest works** — 6 work thumbnails (`story-work-1`…`6`) with Latin titles
5. **Featured testimonial** — quote + customer photo + “View All Testimonial”
6. **Owner spotlight** — Matt Owen + signature (remote `signature-1.svg`) + “Read More”
7. **Stats counters** — Founded 1986 / Projects 256 / Clients 128 / Awards 16
8. **Team** — 4 people (Danny Ings, Rodrigo Lima, Tim Hendrick, Mario Jota) with team photos
9. **CTA band** — “Let’s Build Your Dream Bike!” + “Let’s Talk!”
10. **Site footer** — contact / services / newsletter (see §3)

### About Us

- Page hero title: “About Us”
- Owner intro (Matt Owen), “Born to Ride”, “Our Story”
- Stats counters (same pattern as home)
- Team grid (same 4 members)
- Shared bottom CTA + footer

### Services

- Page hero: “Services”
- Four detailed service blocks: **Bike Modifying**, **Maintenance**, **Spare parts**, **Custom Build**
- Each uses remote service imagery (`custom-bike-builder-service-1`…`4.jpg`) — **not local**
- Feature icon lists + CTAs (“Check Our Work”, “Contact Us”, “Let’s Talk”)
- Partner/logo row (remote `logo-1.svg`…`logo-5.svg`)
- Shared CTA + footer

### Works

- Page hero: “Works”
- Featured project block with meta (e.g. model name, duration “4-5 months”, price “$ 8,400”)
- Portfolio image-box grid (6 items; remote `custom-bike-builder-work-1`…`6.jpg`)
- Embedded testimonial quote
- Shared CTA + footer

### Testimonial

- Page hero: “Testimonials”
- Featured quote + customer image
- Aggregate rating **4.7** + platform scores (4.8 / 4.7 / 4.6 / 4.7) via icon-boxes + star-rating widget
- **6 testimonial cards** (Tony Rush, Sam Allison, Jonathan Doe, Mia Alicia, John Stone, Erick Lim) with remote avatars `testimonial-1`…`6.jpg`
- Shared CTA + footer

### Contact

- Page hero: “Contact”
- “Get In Touch” contact details + social icons
- “Send Us a Message” **WPForms** fields: Name, Email, Message
- **Google Maps** Elementor widget
- Shared CTA + footer

---

## 2. Existing navigation structure

### Primary header nav (all pages)

| Label | Current target |
|-------|----------------|
| Home | `#` on home / `../index.html` on inner pages |
| Works | `./Pages/works.html` (or `./works.html` from Pages) |
| Services | `./Pages/services.html` |
| About Us | `./Pages/about-us.html` |
| Testimonial | `./Pages/testimonial.html` |
| Contact | `./Pages/contact.html` |

**Header CTA button:** “Let’s Talk” → currently `#` (should map to Contact).

### Header chrome

- Transparent dark header over hero (`ast-theme-transparent-header`)
- Logo left (white SVG), menu center/right, solid “Let’s Talk” button
- Mobile: Astra hamburger (`ast-mobile-menu-trigger-minimal`) → dropdown menu (`data-type="dropdown"`)
- Desktop/mobile header duplicated in markup (Astra header builder pattern)

### Footer nav / columns (4-column builder row)

1. **CONTACT INFO** — placeholder address lines + phone `+1 123 456 78 90` + email (Cloudflare-obfuscated)
2. **Services** — Bike Modifying, Maintenance, Accessories, Custom Build (href `#`)
3. **STAY UP TO DATE** — email newsletter field (WPForms lite) + Submit
4. Social: Facebook, Twitter, Instagram, YouTube (href `#`)
5. Copyright: “Copyright Ac 2023 Bike Modification | Powered by Bike Modification”

### Implied hierarchy

```
Home
├── Works
├── Services
│   ├── Bike Modifying
│   ├── Maintenance
│   ├── Accessories / Spare Parts
│   └── Custom Build
├── About Us
├── Testimonial
└── Contact
```

Service footer links are **anchors without real pages** — either keep as in-page sections on `/services` or create deep links (`/services#custom-build`, etc.).

---

## 3. Asset inventory

### Local assets (`Assets/Images/`) — all used (no junk duplicates in folder)

| File | Used on | Notes |
|------|---------|--------|
| `custom-bike-builder-logo-white.svg` | All pages (header/footer) | Brand mark; lime + white “BIKE” wordmark |
| `custom-bike-builder-hero-section-bg.jpg` | Home hero | Dark atmospheric bg |
| `custom-bike-builder-owner.png` | Home (+ About via remote still) | Owner portrait |
| `custom-bike-builder-customer-testimonial.png` | Home (+ Works/Testimonial remote) | Customer with bike |
| `custom-bike-builder-story-team-1.jpg` … `4.jpg` | Home team | Team portraits |
| `custom-bike-builder-story-work-1.jpg` … `6.jpg` | Home “Latest Works” | Work thumbnails |

**Local folder is clean** — no HTTrack duplicate trees, no unused local files. The problem is the opposite: **many required assets were never downloaded**.

### Missing locally — still hotlinked to `websitedemos.net` (must download or replace)

| Asset group | Files | Needed by |
|-------------|-------|-----------|
| Favicon | `custom-bike-builder-favicon.png` (+ 150x150) | All pages |
| Motorcycle | `custom-bike-builder-motorcycle.png` (+ sizes) | Home / Services / OG |
| Service photos | `service-1`…`4.jpg` (+ WP size variants) | Services |
| Work photos | `work-1`…`6.jpg` (+ variants) | Works |
| Testimonial avatars | `testimonial-1`…`6.jpg` | Testimonial |
| Partner logos | `logo-1.svg`…`logo-5.svg` | Home / Services |
| Signature | `signature-1.svg` | Home / About owner block |
| Demo screenshot | `demo-screenshot.jpg` | Contact (likely junk) |

WordPress also generates many **resized variants** (`-300x200`, `-400x267`, etc.). Those are **junk for Next.js** — keep one high-res original per image and use `next/image`.

### Fonts

- **Oswald** (headings, buttons, nav) — loaded via `@font-face` pointing at `websitedemos.net/fonts.gstatic.com/...` (proxied/mirrored paths; fragile)
- **Roboto** (body)
- **Roboto Slab** (limited use)
- Showcase CTA also referenced **DM Sans** (Astra Sites chrome — discard)

### Icons

- Font Awesome 5 solid (Elementor)
- Elementor eicons
- Inline SVGs for mobile menu toggle / social
- No local icon font files — all remote

---

## 4. Design system

Extracted from Astra CSS variables + Elementor kit (inline `:root`).

### Color palette

| Token | Value | Role |
|-------|--------|------|
| Accent / primary | `#B6E925` | Logo lime, buttons, links hover, accents (`--ast-global-color-0/1`) |
| White | `#FFFFFF` | Primary text on dark, link base |
| Muted text | `#D8D8D8` | Secondary copy |
| Surface dark | `#0F0F0F` | Sections / header surfaces |
| Near-black | `#080808` | Deep background / button hover text |
| Hairline / glass | `rgba(255,255,255,0.2)` | Borders / overlays |
| Soft white | `rgba(255,255,255,0.75)` | Softened text |
| Border (Astra) | `#DDDDDD` | Generic borders (less used on dark UI) |

**Overall look:** Near-black motorcycle garage aesthetic with high-contrast **acid lime** accent. Do not flatten to a light theme.

### Typography

| Role | Family | Weight / style |
|------|--------|----------------|
| Display / H1–H6 / site title | **Oswald**, sans-serif | Bold (~700), tight line-height ~1.1–1.25 |
| Body / UI | **Roboto**, sans-serif | 400, 16px / 1rem base |
| Accent serif (limited) | **Roboto Slab** | Occasional |
| Buttons / nav labels | Oswald | 400, **uppercase**, `letter-spacing: ~2px`, ~14px |

Site title text is **hidden** in CSS (`display: none`); logo image carries the brand.

### Layout / containers

- Content width: **1200px** (`--wp--custom--ast-container-width`)
- Astra fluid container paddings: ~1.4em–6.67em depending on breakpoint
- Elementor sections: full-width rows with inner boxed content
- Dense vertical rhythm; large section padding typical of Elementor demos

### Buttons

- **Shape:** square (border-radius **0**)
- **Default:** transparent fill, **2px solid lime**, lime text
- **Hover/focus:** lime fill (`#B6E925`), near-black text (`#080808`)
- Padding ~14px 38px desktop; tighter on tablet/mobile
- Header “Let’s Talk”: filled custom button variant (Astra header button)

### Cards / media patterns

- Not heavy Material-style cards; prefer **image + title + short text** (Elementor image-box)
- Work/service tiles: image-led, often with hover affordance from Elementor
- Testimonial cards: avatar + quote + name
- Dividers: Elementor line dividers on inner pages

### Borders & shadows

- Borders: thin white/lime lines; glass white at 20% opacity
- Border-radius effectively **none** on buttons/primary UI (sharp industrial feel)
- Shadows: minimal / not a defining trait (avoid soft multi-layer AI-default shadows)

### Responsive breakpoints (Astra)

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Desktop | `min-width: 922px` | Full horizontal nav |
| Tablet / header break | `max-width: 921px` | Mobile header, stacked menus, reduced button padding |
| Mobile | `max-width: 544px` | Narrowest type/spacing adjustments |

Elementor also uses its own tablet/mobile section stacking (columns → stacked).

### Motion / transitions

- Astra menu animation: **fade** (`astra-menu-animation-fade`)
- Elementor **Waypoints** + counter animation (`data-duration="2000"`)
- Elementor animations CSS loaded remotely (`e-animations`)
- Button color transitions via theme CSS
- Swiper CSS/JS loaded (carousel dependency present; primary content is mostly static grids)

---

## 5. Major reusable UI patterns

These should become React components / layout primitives:

| Pattern | Description | Pages |
|---------|-------------|-------|
| `SiteHeader` | Transparent/dark bar, logo, nav, Let’s Talk, mobile toggle | All |
| `SiteFooter` | 4-col contact / services / newsletter / social + copyright | All |
| `PageHero` | Simple dark title band for inner pages | About, Services, Works, Testimonial, Contact |
| `HomeHero` | Full-bleed bg, eyebrow, H1, primary CTA | Home |
| `SectionHeading` | Oswald uppercase/display + supporting Roboto paragraph | All |
| `Button` / `ButtonOutline` | Lime outline → filled hover | All |
| `ImageBox` / `WorkCard` | Image + title (+ optional meta) | Home, Works |
| `ServiceBlock` | Image + heading + bullets + CTA | Services, Home teaser |
| `StatCounters` | 4 animated numbers + labels | Home, About |
| `TeamGrid` | 4 portrait cards | Home, About |
| `TestimonialFeature` | Large quote + photo | Home, Works, Testimonial |
| `TestimonialCard` | Avatar + text + name | Testimonial |
| `RatingSummary` | Aggregate score + platform scores + stars | Testimonial |
| `OwnerSpotlight` | Portrait + bio + signature | Home, About |
| `CtaBand` | “Let’s Build Your Dream Bike!” + Let’s Talk | All |
| `PartnerLogos` | Logo strip | Home, Services |
| `ContactInfoList` | Address / phone / email icon list | Contact, Footer |
| `ContactForm` | Name / Email / Message | Contact |
| `NewsletterForm` | Email only | Footer |
| `MapEmbed` | Google Maps | Contact |

---

## 6. Existing JavaScript interactions

There are **no local JS files**. Behavior depends on remote WordPress/Elementor scripts (many will break offline or when websitedemos changes).

| Interaction | Source | Migration approach |
|-------------|--------|--------------------|
| Mobile menu open/close | Astra `frontend.min.js` | React state + accessible `<nav>` / dialog |
| Transparent header over hero | Astra body classes | CSS/`IntersectionObserver` or route-aware styles |
| Animated counters | Elementor counter + jquery-numerator + waypoints | `IntersectionObserver` + count-up (e.g. small hook) |
| Scroll reveal animations | Elementor animations + waypoints | Framer Motion / CSS `@starting-style` / IO — match subtle fades only |
| Swiper carousels | Elementor Swiper 5.3.6 loaded | Only if a real carousel is required; most grids are static |
| Contact form validation/submit | WPForms + jQuery Validate | Next.js form → API route / Formspree / Resend / etc. |
| Newsletter submit | WPForms footer | Same as above |
| Google Map | Elementor Google Maps widget | `@react-google-maps/api` or static embed / Mapbox |
| Email obfuscation decode | Cloudflare `email-decode.min.js` | Plain `mailto:` with real Road Renegades email |
| Lightbox / share / dialog | Elementor libs loaded | Likely unused — skip unless confirmed |
| Astra Sites showcase CTA / template preview | `astra-sites-server` scripts | **Delete entirely** |
| Cloudflare analytics beacon | `cloudflareinsights` | Remove or replace with chosen analytics |

**Not present (or not meaningfully used):** tabs, accordions, sticky-on-scroll header (sticky CSS class strings appear in theme CSS but primary sticky flag is off), modal galleries, complex sliders in content.

---

## 7. Responsive behavior

- **Desktop (≥922px):** horizontal nav + header CTA; multi-column Elementor grids (works 3×2, team 4-up, footer 4-col)
- **Tablet (≤921px):** hamburger dropdown; columns stack; button padding reduces; footer → 2-col then full
- **Mobile (≤544px):** single-column content; tighter paddings; hero type scales down
- Images use WP `srcset` on remote URLs — recreate with `next/image` sizes
- Touch: standard links/buttons; no custom gesture UI

---

## 8. Things that should be preserved exactly

- **Dark garage aesthetic** + lime `#B6E925` accent system
- **Typography pairing:** Oswald (display/UI caps) + Roboto (body)
- **Sharp / zero-radius** outline buttons with lime→filled hover
- **Header composition:** logo | nav links | Let’s Talk
- **Nav labels & order:** Home → Works → Services → About Us → Testimonial → Contact
- **Home information architecture** (hero → story → services → works → testimonial → owner → stats → team → CTA → footer)
- **Inner page pattern:** title hero → content → shared CTA band → footer
- **Stats concept:** Founded / Projects / Clients / Awards (numbers can be updated to real business data)
- **Four service pillars:** Modifying, Maintenance, Parts/Accessories, Custom Build
- **Imagery mood:** real bikes, workshop/owner/team/customer photos (replace demo stock with Road Renegades photos when available, same crop/layout roles)
- Full-bleed **home hero** as dominant first viewport visual

---

## 9. Things that should be cleaned up

### WordPress / HTTrack / demo chrome (do not port)

- HTTrack comments (`Mirrored from…`, `Added by HTTrack`)
- `noindex, nofollow` robots meta
- Yoast schema JSON, RSS/feed links, `wlwmanifest`, `xmlrpc`, `wp-json`, oEmbed
- Astra Sites **showcase CTA**, template preview scripts, DM Sans showcase font
- Cloudflare email protection + insights beacon
- WP emoji scripts, jQuery migrate, unused WooCommerce CSS leftovers
- Duplicate desktop + mobile header DOM (rebuild once, responsive)
- Per-page duplicated 125 KB inline CSS
- All remote `wp-content` / `wp-includes` CSS & JS
- WP size-variant image URLs
- `demo-screenshot.jpg` reference on Contact
- Latin placeholder lorem and wrong brand names (“Bike Modification”, “NGENG Garage”, “Matt Owen” unless real)
- Fake NY address / phone / email
- Social links pointing to `#`
- Home nav `href="#"` instead of `/`
- Copyright “Powered by Bike Modification”

### Structural debt

- Partial localization of images (Home local; other pages remote) — finish asset download before offline/dev work
- Broken external dependency: site **will not style or behave correctly** if `websitedemos.net` blocks or changes paths
- Inconsistent service naming: footer “Accessories” vs Services page “Spare parts”

---

## 10. Things that need to be recreated in React / Next.js

| Concern | Notes |
|---------|--------|
| App Router pages | One route per inventory page |
| Shared layout | `Header` + `Footer` + fonts + global CSS variables |
| Design tokens | CSS variables mirroring palette/type/spacing above |
| Components | Patterns in §5 |
| Forms | Contact + newsletter without WPForms |
| Counters | Client component with IO |
| Maps | Privacy-friendly embed strategy |
| Images | Local `public/` + `next/image`; download missing assets first |
| Fonts | `next/font` for Oswald + Roboto (drop Roboto Slab unless a section needs it) |
| SEO | Real metadata, Open Graph, favicon for Road Renegades |
| Content model | Optional MDX/CMS later; start with typed content modules |
| Rebrand | Logo, titles, copy, contact, social — align to Road Renegades |

---

## 11. Suggested Next.js route structure

```
app/
  layout.tsx                 # fonts, Header, Footer, globals
  page.tsx                   # Home  (/)
  about/
    page.tsx                 # /about
  services/
    page.tsx                 # /services
    # optional anchors: #bike-modifying #maintenance #spare-parts #custom-build
  works/
    page.tsx                 # /works
    # optional later: [slug]/page.tsx for case studies
  testimonials/
    page.tsx                 # /testimonials  (plural URL; nav label can stay "Testimonial")
  contact/
    page.tsx                 # /contact
  api/
    contact/route.ts         # form handler (if not external)
    newsletter/route.ts

components/
  layout/Header.tsx
  layout/Footer.tsx
  layout/MobileNav.tsx
  ui/Button.tsx
  ui/SectionHeading.tsx
  sections/...               # Hero, Stats, TeamGrid, CtaBand, etc.

public/
  images/...                 # migrated + newly captured assets
  favicon.ico

styles/
  globals.css                # design tokens
```

**URL mapping**

| Old | New |
|-----|-----|
| `index.html` | `/` |
| `Pages/about-us.html` | `/about` |
| `Pages/services.html` | `/services` |
| `Pages/works.html` | `/works` |
| `Pages/testimonial.html` | `/testimonials` |
| `Pages/contact.html` | `/contact` |

Redirects from old `.html` paths are optional (only needed if old URLs were public).

---

## 12. Potential GitHub Pages deployment considerations

| Topic | Guidance |
|-------|----------|
| Output mode | Use **static export** (`output: 'export'`) if hosting purely on GitHub Pages |
| Image optimization | `next/image` optimizer **does not run** on GH Pages static hosting — set `images.unoptimized: true` or use a loader/CDN |
| Base path | If site is `https://<user>.github.io/Road-Renegades/`, set `basePath: '/Road-Renegades'` and `assetPrefix` accordingly; use `Link`/`Image` with basePath awareness |
| Trailing slashes | Prefer `trailingSlash: true` for GH Pages directory-style routes |
| Forms / API routes | **API routes won’t work** on static GH Pages — use Formspree, Getform, Basin, or serverless elsewhere |
| Maps | Client-side embed with API key restricted by HTTP referrer; or static map image |
| 404 | Provide `app/not-found.tsx`; GH Pages may need `404.html` copy in export |
| SPA fallback | Not required if using static multi-page export |
| CI | Build with Node in GitHub Actions → deploy `out/` to `gh-pages` branch or Actions Pages |
| Environment | Keep any form endpoints / map keys in GitHub Actions secrets |

**Alternative:** Deploy to Vercel/Netlify for full Next.js features (Image Optimization, Route Handlers), and use GitHub only as the repo remote.

---

## 13. Risk summary & recommended next steps (analysis only)

### Critical risks

1. **Incomplete asset scrape** — Services, Works, and Testimonials pages depend on live remote images.
2. **Remote CSS/JS dependency** — visual fidelity of the current HTML is not self-contained.
3. **Demo content ≠ business content** — brand, copy, people, and contact info must be replaced for Road Renegades.
4. **No local design tokens file** — system must be reverse-engineered (done above) into CSS variables during build.

### Suggested sequence before coding UI

1. Confirm Road Renegades logo, colors (keep lime?), real photos, address, phone, email, social URLs, and which demo sections are in-scope.
2. Download all missing full-resolution assets listed in §3 (or replace with real photography).
3. Freeze a component inventory from §5 against final sitemap.
4. Scaffold Next.js App Router + tokens + Header/Footer first (visual shell), then page-by-page section migration.
5. Decide hosting (GH Pages static vs Vercel) before implementing forms.

---

## Appendix A — Elementor widget usage by page

| Widget | Home | About | Services | Works | Testimonial | Contact |
|--------|------|-------|----------|-------|-------------|---------|
| heading | 22 | 15 | 12 | 13 | 13 | 10 |
| image | 19 | 6 | 10 | 8 | 7 | — |
| image-box | 10 | 4 | — | 6 | — | — |
| text-editor | 8 | 6 | 6 | 3 | 1 | 4 |
| button | 5 | 1 | 6 | 2 | 1 | 1 |
| counter | 4 | 4 | 4 | — | — | — |
| icon-list | 1 | — | 5 | 1 | — | 1 |
| icon / icon-box | 1 | 1 | — | — | 6+4 | — |
| testimonial | — | — | — | — | 6 | — |
| star-rating | — | — | — | — | 1 | — |
| wpforms | footer | footer | footer | footer | footer | form + footer |
| google_maps | — | — | — | — | — | 1 |
| social-icons | — | — | — | — | — | 1 |
| divider | — | 2 | 1 | 1 | — | 1 |

## Appendix B — Tech stack of the scrape (for discard)

- WordPress 6.1.1
- Theme: **Astra** 4.1.2
- Page builder: **Elementor** 3.12.1
- Header/Footer: Header Footer Elementor (HFE)
- Forms: **WPForms Lite**
- Demo host: websitedemos.net (Astra Sites)

None of this should be dependencies of the Next.js app.

---

*Generated from repository inspection of HTML, inline CSS variables, Elementor markup, and `Assets/Images/`. Migration intentionally not started.*
