# aisee — skills profile

**What it is:** A product ecosystem for AI-assisted smart glasses (assistive/vision + guided-tour use cases) — native mobile apps, iOS/Android companion apps talking to BLE glasses hardware via a vendor SDK, marketing/landing/docs websites, and serverless backends. A mix of Sankha's solo prototypes and larger team-built products he contributes to.

**Sub-projects scanned:** ~22 repos/working-trees — Android apps (Jetpack Compose: journal, tours, and the main mobile app), iOS apps (SwiftUI: journal, tours), Apps Script backends (journal, tours, gardens, mail-list, glasses-docs broker), static sites (glasses website, landing page, docs, assisted-tours site, global reference), a PWA tour recorder, a vendor BLE/AI glasses SDK (RTK/Kaze xcframeworks), device test harnesses, and print/design assets.

**Sankha's role & contribution:** Mixed. He is solo author on his own prototypes and infrastructure — journal Android/iOS/backend (`bsc2fast@gmail.com`), tours-recorder PWA (100%), glasses website (100%), glasses-docs broker (~83%, co-authored with 1 teammate), gardens/mail-list Apps Script. On the larger team products he is a minor/spot contributor: `aisee-mobile-android` (~<1%, 1 of 447 commits — a foreground-service fix), `aisee-landing-page` (~4%, an "Our Story" page + tooling), `assisted-tours-site` and `aisee-tours-db` (single commits). Overall: lead/solo on companion-app prototypes and web/serverless glue; small targeted contributor on the flagship team apps.

**Collaborative?:** Yes — team members include Amal Ranasinghe, Jayampathy Balasuriya, Shaveen Silva, Ovindu Atukorala, Hussel Suriyaarachchi, Ravindu Pathirana. Sankha focused on: standalone iOS/Android companion prototypes, BLE-glasses connection wiring, static marketing/docs sites, Apps Script backends, and cross-account auth/broker plumbing.

**Domains:** Mobile, Embedded/IoT/Hardware, Web/Frontend, Backend/Cloud, Data/ML/AI, Design/UX, Product/Entrepreneurship, Research.

**Core skills & tech:**
- Android — Kotlin, Jetpack Compose (Material3), Kotlin coroutines/serialization, Google Maps Compose + FusedLocation, Gradle Kotlin DSL, foreground services
- iOS — Swift / SwiftUI, Xcode / xcodegen (`project.yml`), adaptive dark-mode theming, URL-scheme OAuth
- BLE / smart-glasses hardware integration via a vendor SDK (RTK AI Device Connection / Audio Connect xcframeworks), peripheral connect/activate flows
- Google Sign-In / Firebase-provisioned OAuth (Drive, iOS/Android client configs)
- Google Apps Script serverless backends (journal, tours, gardens, mail-list) with clasp + Node deploy tooling
- Web — HTML/CSS/JS static sites, React/TypeScript (landing page), PWA (service worker, web manifest, install/offline)
- Design/print assets (Adobe Illustrator glass-print artwork)
- Cross-account auth broker / token-API SPA design; multi-domain deployment

**Capabilities demonstrated (generic):**
- Built cross-platform (iOS + Android) companion apps for AI smart-glasses, feature-matched across both
- Wired BLE hardware connection/auto-connect using a third-party device SDK
- Integrated Google Sign-In + Drive with Firebase-provisioned OAuth on mobile
- Serverless Apps Script backends backing mobile apps and mailing/tour data
- Installable PWA (tour recorder) with offline caching and web manifest
- Static marketing, documentation, and landing sites with a cross-account docs broker
- Contributed targeted fixes (e.g. Android foreground-service lifecycle) into a large team codebase

**Commit footprint:** ~130 commits by Sankha across his own repos, plus targeted contributions to team repos; active 2025–2026 (mostly 2026).
