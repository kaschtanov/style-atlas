# Prompts

The prompts given to Claude Code to make the Style atlas. The first does almost all of the work; the other two are the
follow-ups that were actually needed.

## 1. The build prompt

```text
Build a small, beautiful, single-page static website called "Style atlas": a field guide to how notable websites look in 2025 and 2026.

Research
- Collect 25 to 30 public websites that stood out for their visual design in 2025-2026: product sites, studios, personal sites, tools. Mix well-known and niche.
- Open every candidate in a headless browser and keep only sites that load (HTTP 200, page renders). Note the date.
- Sort them into 5 to 8 style families that you name and define yourself (for example "Editorial serif", "Swiss technical", "Dark product glow", "3D worlds"). Each family gets: a name, a one-sentence rule a designer could apply, and 3 to 4 short visible signs ("near-black ground", "oversized type").
- For each site write one line, in your own words, on what makes its style. Plain and concrete, no hype words.

Rights
- Links and your own short descriptions only. No screenshots, logos, images or copied text from the sites.
- Each family gets a small abstract swatch drawn in CSS (no images) that hints at the style.

Page
- One page: masthead, filter chips (one per family plus "All", with counts), the families in order, each with its swatch, rule, signs and a numbered list of its sites (name, domain, one line, opens in a new tab).
- A short "How this was made" section, and one line crediting the method: "Method after a post by @0xMovez on X".
- Plain HTML, CSS and JavaScript, no build step, no external requests (system fonts). Data in its own data.js file.
- All paths relative, so the page also works from a sub-path such as GitHub Pages (/style-atlas/).
- Accessible: real buttons with aria-pressed for the chips, a live count, visible focus, skip link, 24 px minimum targets, AA contrast, prefers-reduced-motion and a dark mode.
- Responsive from 375 px to 1440 px with no horizontal scroll.

Check
- Serve the folder with `python3 -m http.server`, open it in headless Chromium at 375 and 1440 px (light and dark), click a filter, report console errors, horizontal overflow and targets under 24 px, and save screenshots.
- Fix what you find, then show me the screenshots.
```

## 2. Follow-up: the sticky bar

```text
When you scroll, the family swatch slides under the filter bar and shows through it. Make the bar opaque and keep the sticky family headings below the bar's real height, also when the chips wrap to two rows.
```

## 3. Follow-up: a scroll video for the Frame

```text
Record a 14-second scroll through the page at 1280 x 720, 30 fps: hold the top for a second, ease down to the end, hold for a second. Save numbered JPEG frames and turn them into an H.264 MP4 with Blender's sequencer. Set the view transform to Standard so Blender does not tone-map the page's colours.
```
