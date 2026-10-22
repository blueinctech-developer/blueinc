# Blueinc Technologies website

A static site whose visual and motion language is modelled on cosmos.studio. The content comes from blueinctech.com.

## Commands

```bash
npm run build   # renders dist/ (no dependencies needed)
npm run serve   # serves dist/ at http://localhost:4321
npm run dev     # build + serve
```

Deploy the `dist/` folder to any static host (Netlify, Cloudflare Pages, Vercel, Apache or Nginx). URLs follow the old WordPress permalinks, such as `/about-us/` and `/our-services/web-development-services/`. Legacy paths redirect through stub pages and `_redirects`.

## Where things live

| Path | Purpose |
| --- | --- |
| `src/data/site.mjs` | All business content: copy, services, testimonials, contacts |
| `src/templates/` | Page templates (`home.mjs`, `pages.mjs`), shared components, layout |
| `src/templates/util.mjs` | Allowlist of portfolio domains that are safe to hyperlink |
| `src/assets/css/main.css` | Design tokens and all component styles |
| `src/assets/js/main.js` | Motion and interaction runtime (GSAP, ScrollTrigger, SplitText, Lenis) |
| `src/assets/vendor/` | GSAP 3.13.0 and Lenis 1.3.4, vendored locally |
| `src/config.js` | Form endpoint setting, editable without touching templates |

## Forms

Set `formEndpoint` in `src/config.js` to a URL that accepts POSTed form data, such as Formspree, Basin, or your own endpoint. Until you do, forms open the visitor's email client with the message pre-filled and addressed to contact@blueinctech.com.

## Offices

The offices are listed in `site.offices` in `src/data/site.mjs`; the first entry (Dover, Delaware) is treated as the head office. Office details feed the Contact page, the footer clocks, the Contact Us sections of the legal pages and the search-engine (JSON-LD) data.

## Legal pages

The Terms of Service (`/terms-of-service/`) and Privacy Policy (`/privacy-policy/`) are hosted on this site; their text is in `src/data/legal.mjs`.

## Media (`src/assets/media/`)

| File | What it is | Where it's used |
| --- | --- | --- |
| `showreel.mp4` | 12 s showreel built from real client sites and the team photo (1600×732, H.264, 1.7 MB) | Home hero card, with a pause button |
| `ribbon.mp4` | 8 s seamless 3D brand-ribbon loop | Home bento "100+ Websites & Apps Built" |
| `ribbon-wide.mp4` | 10 s wide 3D loop | Call-to-action panel on every page |
| `sites/*-d.jpg`, `*-m.jpg` | Full-length desktop and mobile captures of live client sites | Laptop and phone mockups; portfolio hover-scroll |

All videos are muted. They play only while on screen and never autoplay when reduced motion is set.

To re-render a video (for example, to add new client work):

1. Edit the composition in `tools/media/`: `reel-src.html` for the showreel, `orb.html` for the 3D loop (three.js).
2. Render frames with `render.js`, using Playwright with the system Chrome.
3. Encode with ffmpeg: `-c:v libx264 -crf 25 -pix_fmt yuv420p -movflags +faststart`.

## Motion

- Reduced motion is respected: when `prefers-reduced-motion` is set, all content renders statically.
- If the scripts fail to load, a 4-second fail-safe reveals all content.
- Page-to-page transitions use cross-document View Transitions, so navigation is never delayed.
