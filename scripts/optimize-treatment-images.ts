import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

// Source images live in Vite's bundled assets folder
const SRC_DIR = 'client/assets/treatment_images';
// Optimized assets will be emitted to public so we can reference with stable URLs
const OUT_DIR = 'client/public/assets/treatment_images';

// Target widths for responsive cards (covers ~1x/2x DPR for ~320px cards)
// Include a larger desktop variant for hero clarity
const WIDTHS = [320, 640, 1280];

// Images to optimize (basename without extension -> list of acceptable source extensions to try)
const FILES = [
  'anti-wrinkle-hero',
  'lower-face-2',
  'neck-2',
  'armpit-2',
  'dao',
  'jaw-slim-hero',
];

const EXT_PREF = ['.jpg', '.jpeg', '.png', '.webp'];

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

async function findExisting(srcBase: string): Promise<string | null> {
  for (const ext of EXT_PREF) {
    const p = path.join(SRC_DIR, srcBase + ext);
    try {
      await fs.access(p);
      return p;
    } catch {}
  }
  return null;
}

async function optimizeOne(srcPath: string, baseName: string) {
  for (const width of WIDTHS) {
    const webpOut = path.join(OUT_DIR, `${baseName}-${width}w.webp`);
    const avifOut = path.join(OUT_DIR, `${baseName}-${width}w.avif`);

    // Create WebP (slightly higher quality to preserve detail)
    await sharp(srcPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5, nearLossless: false })
      .toFile(webpOut);

    // Create AVIF (excellent compression at moderate quality)
    await sharp(srcPath)
      .resize({ width, withoutEnlargement: true })
      .avif({ quality: 50, effort: 4 })
      .toFile(avifOut);

    console.log(`Generated ${path.basename(webpOut)} and ${path.basename(avifOut)}`);
  }
}

async function main() {
  console.log('Optimizing treatment images...');
  await ensureDir(OUT_DIR);

  for (const name of FILES) {
    const src = await findExisting(name);
    if (!src) {
      console.warn(`Skip ${name}: no source found in ${SRC_DIR}`);
      continue;
    }
    console.log(`Processing ${src}...`);
    await optimizeOne(src, name);
  }

  console.log('Done. Files written to', OUT_DIR);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
