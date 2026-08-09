# ICE — skills profile

**What it is:** A multi-repo workspace for the ICE (Innovation, Creativity & Entrepreneurship) / Design Thinking @ SL programmes in Sri Lanka — event/course websites, a Google-sign-in member portal (participants, mentors, teams, projects), its Apps Script backend, a certificate generator, and workshop teaching material.

**Sub-projects scanned:** 7 — a design-thinking programme portal frontend (`ice-central-web`, static PWA), its backend (`ice-central-api`, Google Apps Script/clasp), two event/course sites (`designthinking.lk` static PWA; `ice2025-designthinking-lk` Nuxt 3 app), a `designthinking-lk` git site, a Python-based certificate/PDF generator (`ice-certificate-redesign`), and a VS Code + Claude teaching/workshop page (`claude-vscode-workshop`). Also present: `icehub` (see collaborative note).

**Sankha's role & contribution:** Lead/solo on the ICE-owned repos he authored — `ice-central-web` (316/320), `ice-central-api` (65+/68), `designthinking-lk` (17/17), `ice2025-designthinking-lk` (4/4), certificate generator and workshop page. Sole author of these. **Exception:** `icehub` is authored almost entirely by another engineer (Prasanth Sasikumar, 95 commits); Sankha contributed only ~3 commits (admin/roles server endpoints in a Nuxt/TypeScript codebase) — not his project.

**Collaborative?:** Mostly solo on ICE-owned repos. `icehub` is collaborative and NOT Sankha-led — Sankha's touch there was limited to a few admin role/email server endpoints (`server/api/admin/*`, `utils/roles.ts`).

**Domains:** Web/Frontend, Backend/Cloud, Design/UX, Education/Outreach, Product/Entrepreneurship, Software Development, DevOps/Infra

**Core skills & tech:**
- Frontend: vanilla HTML5/CSS3/JavaScript static PWAs (versioned service worker `sw.js`, `manifest.webmanifest`), responsive/mobile-tuned layouts, animated backgrounds, skill-chip/card UI
- Nuxt 3 (Vue) + TailwindCSS + Three.js (`ice2025-designthinking-lk`) with PostCSS/autoprefixer and `marked` markdown rendering
- Backend: Google Apps Script managed via clasp — a JSON API over Google Sheets (users/teams/messages/announcements) with Google Drive image uploads, plus a separate Google sign-in broker minting HMAC-signed tokens
- Auth/security: Google OAuth sign-in flow, HMAC token signing, secret handling via Script Properties (never in source)
- Python: certificate/PDF generation pipeline (`build_certificate*.py`, HTML→PDF), asset-driven design iteration
- Rich social/link-preview meta (Open Graph, Twitter, canonical URLs), SEO
- Hosting: custom domains via GitHub Pages/CNAME (designthinking.lk, ice2026.designthinking.lk), static deploy tooling
- Education content: VS Code + Claude Code workshop material

**Capabilities demonstrated (generic):**
- Building a full member portal (profiles, teams, projects) as a static PWA front-end over a serverless Apps Script + Google Sheets backend — no dedicated server
- Implementing a secure Google-login broker with signed tokens and proper secret hygiene
- Shipping event/course marketing sites with SEO and rich share cards across custom domains
- Modern SSR/SPA work with Nuxt 3, Tailwind, and Three.js 3D visuals
- Automated certificate generation from templates via Python
- Producing developer-education / workshop material

**Commit footprint:** ~400+ commits by Sankha across ICE-owned repos; active 2025–2026.
