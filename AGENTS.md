# Repository Guidelines

## Project Structure & Module Organization
- `client/` – Vite + React front-end (primary source in `client/src`, assets in `client/assets`).
- `server/` – Node/Express backend; entry at `server/index.ts`.
- `shared/` – Cross-cutting utilities, types, config.
- `apps/journal/` – Astro-based journal sub-app.
- `scripts/`, `convert-to-webp.ts` – housekeeping utilities; review before running.

## Build, Test, and Development Commands
- `npm run build` – Builds client, journal, and server bundles into `dist/`.
- `npm run dev` – Starts Express backend with hot reload (default port 3000).
- `npm run build:client` / `npm run build:server` – Targeted builds for front or backend.
- `npm run check` (`npx tsc --noEmit`) – Static type check; ensure clean output before PRs.

## Coding Style & Naming Conventions
- TypeScript across client/server; prefer strict typing and explicit interfaces.
- React components live in `client/src/components`; name files in PascalCase (`GalleryGrid.tsx`).
- Use Tailwind classes for styling; align with tokens defined in `tailwind.config.ts`.
- Maintain semantic class names and avoid inline styles unless necessary.
- Follow existing import order (React/TS first, aliases (`@/…`) before relative paths).

## Testing Guidelines
- Type safety acts as baseline; run `npm run check` pre-commit.
- Add targeted component or API tests where behaviour is complex (Jest/Vitest setup pending—mirror existing patterns if added).
- Keep manual verification notes in PR if automated coverage isn’t feasible.

## Commit & Pull Request Guidelines
- Commit messages: concise imperative lines (e.g., `feat: add before-after gallery`) followed by optional detail.
- PRs should include: summary, screenshots/GIFs for UI updates, testing checklist, linked issue/Task reference.
- Ensure `npm run check` passes and highlight any follow-ups or known gaps.

## Other
- If I edit the text of a file, whilst you are also editing it or shortly before you edit it, don't re-edit the text I have edited unless I explicitly ask you to do so.