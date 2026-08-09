# itiles — skills profile

**What it is:** A cross-platform SDK and app suite for "iTiles" — interactive Bluetooth-connected floor/wall tiles with light, sound, vibration, and touch/shake sensing — used to build immersive games and music/MIDI experiences on physical hardware.

**Sub-projects scanned:** 9 — connector/SDK libraries for Web (Web Bluetooth, TypeScript), Android (Java/Kotlin), and Unity (C#); a Unity game app and an HTML5 web port; a MIDI web demo; a docs site; and a local multi-repo control dashboard.

**Sankha's role & contribution:** Solo owner/author of the SDK layer and tooling (Web, Android, Unity libraries, Unity package, MIDI demo, docs, and the central dashboard are ~100% his); co-developer on the shared Unity game app (~10%, 13 of 127 commits) alongside a multi-person lab team.

**Collaborative?:** Mixed — the SDK/library and tooling repos are solo (single author). The Unity game app is collaborative (authors incl. A. Xess, S. Sridhar, M. de Zoysa); there Sankha focused on core game/session managers, cloud & local database, auth/backend integration, and game-mode logic (Chasing Lights, Memory, Music Orchestration).

**Domains:** Software Development, Embedded/IoT/Hardware, Mobile, Web/Frontend, Music/Audio, Backend/Cloud, DevOps/Infra

**Core skills & tech:**
- Bluetooth Low Energy (BLE) integration across three platforms against one shared wire protocol; ESP-NOW mesh concept (master tile ↔ paired standard tiles)
- Web Bluetooth API + TypeScript library (Rollup build, ESM/CJS + typings, published npm-style package with CDN distribution)
- Android BLE library in Java/Kotlin (Gradle 8, Android Gradle Plugin, library + app modules, GATT/scan callbacks)
- Unity SDK in C# packaged as a Unity Package Manager (git-URL installable) module with prefab + event-driven TX/RX API
- Web MIDI API (requestMIDIAccess) for a browser-based MIDI/music demo
- Web Audio synthesis, vanilla-JS game architecture, virtual on-screen tile grid mirroring hardware
- Python HTTP server tooling (http.server) for a workspace control dashboard; adb device discovery
- Cross-platform API parity design; documentation site authoring (protocol + per-binding guides)

**Capabilities demonstrated (generic):**
- Designed and shipped a consistent multi-platform SDK (Web / Android / Unity) over a single BLE hardware protocol
- Built hardware-to-software bridges: scanning, pairing, connection state, sensor/touch events, and light/sound/vibration control
- Authored a browser MIDI + Web Audio experience and an offline-capable HTML5 game port that optionally mirrors to real tiles
- Contributed game logic, session/user management, and cloud/local persistence to a collaborative Unity application
- Created developer-facing docs and a local multi-repo dashboard for running/monitoring the projects

**Commit footprint:** ~177 commits by Sankha across the repos; active 2023–2026.
