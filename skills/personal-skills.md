# personal — skills profile

**What it is:** A cluster of small, self-hosted personal utility apps — a login-gated web record backend, thin public wrapper sites, static reference pages, and a local media-organizer tool.

**Sub-projects scanned:** 7 — a Google Apps Script backend, a static GitHub Pages wrapper site, a Python/Flask local media-tagging web app, a CSV-to-HTML document generator, and several static single-page HTML reference sites.

**Sankha's role & contribution:** Solo developer — 100% of commits across all repos are his (git identity `Sankha Cooray <bsc2fast@hotmail.com>` / `bsc2fast@gmail.com`). aegis-appscript 7/7, aegis-com 5/5, medical-history 3/3, video-organizer 18/18.

**Collaborative?:** No, solo.

**Domains:** Software Development, Web/Frontend, Backend/Cloud, DevOps/Infra, Data/ML/AI, Design/UX

**Core skills & tech:**
- Google Apps Script (V8 runtime) backend: per-user data provisioning, OAuth-scoped Google Sheets + People API, `USER_ACCESSING` login-gated web app deployment
- `@google/clasp` v3 tooling: local-to-cloud push/pull, stable-URL release automation via scripted redeploy-to-fixed-deploymentId (custom Node deploy script)
- Python 3 + Flask: templated (Jinja) multi-view local web app, ~14 routes incl. GET/POST/PUT/DELETE JSON write-through endpoints, dev vs. prod (src/ vs dist/) build modes
- Media processing: ffmpeg/ffprobe pipelines for thumbnail generation and audio-waveform extraction with on-disk caching
- Flat-file JSON document store as single source of truth (versioned data model)
- Front-end: vanilla JS SPA patterns (canvas waveform rendering, fetch-based state, hash/view routing), responsive CSS grid / calendar-timeline layouts, hand-authored styling
- Static site delivery: GitHub Pages hosting, custom domains via CNAME + Cloudflare DNS, `.nojekyll`, Open Graph / Twitter Card / theme-color metadata, inline SVG favicons
- Data tooling: CSV-driven generators (Python `csv` module) producing printable HTML

**Capabilities demonstrated (generic):**
- Designs privacy-first architectures where each user's data lives in their own account/Drive, not the operator's
- Ships a full serverless auth-gated app (Google sign-in) plus a decoupled public landing/wrapper front-end
- Builds local single-user desktop-class web tools (Flask + browser UI) with in-browser editing saved straight to disk
- Automates release engineering to keep a stable production URL across redeploys
- Turns structured tabular input into polished, print-ready documents
- Handles the full stack solo: backend, front-end, media pipeline, hosting, DNS, and metadata

**Commit footprint:** ~33 commits by Sankha; active 2025–2026.
