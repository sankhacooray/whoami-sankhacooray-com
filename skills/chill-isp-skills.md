# chill-isp — skills profile

**What it is:** A web platform connecting instructors and students for an education/research setting, bundling AI tutoring assistants, an adaptive quizzing engine, and course/resource management in a single full-stack app.

**Sub-projects scanned:** 1 — `chill-isp-web`, a standalone Next.js 15 (App Router) app with frontend + API routes in one repo.

**Sankha's role & contribution:** Co-developer ~14% (160 of 1135 commits across all authors). Second-largest contributor by commit count, active May 2025–Feb 2026.

**Collaborative?:** Yes — primary authors include Moritz Messerschmidt (lead, ~356), Sankha Cooray (~160), Priambudi Lintang Bagaskara, and Punyawee Anunpattana. Sankha focused on: LLM-driven resource metadata classification (analytics pipeline + standalone node script), the AI-tutor (NUSMedGPT) instructor-side UI, course configuration and student-phase onboarding/scheduling, custom resource labeling with tag search/filtering, dashboard settings, and course/user API routes.

**Domains:** Software Development, Web/Frontend, Backend/Cloud, Data/ML/AI, Education/Outreach, Design/UX, Research

**Core skills & tech:**
- TypeScript, React 19, Next.js 15 (App Router), server + API routes in one codebase
- Tailwind CSS v4, Radix UI primitives, Lucide icons, TipTap rich-text editor (with math/KaTeX)
- Prisma ORM with multiple schemas; MongoDB and relational data stores
- NextAuth authentication, role-based route/platform access control
- LLM/AI integration: OpenAI and Google Generative AI (Gemini) SDKs, text embeddings, RAG-style context assembly
- ML techniques: k-means clustering, topic/embedding clustering, IRT (item-response-theory) calibration for adaptive quizzing
- AWS SDK (S3 storage, SES email), presigned uploads; Nodemailer email flows
- Data export/reporting: ExcelJS, jsPDF; charts via Recharts
- Testing with Vitest; ESLint; batch/standalone node scripts (classification, seeding, load/admin tooling)
- Infra present in repo: Docker, Terraform (AWS ECR/ECS), crontab-driven scheduled jobs, Mixpanel analytics

**Capabilities demonstrated (generic):**
- Building AI-assisted education features end-to-end: prompt-driven tutoring UI plus supporting backend
- Designing an LLM-driven content-classification pipeline (auto-labeling/metadata assignment) usable both in-app and as a scheduled batch job
- Implementing an adaptive assessment engine grounded in psychometric methods (IRT) and knowledge-gap analysis
- Full-stack feature delivery: React UI, typed API endpoints, Prisma data models, auth/access control
- UX polish across responsive/mobile layouts, tag search + filtering, and instructor configuration workflows
- Working effectively as a co-developer in a multi-author research-lab codebase with PR-based flow

**Commit footprint:** ~160 commits by Sankha; active 2025–2026 (May 2025 through Feb 2026).
