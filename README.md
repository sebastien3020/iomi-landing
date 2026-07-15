# IOMI Landing Page

Sales landing page for IOMI — The AI Wealth OS. Standalone HTML, no build step required.

## Files

| File | Purpose |
|---|---|
| `prototype.html` | **The page.** Self-contained HTML/CSS/JS (Tailwind via CDN + one inline `<style>`/`<script>`). |
| `assets/` | Figma-exported brand assets: `iomi-logo.png`, SVG icons (`icon-*.svg`), `brief-bg.png` (green 3D background), `avatar.png`. |
| `logos/` | Bank/institution logos used in the trust bar and hero-adjacent sections. |
| `wireframe-v2.md` | Validated wireframe: section-by-section structure, hooks, inspiration references. |
| `prototype-v1-backup.html` | Previous feature-listing version (contains full Goals/Capital Ideas/Performance sections if ever needed). |
| `PRODUCT.md` | Brand/product context (register, personality, anti-references, design principles). |

## Run locally

Any static server works:

```bash
cd iomi-landing
python3 -m http.server 8080
# → http://localhost:8080/prototype.html
```

Opening `prototype.html` directly with `file://` also works, but a server is closer to prod.

## Deploy

It is a static page: serve `prototype.html` (rename to `index.html`) + `assets/` + `logos/` from any host (Vercel, Netlify, Cloudflare Pages, nginx).

**Before production:**
1. Rename `prototype.html` → `index.html`.
2. Replace Tailwind CDN (`cdn.tailwindcss.com`) with a compiled Tailwind build (the CDN is not recommended for production by Tailwind). All utility classes are in this one file; a standard Tailwind CLI pass over it generates the stylesheet. Custom theme tokens are declared inline in the `tailwind.config` block in `<head>`.
3. Point the two CTA targets (`Create account`, `Start free trial`) to the real signup URL (currently `#pricing` anchors).
4. Replace the `Watch the tour` YouTube placeholder URL in `playVideo()`.
5. "As seen in" wordmarks are placeholders — replace with real press or remove.

## Design system (source of truth = Figma file `IOMI`)

- Font: **Archivo** (Google Fonts, weights 400–700)
- Green: `#26BC4B` · bright `#42DC68` · button gradient `#019426 → #008622`, border `#005D17`
- Surfaces: page `#0a0c0b` · card `#111212` · card-alt `#161717` · inset `#1E1F1F`
- Text: `#F9F9F9` / `#9BA29D` / `#7F7D83` · borders: `rgba(255,255,255,.10)` and `rgba(254,255,254,.20)`
- Status: orange `#FF9500`, blue `#64ACFF`, red `#ED3622`, yellow `#DCBD42`
- Radii: cards 10–14px, pills/buttons full

## JS behaviours (all vanilla, in the single `<script>`)

- Scroll reveals via IntersectionObserver (`.fade`, `.prob-line` stagger)
- Counters (`.cnt`), progress-bar fills (`.barf`), SVG line draw-ins (`.draw`), CES ring sweep
- Dashboard Personal/Business toggle (`setDash`) incl. dual-series Business chart
- AI chat typewriter loop, idle-cash calculator (`idleCalc`), scrollspy nav, FAQ accordion
- `prefers-reduced-motion` honored everywhere

## Designer TODOs (placeholders in the page)

- `assets/security-3d.jpg` — ✅ AI-generated (fal.ai, FLUX) encrypted-pipes visual in IOMI green, 1127×1400. Designer may refine or replace, but it is production-usable.
- Connect-scatter section ("Everything connects to IOMI"): the watch ⌚ / car 🚗 / sneaker 👟 / house 🏠 tokens are emoji placeholders — replace with small 3D icons or brand illustrations.
- `assets/tour.mp4` — ✅ installed (1:07, 10.5 MB, H.264 1080p, compressed from the 82 MB master in 2 CAPS/Iomi/Brand & Assets/Videos).
- `assets/brief-bg.png` (green 3D swirl, exported from Figma) is used as: Daily-Briefing card background and idle-cash calculator background. Replace with final art if desired.
