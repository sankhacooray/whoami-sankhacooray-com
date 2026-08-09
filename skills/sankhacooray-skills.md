# sankhacooray — skills profile

**What it is:** A solo personal web network built by Sankha Cooray — a family of ~25 small `*.sankhacooray.com` sites and serverless backends spanning portfolios, creative web apps, and shared infrastructure, all hosted cheaply on static hosting with credential-safe proxies.

**Sub-projects scanned:** 25 — portfolio sites (v1/v2/v3), single-file creative/utility web apps (mixlab, coffeelab, palette, biolens, fold, ensemble, date, travel, paynow, conduct, vitals, pixels client), a browser music-composing IDE (vox-track-studio), a shared JS component CDN, a Cloudflare Worker chat proxy, and several Google Apps Script backends (contact, analytics, auth, pixels proxy, dev/GitHub proxy, travel gate).

**Sankha's role & contribution:** Solo. Git evidence — every commit across all repos is authored by "Sankha Cooray" under his three identities (bsc2fast@hotmail.com, sankha@ahlab.org, bsc2fast@gmail.com); no other contributors appear in any `git shortlog -sne`. Sole author, architect, designer, and operator.

**Collaborative?:** No, solo personal network.

**Domains:** Web/Frontend, Backend/Cloud, DevOps/Infra, Design/UX, Data/ML/AI, Music/Audio, Biology/Science, Product/Entrepreneurship, Embedded/IoT/Hardware, Education/Outreach.

**Core skills & tech:**
- Vanilla-JS single-file SPAs: hash routing, theme switching persisted in `localStorage`, no build step, all-inline CSS/JS.
- Static hosting on GitHub Pages with custom domains (CNAME) fronted by Cloudflare DNS.
- Cloudflare Workers: edge proxy with per-IP rate limiting, origin allowlisting, SSE streaming, secrets via `wrangler secret`.
- Google Apps Script serverless backends managed via clasp (stable deployment URLs, Sheet-as-database, `CacheService`, Script Properties for secrets, multi-account credential profiles).
- Credential-safe proxy pattern: public thin clients call server-side proxies that inject API keys (Pexels, GA4 Data API, GitHub GraphQL, Anthropic).
- CORS handling (text/plain JSON trick to dodge preflight), cross-origin form POST backends.
- LLM integration (Anthropic API) with scoped system prompts, hard-refusal guardrails, and cost caps.
- HMAC-signed token auth: central Google-login gate with per-app allowlists and short-lived signed tokens.
- Web Audio API DSP: pitch tracking (YIN autocorrelation), onset detection, drum classification, quantization, AudioWorklet raw-PCM capture, multi-device audio routing.
- PWA packaging (web manifests, installable apps), Open Graph / Twitter share meta.
- Shared component CDN strategy — edit once, all sites update; auto-theming network footer, analytics beacon, weather and chat widgets.
- Build-time data baking (CI "bake" workflows via `repository_dispatch`), SVG + Canvas data visualization.
- API integrations with token-free public services (Open-Meteo, GeoJS) and authenticated ones (GA4, GitHub, Pexels, Withings health data).

**Capabilities demonstrated (generic):**
- Designs and ships an entire multi-site web ecosystem end to end, solo — frontend, backend, deploy, and DNS.
- Keeps secrets off the client while still shipping fully static front-ends, using serverless proxies as the trust boundary.
- Builds cohesive design systems and recurring visual/theming conventions across many independent sites.
- Implements real-time and streaming features (chat streaming, live commit feeds, audio scheduling) without heavy frameworks.
- Applies signal processing and audio engineering directly in the browser.
- Explores applied domains — coffee/nutrition chemistry, biosensing/medical informatics, music × HCI, paper engineering, metabolic self-tracking, payments — as small focused web experiments.
- Operates lean, cost-conscious infrastructure (free static hosting, cached proxies, rate limits) suitable for a self-funded personal network.

**Commit footprint:** ~367 commits by Sankha across the network (heaviest in v1 portfolio, travel gate, pixels, paynow, v3); active roughly 2024–2026.
