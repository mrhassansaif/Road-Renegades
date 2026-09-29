/**
 * Visual fidelity capture against LIVE original demo + Next.js rebuild.
 */
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "visual-compare");

const VIEWPORTS = [
  { name: "1440", width: 1440, height: 900 },
  { name: "1280", width: 1280, height: 800 },
  { name: "1024", width: 1024, height: 768 },
  { name: "768", width: 768, height: 1024 },
  { name: "430", width: 430, height: 932 },
  { name: "390", width: 390, height: 844 },
  { name: "360", width: 360, height: 800 },
];

const PAGES = [
  { key: "home", next: "/", original: "https://websitedemos.net/bike-modification-04/" },
  { key: "about", next: "/about", original: "https://websitedemos.net/bike-modification-04/about-us/" },
  { key: "services", next: "/services", original: "https://websitedemos.net/bike-modification-04/services/" },
  { key: "gallery", next: "/gallery", original: "https://websitedemos.net/bike-modification-04/works/" },
  { key: "testimonials", next: "/testimonials", original: "https://websitedemos.net/bike-modification-04/testimonial/" },
  { key: "contact", next: "/contact", original: "https://websitedemos.net/bike-modification-04/contact/" },
];

const NEXT = "http://localhost:3000";

async function measure(page) {
  return page.evaluate(() => {
    const pick = (el) => {
      if (!el) return null;
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        w: Math.round(r.width),
        h: Math.round(r.height),
        top: Math.round(r.top + scrollY),
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        fontFamily: cs.fontFamily,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
        textTransform: cs.textTransform,
        color: cs.color,
        bg: cs.backgroundColor,
        padding: `${cs.paddingTop} ${cs.paddingRight} ${cs.paddingBottom} ${cs.paddingLeft}`,
        margin: `${cs.marginTop} ${cs.marginRight} ${cs.marginBottom} ${cs.marginLeft}`,
        border: cs.border,
        borderRadius: cs.borderRadius,
        boxShadow: cs.boxShadow === "none" ? "none" : cs.boxShadow.slice(0, 60),
        maxWidth: cs.maxWidth,
        minHeight: cs.minHeight,
        display: cs.display,
        gap: cs.gap,
      };
    };

    const header =
      document.querySelector("#masthead") ||
      document.querySelector("header") ||
      document.querySelector(".site-header");
    const footer =
      document.querySelector("#colophon") || document.querySelector("footer");
    const h1 = document.querySelector("h1");
    const btn =
      document.querySelector(".elementor-button") ||
      document.querySelector(".rr-btn") ||
      document.querySelector(".ast-custom-button");
    const navLink =
      document.querySelector(".main-header-menu a") ||
      document.querySelector(".rr-nav a");
    const container =
      document.querySelector(".elementor-section .elementor-container") ||
      document.querySelector(".rr-container");

    // Top-level content sections
    const sections = Array.from(
      document.querySelectorAll(
        ".elementor-top-section, main > section, main .rr-section, .rr-hero",
      ),
    )
      .slice(0, 14)
      .map((el, i) => {
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return {
          i,
          h: Math.round(r.height),
          pad: `${cs.paddingTop}/${cs.paddingBottom}`,
          bg: cs.backgroundColor,
        };
      });

    const logo = document.querySelector(".custom-logo, .rr-header__logo img, header img");
    return {
      vw: innerWidth,
      scrollH: document.documentElement.scrollHeight,
      header: pick(header),
      footer: pick(footer),
      h1: pick(h1),
      btn: pick(btn),
      navLink: pick(navLink),
      container: pick(container),
      logo: logo
        ? {
            w: Math.round(logo.getBoundingClientRect().width),
            h: Math.round(logo.getBoundingClientRect().height),
          }
        : null,
      sections,
      hasDesktopNav: !!document.querySelector(
        ".main-header-menu, .rr-nav--desktop",
      ),
      hamburgerVisible: (() => {
        const b = document.querySelector(
          ".menu-toggle, .ast-mobile-menu-trigger-minimal, [aria-label='Open menu']",
        );
        if (!b) return false;
        const cs = getComputedStyle(b);
        return cs.display !== "none" && cs.visibility !== "hidden";
      })(),
    };
  });
}

async function shot(page, url, file) {
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
  await page.waitForTimeout(1200);
  await page
    .addStyleTag({
      content: `
      [data-nextjs-toast], nextjs-portal, #astra-sites-preview, .as-preview,
      .ast-theme-transparent-header .ast-above-header-bar { }
      .ast-quick-edit, .customize-partial-edit-shortcut { display:none!important }
    `,
    })
    .catch(() => {});
  // Hide Astra Sites floating template chrome if present
  await page.evaluate(() => {
    document
      .querySelectorAll(
        "#astra-sites-preview, .as-preview, .ast-quick-edit, [class*='astra-sites']",
      )
      .forEach((el) => {
        if (el.id?.includes("astra") || el.className?.toString?.().includes("astra-sites"))
          el.style.display = "none";
      });
  });
  await page.screenshot({ path: file, fullPage: false });
  const m = await measure(page);
  await page.screenshot({ path: file.replace(".png", "-full.png"), fullPage: true });
  return m;
}

function diffs(a, b) {
  if (!a || !b) return ["missing"];
  const out = [];
  const n = (l, x, y, t = 8) => {
    if (x == null || y == null) return;
    if (Math.abs(Number(x) - Number(y)) > t)
      out.push(`${l}: ${x} → ${y} (Δ${Number(y) - Number(x)})`);
  };
  const s = (l, x, y) => {
    if (x == null || y == null) return;
    if (String(x) !== String(y)) out.push(`${l}: [${x}] vs [${y}]`);
  };
  n("scrollH", a.scrollH, b.scrollH, 300);
  if (a.header && b.header) {
    n("header.h", a.header.h, b.header.h, 6);
    s("header.minHeight", a.header.minHeight, b.header.minHeight);
    s("header.padding", a.header.padding, b.header.padding);
  }
  if (a.h1 && b.h1) {
    s("h1.fontSize", a.h1.fontSize, b.h1.fontSize);
    s("h1.fontWeight", a.h1.fontWeight, b.h1.fontWeight);
    s("h1.lineHeight", a.h1.lineHeight, b.h1.lineHeight);
    n("h1.w", a.h1.w, b.h1.w, 40);
  }
  if (a.btn && b.btn) {
    s("btn.fontSize", a.btn.fontSize, b.btn.fontSize);
    s("btn.padding", a.btn.padding, b.btn.padding);
    s("btn.borderRadius", a.btn.borderRadius, b.btn.borderRadius);
    n("btn.h", a.btn.h, b.btn.h, 4);
  }
  if (a.navLink && b.navLink) {
    s("nav.fontSize", a.navLink.fontSize, b.navLink.fontSize);
    s("nav.fontWeight", a.navLink.fontWeight, b.navLink.fontWeight);
    s("nav.color", a.navLink.color, b.navLink.color);
  }
  if (a.container && b.container) {
    n("container.w", a.container.w, b.container.w, 16);
  }
  if (a.logo && b.logo) {
    n("logo.w", a.logo.w, b.logo.w, 8);
    n("logo.h", a.logo.h, b.logo.h, 4);
  }
  s("hamburger", a.hamburgerVisible, b.hamburgerVisible);
  s("desktopNav", a.hasDesktopNav, b.hasDesktopNav);
  const len = Math.min(a.sections.length, b.sections.length);
  for (let i = 0; i < len; i++) {
    n(`sec[${i}].h`, a.sections[i].h, b.sections[i].h, 80);
    s(`sec[${i}].pad`, a.sections[i].pad, b.sections[i].pad);
  }
  return out;
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const report = [];

  const jobs = [];
  // All pages @ 1440
  for (const p of PAGES) jobs.push({ p, vp: VIEWPORTS[0] });
  // Home @ all viewports
  for (const vp of VIEWPORTS.slice(1)) jobs.push({ p: PAGES[0], vp });
  // Other pages @ 768 + 390
  for (const p of PAGES.slice(1)) {
    jobs.push({ p, vp: VIEWPORTS.find((v) => v.name === "768") });
    jobs.push({ p, vp: VIEWPORTS.find((v) => v.name === "390") });
  }

  for (const { p, vp } of jobs) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();
    const base = `${p.key}-${vp.name}`;
    process.stdout.write(`→ ${base}\n`);
    let o = null;
    let n = null;
    try {
      o = await shot(page, p.original, path.join(OUT, `${base}-orig.png`));
    } catch (e) {
      console.error("ORIG", e.message);
    }
    try {
      n = await shot(page, NEXT + p.next, path.join(OUT, `${base}-next.png`));
    } catch (e) {
      console.error("NEXT", e.message);
    }
    const d = diffs(o, n);
    report.push({ page: p.key, vp: vp.name, diffs: d, orig: o, next: n });
    console.log(`  ${d.length} diffs`);
    await ctx.close();
  }

  fs.writeFileSync(path.join(OUT, "report.json"), JSON.stringify(report, null, 2));
  const summary = report
    .map(
      (r) =>
        `## ${r.page}@${r.vp} (${r.diffs.length} diffs)\n` +
        r.diffs.map((x) => `- ${x}`).join("\n"),
    )
    .join("\n\n");
  fs.writeFileSync(path.join(OUT, "summary.md"), summary);
  console.log("\n" + summary);
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
