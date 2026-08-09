# kavy — skills profile

**What it is:** A cross-platform mobile "app suite" built around a conversational/voice AI companion, paired with a cloud analytics backend and a local developer control panel.

**Sub-projects scanned:** 3 — a React Native mobile app (iOS + Android), a Node/TypeScript analytics API service, and a Python local workspace dashboard.

**Sankha's role & contribution:** Lead / primary developer (~90%+ by git evidence). He authored 313/367 commits in the mobile app, 137/137 in the analytics service, and 7/7 in the umbrella repo; the only other contributor touched the mobile app (~54 commits).

**Collaborative?:** Yes — one other contributor (YasithSam) on the mobile app only. Sankha owned the mobile app end-to-end, and was the sole author of the backend analytics service, the CI/CD pipelines, and the workspace tooling.

**Domains:** Software Development, Mobile, Web/Frontend, Backend/Cloud, DevOps/Infra, Data/ML/AI, Product/Entrepreneurship

**Core skills & tech:**
- React Native (0.72) mobile development — JavaScript, React Navigation, component/view/service architecture
- Native mobile integration — iOS (Objective-C, Xcode, CocoaPods) and Android (Java/Kotlin, Gradle)
- Mobile platform features — speech-to-text/voice input, push notifications (OneSignal), Apple & Google sign-in, permissions, local storage, device info
- Backend/API — Node.js + TypeScript, Express, Mongoose/MongoDB, layered controller/route/model/middleware design
- Cloud & DevOps — Docker, Google Container Registry, Google Cloud Run, GitHub Actions CI/CD (Android build, Xcode analyze, backend deploy, website)
- Tooling & quality — ESLint, Prettier, Husky/lint-staged, Jest, TypeScript build (tsc, tsc-alias, path aliases)
- Python — local `http.server`-based developer dashboard for multi-repo workspace control
- App release engineering — App Store / Play Store distribution, versioning, submodule-based multi-repo layout

**Capabilities demonstrated (generic):**
- Ships a full consumer mobile product across both app stores, front to back
- Designs and deploys a containerized REST analytics/telemetry backend on managed cloud infra
- Integrates conversational-AI / voice interaction features into a mobile UX
- Stands up automated CI/CD across mobile builds and backend deploys
- Structures a multi-repo project (git submodules) with its own developer tooling and dashboards
- Handles authentication, notifications, and analytics/instrumentation as cross-cutting concerns

**Commit footprint:** ~457 commits by Sankha across the suite; active 2022–2024 (with maintenance touches into 2026).
