# Style atlas

A single-page field guide: 30 public websites that stood out in 2025-2026, sorted into seven style families we named
and defined ourselves, with filter chips and one line per site. Framiad editor test round 2 (web design and agentic
coding). Method after a post by @0xMovez on X (<https://x.com/0xMovez/status/2118270441609371701>); content, families,
words and code are ours. The prompts are in `PROMPT.md`.

## Run it

```sh
python3 -m http.server 8731 --bind 127.0.0.1 --directory site
# open http://127.0.0.1:8731/
```

No build step. `site/` is the whole website (index.html, styles.css, app.js, data.js, favicon.svg); every path is
relative, so it also works from a sub-path such as GitHub Pages.

## Files

| Path | What |
| --- | --- |
| `site/data.js` | the seven families (name, rule, signs) and the 30 sites (name, link, family, one line) |
| `site/app.js` | renders the families, the chips and the filter (the chosen family is kept in the URL hash, e.g. `#glow`) |
| `site/styles.css` | the look, the CSS swatches, dark mode, 375 px layout |
| `tools/check-links.sh` | HTTP status of every link |
| `tools/capture.mjs` | headless checks and screenshots at 1440 and 375 px, light and dark; `--frames` records a scroll |
| `captures/` | screenshots and `atlas-scroll.mp4` (frames are not kept) |

## Log

**2026-11-06**
- Research: 42 candidate sites opened in headless Chromium (screenshots for our eyes only, never published). Dropped:
  Arc (being sunset), Nothing (opens on a country picker), Active Theory and Resend (did not render in time), Panic,
  Framer, Cosmos, Klim, Are.na and a few more to stay at 30. Kept 30 in seven families.
- Rights: links and our own lines only; each family has an abstract CSS swatch instead of any image of a site.
- Build: plain HTML/CSS/JS, system fonts (no font requests), dark mode, skip link, chips as buttons with
  `aria-pressed`, live count, reduced motion.
- Checks (`tools/capture.mjs`): no console errors, no horizontal overflow at 375 or 1440 px; the only target under
  24 px is the inline credit link inside a sentence (allowed by WCAG 2.5.8). All 30 links answered 200.
- Fix after the first look: the family swatch showed through the semi-transparent sticky filter bar; the bar is now
  opaque and the sticky headings follow its measured height.
- Video: 420 frames at 1280 x 720, 30 fps, stitched to H.264 with Blender (`frames_to_mp4.py` from the Tidelight
  project): `captures/atlas-scroll.mp4`, 14 s, about 3 MB.

## Publishing (waits for the owner's approval)

Nothing is online and this repo has no remote. When approved:

1. `gh repo create kaschtanov/style-atlas --public --source . --remote origin --push`
2. `gh api -X POST repos/kaschtanov/style-atlas/pages -f build_type=workflow` (Pages from GitHub Actions)
3. The workflow in `.github/workflows/pages.yml` uploads `site/`; the page is then at
   <https://kaschtanov.github.io/style-atlas/>. Add that address as the Frame's Live link.
