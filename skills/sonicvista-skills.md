# sonicvista — skills profile

**What it is:** A research system that generates audio matching a scene image — detecting sound-making objects/events in a photo and synthesizing a corresponding soundscape. Includes a mobile capture app, a Python inference API, audio ML models, and a user study.

**Sub-projects scanned:** 9 — Python inference/API server, audio-ML models (YAMNET tagging + generative audio), a Flutter mobile app, a Dockerized deployment package, Google Cloud API/storage layer, client-side scripts, audio-condition assets, and a user-study set.

**Sankha's role & contribution:** Focused DevOps/deployment contributor (~3% of history, 1 of 36 commits) — owned the containerization and cloud deployment path: authored the Dockerfile/conda environment, Cloud Run deployment guide, and VS Code launch tasks for build/deploy. Core research and modelling were done by other authors.

**Collaborative?:** Yes — primary authors Chitralekha Gupta (lead, ~25 commits) plus Stayreal-J and Priambudi Lintang Bagaskara. Sankha focused on: packaging the ML API into a reproducible Docker image and deploying it to Google Cloud Run.

**Domains:** Music/Audio, Data/ML/AI, DevOps/Infra, Backend/Cloud, Mobile, Research

**Core skills & tech:**
- Docker / containerization (multi-stage conda-based image, buildx cross-platform `linux/amd64`)
- Google Cloud Run + Container Registry deployment (gcloud CLI, memory/CPU/timeout tuning for ML workloads)
- Python ML serving stack: Flask + Gunicorn API around PyTorch/torchaudio, transformers, generative audio (audiocraft), gTTS
- Audio ML context: YAMNET audio event tagging, scene-to-audio sonification
- Conda environment management (reproducible `environment.yml`, ffmpeg/av media deps)
- Flutter/Dart mobile client (camera, audio playback, geolocation) — surrounding context
- VS Code launch-task automation for local build/run and one-command production deploy

**Capabilities demonstrated (generic):**
- Took a research-grade ML inference codebase and made it reproducibly deployable via Docker
- Configured and documented a full cloud deployment pipeline (build → tag → push → deploy → monitor)
- Tuned container resources for compute-heavy audio-generation workloads
- Bridged local dev and production with scripted, repeatable build/deploy tasks

**Commit footprint:** ~1 commit by Sankha (deployment/containerization); active 2024–2025 (repo history 2024–2025).
