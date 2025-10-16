# Aevia Site — Journal

This repo contains the main SPA (Vite + React + Wouter), the Express server, and an Astro sub‑app that powers the SEO‑friendly Journal. A CMS can be configured separately (previously TinaCMS).


## Quick Start (Local)

- Requirements: Node 20+
- Install deps:
  - `npm ci`
  - `cd apps/journal && npm install`
- Run servers:
  - API/SPA server: `npm run dev` (http://localhost:3000)
  - Journal dev: `npm run dev:journal` (http://localhost:4321/)


## Production (Railway)

- Build command: `npm ci && npm run build`
- Start command: `npm start`
- The Express server serves the SPA. Deploy the Journal separately (e.g. Vercel at https://journal.theaevia.co.uk).

## Asset integrity

- Run `npm run verify:assets` after building to ensure every referenced image or static file resolves locally or returns HTTP 200. CI executes `npm run ci:verify` automatically (see `docs/asset-pipeline.md`).


## Content Structure

- Posts (MDX): `apps/journal/src/content/posts/*.mdx`
- Authors (JSON): `apps/journal/src/content/authors/*.json`
- Categories (JSON): `apps/journal/src/content/categories/*.json`
- Images (public): `apps/journal/public/images/...` (served at `https://journal.theaevia.co.uk/images/...`)


## Tech Overview

- SPA: Vite + React + Wouter
- Journal: Astro (static) + Tailwind + MDX + Sitemap + RSS
- CMS: not configured (set up your preferred headless CMS when ready)
- Server: Express (serves SPA only)


## SEO

- Main sitemap index: `/sitemap_index.xml`
- Astro generates the Journal sitemap at `https://journal.theaevia.co.uk/sitemap-index.xml`.
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
