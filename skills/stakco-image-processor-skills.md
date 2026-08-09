# stakco-image-processor — skills profile

**What it is:** A multi-project .NET 8 solution powering the image/media processing backend of the Stakco platform — a Web API, a CLI tool, and a shared core library, containerised and deployed to Google Cloud.

**Sub-projects scanned:** 4 — ASP.NET Core Web API (`Stakco.API`), console CLI (`Stakco.CLI`), shared core logic library (`Stakco.Core`), and an xUnit test project (`Stakco.Test`).

**Sankha's role & contribution:** Solo — 192 of 194 commits authored by Sankha (remaining 2 are the same person under an alias). Sole architect and maintainer.

**Collaborative?:** No, solo.

**Domains:** Software Development, Backend/Cloud, DevOps/Infra, Data/ML/AI, Design/UX

**Core skills & tech:**
- C# / .NET 8 (`net8.0`), Visual Studio solution structure with layered projects (API / CLI / Core / Test)
- ASP.NET Core Web API; Newtonsoft JSON serialization
- Image/graphics processing with SkiaSharp (cross-platform native assets for Linux/macOS/Windows) and System.Drawing.Common
- Audio processing with NAudio and NAudio.Lame (MP3 encoding)
- `System.CommandLine` for CLI tooling
- Google Cloud: Cloud Storage (Google.Cloud.Storage.V1), Cloud Run / App Engine flexible env, Secret Manager
- Docker multi-stage builds (SDK build → aspnet:8.0-alpine runtime, libgdiplus setup)
- Node-based deploy automation scripts (semantic version bump of `.csproj`, `gcloud` deploy)
- xUnit testing with coverlet coverage

**Capabilities demonstrated (generic):**
- Designing a clean layered .NET solution separating shared core logic from delivery surfaces (API vs CLI)
- Cross-platform native image manipulation and format conversion
- Containerising a .NET service and deploying it to managed cloud infrastructure with secret management
- Building both an online API and an offline batch CLI over the same core engine
- Automating versioned releases and cloud deployment

**Commit footprint:** ~192 commits by Sankha; active 2021–2026.
