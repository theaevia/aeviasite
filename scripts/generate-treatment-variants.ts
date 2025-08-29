import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

async function generateResponsiveVariants(inputPath: string, outBaseName: string) {
  const outDir = path.resolve('client/public/assets/treatment_images');
  await ensureDir(outDir);

  const sizes = [320, 640, 1280] as const;
  for (const width of sizes) {
    const base = path.join(outDir, `${outBaseName}-${width}w`);
    // AVIF
    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true, fit: 'inside' })
      .avif({ quality: 60 })
      .toFile(base + '.avif');
    // WebP
    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true, fit: 'inside' })
      .webp({ quality: 80 })
      .toFile(base + '.webp');
  }
}

async function main() {
  const profhiloSrc = path.resolve('client/assets/hero_images/profhilo.jpg');
  await generateResponsiveVariants(profhiloSrc, 'profhilo');
  // Jawline Slimming already has responsive variants in public; nothing to do.
  console.log('Generated responsive variants for profhilo.');

  // Sunekos (model-2) variants
  const model2Src = path.resolve('client/assets/hero_images/model-2.webp');
  await generateResponsiveVariants(model2Src, 'model-2');
  console.log('Generated responsive variants for model-2.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
