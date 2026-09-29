# Design Tokens

Values derived from the original Astra + Elementor scrape (`index.html` inline CSS and Elementor `post-17.css`). TypeScript mirror: `lib/design/tokens.ts`. CSS variables: `app/globals.css` (`--rr-*`).

## Colors (Astra `--ast-global-color-*`)

| Token | Value | Role |
|-------|-------|------|
| accent | `#b6e925` | Primary lime |
| white / ink | `#ffffff` | Primary text |
| muted | `#d8d8d8` | Secondary text |
| surface | `#0f0f0f` | Section / header surfaces |
| void | `#080808` | Page background / button hover text |
| glass | `rgba(255,255,255,0.2)` | Hairline borders |
| soft | `rgba(255,255,255,0.75)` | Nav default link color |

## Typography

- Display: Oswald 700 (h1–h6)
- Body: Roboto 400, 16px (15px ≤544px)
- Buttons: Oswald 400, 14px, letter-spacing 2px, uppercase
- Header CTA: Oswald 700, 13px, uppercase
- Eyebrows / counter titles: Oswald 700, 12px, letter-spacing 2px, uppercase

### Heading scale

| | Desktop | ≤921px | ≤544px | Line-height |
|--|---------|--------|--------|-------------|
| H1 | 80px | 72px | 40px | 1.1 |
| H2 | 40px | 32px | 26px | 1.1 |
| H3 | 32px | 28px | 24px | 1.1 |
| H4 | 24px | 22px | 20px | 1.2 |
| H5 | 18px | 17px | 16px | 1.2 |
| H6 | 12px | 12px | 12px | 1.25 |

## Layout

- Container: **1200px**, gutters 40px / 20px mobile
- Header min-height / menu line-height: **70px**
- Breakpoints: tablet **921px**, mobile **544px** (Astra)
- Section pads (Elementor): 104 / 80 / 64 / 40px; hero 320 / 128 / 200px
- Footer primary: 50px top, 30px bottom/sides; below bar min-height 80px
- Footer columns: `1fr 1fr 1fr 2fr`

## Buttons

- Border: 2px solid; radius: **0**; shadow: **none**
- Outline: lime text/border → hover lime fill + `#080808` text
- Header: hover white fill + `#080808` text

## Components

Site-specific classes (`rr-*`) — not a generic component library:

Header, Navigation, MobileNav, Footer, SectionHeading, CtaButton, ServiceCard, GalleryCard, TestimonialCard, ContactBlock, HomeHero, PageHero, Breadcrumbs, FaqItem.
