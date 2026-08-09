# clockpuzzle — skills profile

**What it is:** A web-based e-commerce and play platform for rotating multi-layer "clock" puzzles — players solve puzzles online for free and can buy printed versions, backed by a payment API and a local multi-repo control dashboard.

**Sub-projects scanned:** 5 — static PWA storefront/player frontend, serverless payments API, CDN placeholder site, local Python "central" dev dashboard, and a print-templates asset folder.

**Sankha's role & contribution:** Co-developer / project lead on scaffolding — git attributes the bulk of feature commits to a shared build identity (`clockpuzzle <prasanth@flowsxr.com>`), while Sankha's own emailed commits (bsc2fast@hotmail.com) cover the repo bootstrap, custom-domain setup, and workspace/dashboard patterns. Estimated hands-on share is modest (~15–25% of tracked commits) but includes project setup and the reusable central-dashboard tooling.

**Collaborative?:** Yes — authors are `Sankha Cooray` and a shared/collaborator identity `clockpuzzle` (prasanth@flowsxr.com, the primary committer). Sankha focused on: repo/workspace scaffolding, custom domain + hosting config, and the local control-panel dashboard pattern.

**Domains:** Software Development, Web/Frontend, Backend/Cloud, DevOps/Infra, Product/Entrepreneurship, Design/UX

**Core skills & tech:**
- JavaScript (vanilla, no framework) — single-page storefront/player with CSS transforms for the rotating puzzle mechanic, localStorage cart/order state
- Node.js + Express serverless functions on Vercel (`@vercel/node`), with a local Express dev server mirroring the serverless routing
- Stripe integration — Checkout Sessions, webhook signature verification (raw-body handling), order lookup with Stripe as source of truth
- Python 3 standard-library HTTP server (`ThreadingHTTPServer`) for a local multi-repo control dashboard (git status, launch.json command runner, output streaming, adb/xcrun device detection)
- PWA + web share metadata — web manifest, Open Graph / Twitter cards, apple-touch icons, theme-color
- Multi-root VS Code workspace with compound launch configs; custom-domain static hosting (CNAME), CDN subdomain

**Capabilities demonstrated (generic):**
- Building a payments-enabled e-commerce flow with security-conscious API design (rate limiting, uniform error responses to prevent enumeration, redacted PII in order lookups)
- Correct Stripe webhook handling (registering raw-body route before JSON parser for signature verification)
- Interactive front-end interaction design (layered rotating puzzle UI via CSS transforms, no external game engine)
- Local developer-tooling: a workspace control panel that surfaces per-repo commands, git state, and connected devices
- Setting up multi-repo project structure, custom domains, and installable-PWA metadata

**Commit footprint:** ~4 commits directly attributed to Sankha (bsc2fast@hotmail.com); active 2026 (Mar–May). Broader project development ran under a shared build identity across the same period.
