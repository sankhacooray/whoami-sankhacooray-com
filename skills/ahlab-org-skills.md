# ahlab-org — skills profile

**What it is:** The internal digital platform for a university research lab (Augmented Human Lab) — a fleet of small web apps, serverless backends, and static sites for member onboarding, directory, chat, status monitoring, asset tracking, events, and a shuttle-bus tracker.

**Sub-projects scanned:** 26 git repos — Google Apps Script web apps/backends (member-login broker, asset/AMS, unified AI chat, directory sync, status dashboard, OpenAI usage dashboard, meeting/travel/tea-tap tools), HTML/JS form flows (welcome, visitor, farewell), static websites (main site, NUS-ISB, CHI-2026 page), a Python QR/PDF asset generator, a shared CDN/asset repo, a Cloudflare Worker, and a workspace control-panel dashboard.

**Sankha's role & contribution:** Solo across the entire workspace. Every repo is authored almost exclusively by Sankha (git shortlog shows `Sankha Cooray <bsc2fast@hotmail.com>` / `<sankha@ahlab.org>` for ~100% of commits; the only other author is an automated "AH Lab Welcome Bot" in the CDN repo).

**Collaborative?:** No, solo — sole human developer and maintainer of the whole platform.

**Domains:** Web/Frontend, Backend/Cloud, DevOps/Infra, Data/ML/AI, Design/UX, Education/Outreach, Product/Entrepreneurship, Research.

**Core skills & tech:**
- Google Apps Script (V8 runtime) — serverless web apps, `doGet`/`doPost` endpoints, OAuth scopes, advanced services (People API), Sheets as datastore
- clasp CLI for local Apps Script development + Node-based deploy/fetch tooling
- JavaScript / HTML5 / CSS — vanilla static sites and single-page app patterns
- Node.js build pipelines (custom `build-all.js`, image conversion/resize scripts, deploy tools)
- Cloudflare Workers + Wrangler (edge API + static serving)
- Python (venv, `qrcode`, `reportlab`) for QR-code + PDF asset generation
- Google Workspace integration: Directory/OU sync, mailing groups, Gmail/MailApp, Drive
- LLM API integration (OpenAI + Anthropic) with per-user usage/cost analytics
- GitHub Pages hosting with custom domains (CNAME) and a shared CDN repo

**Capabilities demonstrated (generic):**
- Built and operates a multi-service internal platform end to end (auth broker, directory, chat, status, dashboards)
- Serverless backends on Apps Script with Google Sheets as the data layer and cross-origin form intake
- Member lifecycle flows: onboarding, visitor keepsake/guest-account provisioning, offboarding
- A live system-status monitor that health-checks sites, deployments, and upstream providers
- An admin dashboard surfacing LLM org/usage/cost data behind a member-only gate
- A real-time transit tracker ported from Apps Script to a Cloudflare Worker
- Static websites and event/conference pages deployed on GitHub Pages with custom domains
- Shared CDN/asset repo with build-time image optimization; a workspace control-panel GUI for running per-repo commands

**Commit footprint:** ~700+ commits by Sankha across the workspace; active 2025–2026 (bulk of activity in 2026).
