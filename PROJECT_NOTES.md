# whoami-sankhacooray-com — project knowledge & dev log

> Living document. Captures what this project is, how it was built, the decisions
> behind it, and where to pick up next. Read this first when revisiting.

Live: **https://whoami.sankhacooray.com/** · Repo: `sankhacooray/whoami-sankhacooray-com`
(local: `/Users/sankha/Projects/sankhacooray/whoami-sankhacooray-com`)

---

## 1. What this is

A minimalist, **single-viewport (non-scrollable on desktop)** "who am I" page for
Sankha Cooray. It's an interactive identity card: one person seen through several
professional **lenses** (engineer, immersive/XR, maker, creative, scientist,
innovator), each with a "how much of me is this" percentage and a set of skills.

Design principle: **less is more.** No build step, no framework — plain
`index.html` + a ~140-line vanilla-JS renderer + one data file. Desktop fits one
screen; mobile scrolls naturally.

Goal beyond a portfolio: help answer *who am I / what's my Ikigai / what's my
service to the world* — framed as perspectives + skills, derived from real work.

---

## 2. How the identity was derived (important — the method)

The content is **not** hand-waved. It was synthesised by scanning **every project
workspace under `~/Projects`** and weighting Sankha's *real* git contribution:

- Multiple agents scanned each workspace (git `shortlog -sne`, `log --author`,
  READMEs, package/manifest/build files) to detect stack, domains, and — crucially
  — **solo vs. collaborative** work. For shared repos, only Sankha's slice was
  credited (e.g. `sonicvista` ~1 commit / DevOps only; `chill-isp` ~14% co-dev;
  `soundarya` = a rebuild FOR someone else; `aisee` mixed; `clockpuzzle` minor).
- Each workspace produced one high-level `skills/{workspace}-skills.md` profile.
- Those profiles were distilled into the domains, percentages, and skill chips in
  `public/data.js`.

**Git identities treated as Sankha:** name contains "Sankha"; emails
`bsc2fast@hotmail.com`, `bsc2fast@gmail.com`, `sankha@ahlab.org`,
`scooray@nus.edu.sg`.

**Privacy rule (kept throughout):** high-level only. No proprietary source,
algorithms, secrets, or client-identifying IP in `skills/*.md` or on the page.
`skills/` is research-only and is **NOT deployed** (only `public/` ships). Public
contact is LinkedIn only — no address/phone/DOB (consistent with the v3 site).

### Grounding source
Bio facts cross-checked against `../chat-sankhacooray-com/knowledge.md` (the site
assistant's KB): SW engineer, innovator, game/AR developer from Sri Lanka; R&D at
Augmented Human Lab (NUS) / prior Embla Software Innovation; BSc Physical Sciences
(Maths, Physics, CS); XR/AR/MR/VR + IoT/robotics + BCI.

---

## 3. Architecture / files

```
public/                     # the ONLY thing deployed
  index.html                # shell: top bar, identity, nav-cards row, panel, footer + all CSS
  app.js                    # renderer: builds cards + panels from DATA, theme, hash routing, keyboard
  data.js                   # window.DATA — ALL content (role, ikigai, tabs[], skills). Edit this.
  icon.svg  manifest.webmanifest  og.png
skills/                     # per-workspace *-skills.md research (21 files). NOT deployed.
wrangler.toml  package.json # Cloudflare deploy config
CNAME                       # fallback only (if ever moved to GitHub Pages); unused by CF Worker
README.md  PROJECT_NOTES.md
```

Everything is driven by `public/data.js`. Adding/renaming a perspective or editing
skills = edit that file only; `app.js` regenerates cards + panels + the Overall
bars. No other file needs to change for content edits.

### Data model (`window.DATA`)
- `role` (HTML string) — the top paragraph. `ikigai` (HTML, `<b>` = accent).
- `tabs[]` — first entry is **Overall**; the rest are domains. Each tab:
  - `label` (lowercase; also the URL hash + card title, capitalised)
  - `note` — short line shown on the card
  - `pct` — the lens % (card big number + panel `%` tag); **Overall has no pct**
    (its card shows `explore →`)
  - `heading`, `blurb`, `tagline` — panel detail (left column)
  - `skills[]` — chips; item can be a string or `{label, key:true}` (key = accent chip)
  - Overall only: `bars[]` of `{label, value}` — the animated "perspective mix"

### Rendering / behaviour (`app.js`)
- Theme: dark default; follows OS on first visit; persisted in `localStorage`
  (`whoami-theme`); toggle button top-right.
- Nav **cards** (`.cardnav`, `role="tab"`) double as navigation; clicking selects.
- **Hash deep-links:** `/#engineer` opens that perspective; `hashchange` handled;
  `history.replaceState` keeps the URL in sync. Shareable per-perspective links.
- Keyboard: ← / → move between perspectives.
- Overall `bars` animate width on show.

### Layout (the non-scroll trick)
- `.stage` is a CSS grid, `grid-template-rows: auto auto 1fr auto auto`:
  top bar / identity / **nav-cards (1fr, centered → fills the middle)** /
  detail panel / footer. Content is anchored top & bottom; cards fill the gap.
- `grid-template-columns: minmax(0,1fr)` + `.stage>*{min-width:0}` — REQUIRED, else
  the implicit `auto` column sizes to the widest child and causes horizontal
  overflow on mobile. (This bit us once; keep it.)
- Desktop `body{overflow:hidden}`; mobile (`max-width:760px`) switches to scroll,
  cards → 2 columns, rows all `auto`.

---

## 4. Deployment (and the one gotcha)

Deployed as a **Cloudflare static-assets Worker** (`[assets] directory = "./public"`,
`not_found_handling = "single-page-application"`). Account
`9a1da48a0f61e7cebcba39517856d87e`, zone `sankhacooray.com`
(`fd998f2f4187a7c35147ee30d40e715f`). Auth via `CLOUDFLARE_API_TOKEN` env var.

```bash
npm run deploy      # = wrangler deploy — uploads public/ (only changed files)
```

**Gotcha (documented in `wrangler.toml`):** our token can deploy Workers + edit
DNS but **cannot** edit `/zones/.../workers/routes`. So a `custom_domain = true`
route in `wrangler.toml` makes `wrangler deploy` fail with `Authentication error
[code: 10000]` (even though the asset upload succeeds). The custom domain was
therefore attached **once, out-of-band** via the account-level Workers Custom
Domains API, which the token IS allowed to call:

```
PUT https://api.cloudflare.com/client/v4/accounts/9a1da48a0f61e7cebcba39517856d87e/workers/domains
Authorization: Bearer $CLOUDFLARE_API_TOKEN
{ "zone_id":"fd998f2f4187a7c35147ee30d40e715f",
  "hostname":"whoami.sankhacooray.com",
  "service":"whoami-sankhacooray-com", "environment":"production" }
```

That binding persists server-side, so plain `wrangler deploy` keeps updating the
live site. Re-run the PUT only if the domain is ever detached. (Also captured in
Claude memory `cloudflare-worker-custom-domain-token`.)

### Verify testing (how screenshots were checked)
Headless Chrome one-shot `--screenshot` has a quirk: it lays out at a wider default
then captures at `--window-size`, so the right edge *looks* clipped even when it
isn't. **Authoritative check = load the page in an iframe forced to the target
width and measure `documentElement.scrollWidth` / element rects.** That's how we
confirmed "no overflow" (mobile docScrollW=375 in 390; desktop scrollH==innerH
from 1152→1440 wide).

---

## 5. Content synthesis — the current numbers

Perspective lenses are **independent intensities** (how much of me is this), NOT a
pie that sums to 100. Current values in `data.js`:

Overall "mix" bars: Software Engineer 95 · Immersive & Games 76 · Product Innovator
72 · Hardware & IoT Maker 68 · AI/ML Builder 62 · Creative Technologist 58 · HCI
Researcher 52 · Audio & Music Tech 45.

Tab lenses: engineer 95 · immersive 76 · maker 68 · creative 58 · scientist 55 ·
innovator 72.

Ikigai line: *"to blend the physical and the digital — so advanced technology feels
human, playful, and within everyone's reach."*

These are editorial estimates from the scan; tune freely in `data.js`.

---

## 6. Change log (what we did, in order)

1. Scanned ~21 workspaces under `~/Projects` via parallel agents → `skills/*.md`.
   (`emo-drink` and `ICE` filled in manually; `emo-drink`'s client name kept out.)
2. Synthesised identity → `data.js`; built the shell (`index.html`), renderer
   (`app.js`), icon, manifest, OG image; wired into `sankhacooray.code-workspace`.
3. Deployed as a CF static-assets Worker; attached custom domain via the domains
   API (token can't do worker routes). Verified live (200 + TLS + SPA fallback).
4. **Trim pass:** removed the `$ whoami` eyebrow + big "Sankha Cooray" heading
   (top app bar keeps the name), the "the whole picture" / "how the mix breaks
   down" / "the mix" labels, and the "perspective 01–06" kicker tags.
5. **Cards pass:** turned the text tab bar into a row of 7 **perspective cards**
   that fill the middle band and double as navigation; anchored content top/bottom.
   Added `note` per tab. Verified no vertical/horizontal overflow.

Commits: `da9ab95` (initial) → `741b7dc` (trim) → `831353e` (cards).

---

## 7. Backlog / ideas for next time

- **Content accuracy:** revisit the percentages and per-domain skill chips with
  Sankha's own judgement; they're first-pass estimates from git.
- **Publications / proof:** optional "selected work" or auto-pulled publications
  (OpenAlex, like the v3 apex) — but keep the one-screen constraint.
- **Network integration:** could adopt the shared `cdn.sankhacooray.com/js`
  components (auto-theming footer, analytics beacon) used across the network.
  Currently standalone. See Claude memory `network-shared-components`.
- **Deeper card interaction:** hover preview, or an expanded card state; keep it
  minimal.
- **A11y polish:** full `tablist`/`tabpanel` `aria-controls` wiring, focus-visible
  rings on cards, `prefers-reduced-motion` already handled.
- **OG image:** regenerate `public/og.png` (via `_og.html` recipe in git history)
  if the tagline/branding changes; the tab list + URL slightly crowd at the bottom.
- **Very short viewports (<700px tall):** not a target (desktop non-scroll assumes
  ≥~720px tall); revisit if needed.

## 8. Gotchas to remember
- Edit content in `public/data.js` only. `role`/`ikigai` are rendered as
  **innerHTML** (use `&amp;`, `<b>`), other fields as text/HTML per template.
- Keep `grid-template-columns: minmax(0,1fr)` + `min-width:0` on `.stage` children.
- Don't add `transform: translateY` hover "lift" on cards/buttons (machine-wide UI
  rule). Use border/background/shadow for hover affordance.
- `skills/*.md` is intentionally not deployed — don't move it into `public/`.
- No GitHub Pages here; deploy is Cloudflare only. `CNAME` is a dormant fallback.
