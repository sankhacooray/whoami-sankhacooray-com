# whoami-sankhacooray-com

`whoami.sankhacooray.com` — a minimalist, single-viewport "who am I" page for
**Sankha Cooray**. One person, many perspectives: an interactive identity card
that lets a visitor explore the different professional lenses behind the work
(engineer, immersive/XR, maker, creative, scientist, …) and the skills under
each.

Design principle: **less is more.** No build step — plain `index.html` + a tiny
data-driven renderer. Desktop is deliberately **non-scrollable** (everything
fits one viewport); mobile scrolls naturally.

## Structure

```
index.html    # shell: identity header, tab bar, panel area, footer
app.js        # ~120 lines: renders tabs/panels from DATA, theme toggle, keyboard nav
data.js       # the ONLY content file — role, ikigai, perspective mix, per-domain skills
icon.svg      manifest.webmanifest    CNAME
skills/       # per-workspace *-skills.md — the raw research behind data.js (not deployed)
```

Edit **`data.js`** to change any content. Tabs, percentages, and skill chips are
all generated from it.

## How the identity was derived

`skills/*.md` are per-workspace skill profiles distilled from scanning every
project workspace under `~/Projects`, weighting Sankha's own contribution via
git history (solo vs. collaborative). They are kept high-level on purpose — no
proprietary/IP detail — and feed the synthesis in `data.js`.

## Deploy

Cloudflare Worker with static assets (`public/`), served at
`whoami.sankhacooray.com`.

```bash
npm run deploy        # wrangler deploy — uploads public/ as static assets
```

The custom domain is already bound to the Worker. Because our
`CLOUDFLARE_API_TOKEN` can deploy Workers + edit DNS but **not** edit Worker
routes, the domain was attached once via the account-level Workers Custom
Domains API rather than a `custom_domain` route in `wrangler.toml` (see the note
in that file). The binding persists, so plain `wrangler deploy` keeps the live
site updated. No GitHub Pages / `CNAME` involved — the `CNAME` file is kept only
as a fallback if the site is ever moved to Pages.

## Related

- `v3-sankhacooray-com` — the full portfolio (apex `sankhacooray.com`).
- `cdn-sankhacooray-com` — shared network components.
