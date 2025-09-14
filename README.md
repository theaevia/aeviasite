# Aevia Site — Journal + CMS

This repo contains the main SPA (Vite + React + Wouter), the Express server, and an Astro sub‑app that powers the SEO‑friendly Journal with a Git‑based CMS (TinaCMS).


## Quick Start (Local)

- Requirements: Node 20+
- Install deps:
  - `npm ci`
  - `cd apps/journal && npm install`
- Optional: Tina Cloud env vars for local admin:
  - `TINA_PUBLIC_CLIENT_ID=...`
  - `TINA_TOKEN=...`
- Run servers:
  - API/SPA server: `npm run dev` (http://localhost:3000)
  - Journal dev: `npm run dev:journal` (http://localhost:4321/journal)
- CMS (Dev):
  - Run `cd apps/journal && npm run dev` to serve Astro with the static admin under `/journal/admin`.
  - Tina uses Git-backed editing; use Tina Cloud credentials to log in.


## Production (Railway)

- Env vars:
  - `TINA_PUBLIC_CLIENT_ID` and `TINA_TOKEN` (from Tina Cloud)
- Build command: `npm ci && npm run build`
- Start command: `npm start`
- The Express server serves the SPA and the Journal (`/journal`) statically.
  - TinaCMS uses Tina Cloud for authentication; content is committed to Git.


## Authoring Flow (TinaCMS)

- CMS URL: `/journal/admin` (prod) or local dev URL above.
- First time: create at least one Author (name, credentials, avatar) and Category (slug, label).
- New post:
  - Fill required fields: title, date, status, authors, categories.
  - Optional: dek, tags, hero image (src+alt), og_image, reviewed_by, disclaimer, reading_time, canonical.
  - Body in Markdown/MDX.
  - Upload images via the media picker; they are stored in `apps/journal/public/images` and referenced as `/journal/images/...`.
  - Save → Create PR (editorial_workflow) → code owners review → merge → live.


## Content Structure

- Posts (MDX): `apps/journal/src/content/posts/*.mdx`
- Authors (JSON): `apps/journal/src/content/authors/*.json`
- Categories (JSON): `apps/journal/src/content/categories/*.json`
- Images (public): `apps/journal/public/images/...` (served at `/journal/images/...`)


## Tech Overview

- SPA: Vite + React + Wouter
- Journal: Astro (static) + Tailwind + MDX + Sitemap + RSS
- CMS: TinaCMS (Git-backed) served at `/journal/admin`
- Server: Express (serves SPA and mounts `/journal` from build)


## SEO

- Main sitemap index: `/sitemap_index.xml` (includes `/journal/sitemap-index.xml`)
- Astro generates the Journal sitemap.
- Each article includes JSON‑LD Article metadata.


## Git + Reviews

- Code owners: `@theaevia/aevia-editors` (see `.github/CODEOWNERS`).
- Enable branch protection on `main`: require review from Code Owners.


## Env Vars

- `GITHUB_CLIENT_ID` — GitHub OAuth App Client ID
- `GITHUB_CLIENT_SECRET` — GitHub OAuth App Secret
- `GITHUB_SCOPES` — `public_repo` or `repo` (optional; defaults by privacy)
- `OAUTH_BASE_URL` — Override redirect base for OAuth (useful for dev tunnels)


## Notes

- Slugs are filename‑based; do not add a `slug` field in frontmatter (Astro reserves it).
- The Journal uses the site’s fonts/colors/spacing; if you want the exact SPA header & footer, we can embed React components in Astro.
