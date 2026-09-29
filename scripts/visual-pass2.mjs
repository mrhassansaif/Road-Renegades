import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "visual-compare", "pass2");
fs.mkdirSync(OUT, { recursive: true });

const jobs = [
  ["home", 1440, 900, "https://websitedemos.net/bike-modification-04/", "http://localhost:3000/"],
  ["home", 768, 1024, "https://websitedemos.net/bike-modification-04/", "http://localhost:3000/"],
  ["home", 390, 844, "https://websitedemos.net/bike-modification-04/", "http://localhost:3000/"],
  ["about", 1440, 900, "https://websitedemos.net/bike-modification-04/about-us/", "http://localhost:3000/about"],
  ["services", 1440, 900, "https://websitedemos.net/bike-modification-04/services/", "http://localhost:3000/services"],
  ["gallery", 1440, 900, "https://websitedemos.net/bike-modification-04/works/", "http://localhost:3000/gallery"],
  ["contact", 1440, 900, "https://websitedemos.net/bike-modification-04/contact/", "http://localhost:3000/contact"],
];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const report = [];

  for (const [name, w, h, orig, next] of jobs) {
    const ctx = await browser.newContext({
      viewport: { width: w, height: h },
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();

    async function measure(url) {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForTimeout(900);
      await page.evaluate(() => {
        document
          .querySelectorAll('[class*="astra-sites"]')
          .forEach((e) => {
            e.style.display = "none";
          });
      });
      return page.evaluate(() => {
        const q = (s) => document.querySelector(s);
        const pick = (el) => {
          if (!el) return null;
          const cs = getComputedStyle(el);
          const r = el.getBoundingClientRect();
          return {
            w: Math.round(r.width),
            h: Math.round(r.height),
            fs: cs.fontSize,
            fw: cs.fontWeight,
            lh: cs.lineHeight,
            ta: cs.textAlign,
            color: cs.color,
            pad: cs.padding,
            bc: cs.borderTopColor,
            br: cs.borderRadius,
          };
        };
        const toggle = q("[aria-label='Open menu'], .menu-toggle, .ast-mobile-menu-trigger-minimal");
        let hamburger = false;
        if (toggle) {
          const cs = getComputedStyle(toggle);
          hamburger = cs.display !== "none" && cs.visibility !== "hidden";
        }
        return {
          header: pick(q("header") || q("#masthead")),
          h1: pick(q("h1")),
          btn: pick(q(".elementor-button") || q(".rr-btn")),
          nav: pick(q(".main-header-menu a") || q(".rr-nav__link")),
          scrollH: document.documentElement.scrollHeight,
          hamburger,
        };
      });
    }

    const o = await measure(orig);
    await page.screenshot({ path: path.join(OUT, `${name}-${w}-orig.png`) });
    const n = await measure(next);
    await page.screenshot({ path: path.join(OUT, `${name}-${w}-next.png`) });
    await page.screenshot({
      path: path.join(OUT, `${name}-${w}-next-full.png`),
      fullPage: true,
    });
    report.push({ name, w, orig: o, next: n });
    console.log(
      `${name}@${w}`,
      `h1 ${o.h1?.fs}/${o.h1?.ta} -> ${n.h1?.fs}/${n.h1?.ta}`,
      `btn ${o.btn?.bc} -> ${n.btn?.bc}`,
      `hdr ${o.header?.h} -> ${n.header?.h}`,
      `ham ${o.hamburger}->${n.hamburger}`,
    );
    await ctx.close();
  }

  fs.writeFileSync(path.join(OUT, "metrics.json"), JSON.stringify(report, null, 2));
  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
