# whoami.sankhacooray.com

Cloudflare Worker with static assets (`public/`). Deploy with `npm run deploy`
(wrangler). See README.md / PROJECT_NOTES.md.

**Cache rule:** `public/_headers` serves `app.js` and `data.js` as immutable for a
year. They are referenced from `index.html` with a `?v=` stamp — bump the stamp
whenever either file changes (including content edits to `data.js`).

## Lighthouse
<!-- lighthouse-optimized: 2026-10-31 -->
- Baseline mobile: performance 76 · accessibility 100 · best-practices 100 · SEO 92.
- Fixed: Google Fonts non-blocking (print/onload + noscript), `data.js`/`app.js` deferred with `?v=` stamps (theme set by a tiny inline head script so there's no flash), real `robots.txt` + `sitemap.xml` (the SPA fallback was returning HTML), `_headers` (1y immutable for stamped JS, 30d for images/icons).
- Left: shared-script/gtag and Cloudflare beacon findings (handled centrally).
