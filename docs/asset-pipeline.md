# Asset Pipeline & Environment Guide

## Deterministic asset URLs

- All build targets honour `VITE_ASSET_BASE_URL`. When set, Vite emits bundle assets with that prefix while the client-side `asset()` helper uses the same base at runtime.
- Repository assets (checked into `client/assets` or `client/public`) should be referenced via the helper:

```ts
import heroImg from "@assets/hero_images/aevia-clinic3.webp";
import { asset } from "@/lib/assets";

const heroUrl = asset(heroImg);
```

- Runtime strings (e.g. data-driven content) should call `asset()` or `assetSrcSet()` to pick up the environment base:

```tsx
import { asset, assetSrcSet } from "@/lib/assets";

const pdfUrl = asset("/assets/pdfs/aevia-glow-guide.pdf");
const responsiveSet = assetSrcSet(`/assets/gallery/item-320w.webp 320w, /assets/gallery/item-640w.webp 640w`);
```

- Critical UI surfaces should provide fallbacks via `DEFAULT_ASSET_FALLBACK_PATH` to avoid empty states if a remote image is temporarily unavailable.

## Build-time checks

- `npm run verify:assets` (or `npm run ci:verify`) builds the site and runs `scripts/verify-assets.js`.
- The script scans `dist/` HTML & CSS for asset references, ensuring repository files exist and remote URLs return HTTP 200.
- Set `CHECK_ASSETS_SKIP_REMOTE=1` to bypass remote checks locally when offline.

## GitHub Actions integration

- `.github/workflows/asset-integrity.yml` executes on pushes to `main`/`staging` and on relevant pull requests.
- Provide `VITE_ASSET_BASE_URL` (and any other env such as `VITE_SITE_URL`) as repository or environment secrets so preview/staging builds mirror production routing.

### Optional: CDN sync example

Add a workflow step after `npm run ci:verify` to push static assets to environment-specific buckets:

```yaml
      - name: Sync assets to CDN bucket
        if: github.ref == 'refs/heads/staging'
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.STAGING_AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.STAGING_AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: eu-west-2
          CDN_BUCKET: ${{ secrets.STAGING_ASSET_BUCKET }}
        run: |
          npm install -g aws-cli
          aws s3 sync dist/public/assets "s3://$CDN_BUCKET/assets" --delete --cache-control 'public,max-age=31536000,immutable'
```

Repeat with production credentials for `main`. Ensure the deployment platform sets `VITE_ASSET_BASE_URL` to the bucket's CDN URL so the React helper resolves to the right origin.

## Operational notes

- Merge hotfixes from `main` into `staging` immediately after release to keep environments aligned and prevent asset drift.
- Document any manual asset uploads (e.g. large media stored off-repo) in the release notes so the asset checker can be updated if paths change.
