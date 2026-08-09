# chill-spark — skills profile

**What it is:** A micro-learning mobile product ("Spark") delivering short, well-timed learning nudges, backed by a Next.js platform and supported by a research study, marketing site, and content-generation pipeline. A multi-repo, multi-contributor product built inside a university-lab setting.

**Sub-projects scanned:** 9 — a React Native mobile app, a Next.js backend/admin platform, a research/study mobile build, a marketing website, a local multi-repo control-panel dashboard, a content-generation pipeline, plus docs, media, and design-mockup folders.

**Sankha's role & contribution:** Lead/co-developer. Solo on the marketing site and the local dashboard tooling; top committer on the mobile app (~187 of 354 commits, roughly half) and a major co-developer on the backend platform (~105 of 449 commits) and the study app (~19 of 38). Not a contributor to the manual content-generation pipeline.

**Collaborative?:** Yes — alongside contributors including Moritz, Priambudi Lintang Bagaskara, Punyawee/Bell Anunpattana, and Shreyas Sridhar. Sankha focused on: the mobile app end-to-end (releases, native fixes, notification/nudge features), the platform's mobile-facing API + auth, the nudge/scoring engine and admin dashboard, cloud infrastructure, and workspace developer tooling.

**Domains:** Mobile, Web/Frontend, Backend/Cloud, DevOps/Infra, Data/ML/AI, Product/Entrepreneurship, Research, Education/Outreach.

**Core skills & tech:**
- Mobile: React Native (bare workflow, RN 0.84 / React 19), TypeScript, iOS + Android native projects, Reanimated/gesture handling, push notifications (Notifee + Firebase Messaging), Crashlytics, background fetch, device sensors, keychain/secure storage, WebView, video.
- Backend/Web: Next.js 15 (App Router), TypeScript, MongoDB (Mongoose + native driver), Prisma/PostgreSQL, NextAuth plus a bespoke mobile bearer/refresh-token auth scheme, REST API design with a documented mobile contract.
- Frontend/admin UI: React, Radix UI, Tailwind, TipTap rich-text editor, Recharts dashboards, KaTeX/markdown rendering.
- Cloud/AI integrations: AWS (S3, SES), OpenAI and Google Generative AI SDKs, nodemailer, analytics (Mixpanel).
- DevOps/Infra: Terraform (cron/scheduled jobs, content-generation infra), Docker, GitHub Actions CI/CD for App Store + Play Store releases, dependency/security scanning.
- Data/ML: signal collection + scoring/nudge-policy engine, k-means clustering, adaptive-quiz schema, timing-based personalization.
- Tooling: Python (custom local dev-server control panel, Monday↔GitHub sync automation), Jest + Vitest testing.

**Capabilities demonstrated (generic):**
- Shipped a cross-platform mobile app through full App Store / Play Store release cycles, including store-review remediation, versioning, and CI-driven builds.
- Designed and maintained a mobile-facing backend API with a custom token-auth flow and a kept-in-sync API contract between app and server.
- Built a notification/nudge system spanning device registration, scheduled cron jobs, a server-side scoring/policy engine, and an admin analytics dashboard.
- Implemented privacy/permission features and account-deletion cascades to satisfy platform policy and research-ethics needs.
- Provisioned cloud infrastructure as code (Terraform) for scheduled backend jobs and content generation.
- Authored internal developer tooling: a local workspace control panel and cross-tool project/board synchronization automation.
- Produced a standalone marketing site for the product.

**Commit footprint:** ~310 commits by Sankha across the four git repos he contributed to; active 2026.
