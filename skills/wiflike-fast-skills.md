# wiflike-fast — skills profile

**What it is:** A FastAPI web tool that analyzes uploaded videos of physical spaces for sensory triggers (light flicker, brightness, visual clutter, noise levels, sudden sounds), producing a scored, timeline-based accessibility report aimed at families of autistic children.

**Sub-projects scanned:** 1 — a single Python backend service with a video/audio analysis pipeline, a REST API, and a static HTML frontend (upload UI + comparison view).

**Sankha's role & contribution:** Lead developer / primary author (~67%, 10 of 15 commits). Git evidence shows Sankha built the core architecture — FastAPI app, async job-processing router, the video and audio analyzer modules, the report generator, the static build/dedupe tooling, and the comparison page. Two collaborators contributed smaller parameter-tuning commits.

**Collaborative?:** Yes — authors: Sankha Cooray (lead), plus Soundarya Ramesh and Maria-Lorena Poupet who contributed research-driven audio/visual parameter tuning. Sankha focused on: end-to-end system architecture, the media-processing pipeline, the API layer, and the frontend.

**Domains:** Software Development, Backend/Cloud, Web/Frontend, Data/ML/AI, Biology/Science, Research, Design/UX, Education/Outreach

**Core skills & tech:**
- Python 3.13
- FastAPI (routers, Pydantic v2 schemas, background tasks, async job queue, CORS, Swagger/ReDoc)
- Uvicorn ASGI server
- OpenCV + NumPy for computer-vision frame analysis
- librosa, scipy, soundfile for digital signal / audio processing
- Static HTML/CSS/JS frontend with canvas timeline charting and async upload
- CSV-driven, research-based parameter configuration

**Capabilities demonstrated (generic):**
- Designing a full-stack media-analysis service from ingest to scored report
- Computer-vision techniques: flicker detection, brightness/saturation metrics, visual-clutter and motion estimation
- Audio DSP: dB level estimation, sudden-event detection, frequency-band (low-hum / speech / high-freq) analysis
- Asynchronous long-running job handling with status polling and downloadable JSON reports
- Translating domain research (autism sensory sensitivity) into tunable, data-driven thresholds
- Building an accessible, human-centered assessment tool with a comparison workflow

**Commit footprint:** ~10 commits by Sankha; active 2025–2026 (Nov 2025 – May 2026).
