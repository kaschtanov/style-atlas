// Checks and captures the atlas in headless Chromium.
// node tools/capture.mjs <base-url> <out-dir> [--frames]
// Writes screenshots at 1440 and 375 px (light and dark, one filtered view) and, with --frames,
// numbered JPEG frames of a smooth scroll for a short video. Prints console errors and layout checks.
import { mkdirSync } from "node:fs";

const PW = process.env.PLAYWRIGHT_CORE || "playwright-core";
const { chromium } = await import(PW);
const exe = process.env.CHROME;
const [base, out, flag] = process.argv.slice(2);
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ executablePath: exe });
const errors = [];

async function page(width, height, scheme = "light") {
  const ctx = await browser.newContext({ viewport: { width, height }, colorScheme: scheme, deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  p.on("console", (m) => m.type() === "error" && errors.push(`${width}: ${m.text()}`));
  p.on("pageerror", (e) => errors.push(`${width}: ${e.message}`));
  await p.goto(base, { waitUntil: "load" });
  return p;
}

for (const [w, h] of [[1440, 900], [375, 812]]) {
  const p = await page(w, h);
  const overflow = await p.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  const small = await p.evaluate(() =>
    [...document.querySelectorAll("button, a")].filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width && r.height < 24;
    }).map((el) => el.textContent.trim().slice(0, 30)));
  console.log(`${w}px: horizontal overflow ${overflow}px; targets under 24px: ${JSON.stringify(small)}`);
  await p.screenshot({ path: `${out}/atlas-${w}.png` });
  await p.screenshot({ path: `${out}/atlas-${w}-full.png`, fullPage: true });
  await p.getByRole("button", { name: /Dark product glow/ }).click();
  console.log(`${w}px filter: ${await p.locator("#count").textContent()}`);
  await p.screenshot({ path: `${out}/atlas-${w}-filter.png` });
  await p.context().close();
}

const dark = await page(1440, 900, "dark");
await dark.screenshot({ path: `${out}/atlas-1440-dark.png` });
await dark.context().close();

if (flag === "--frames") {
  const p = await page(1280, 720);
  const ctx = p.context();
  await p.evaluate(() => (document.documentElement.style.scrollBehavior = "auto"));
  const max = await p.evaluate(() => document.documentElement.scrollHeight - innerHeight);
  const fps = 30, seconds = 14, hold = fps; // hold the top for a second, then ease down
  const total = fps * seconds;
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  mkdirSync(`${out}/frames`, { recursive: true });
  for (let i = 0; i < total; i++) {
    const t = Math.min(1, Math.max(0, (i - hold) / (total - 2 * hold)));
    await p.evaluate((y) => window.scrollTo(0, y), Math.round(ease(t) * max));
    await p.screenshot({ path: `${out}/frames/f_${String(i + 1).padStart(4, "0")}.jpg`, scale: "css", type: "jpeg", quality: 90 });
  }
  await ctx.close();
  console.log(`frames: ${total}`);
}

await browser.close();
console.log(errors.length ? `console errors:\n${errors.join("\n")}` : "console errors: none");
