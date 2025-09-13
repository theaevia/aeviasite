const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function generateVariants(inputPath, outBaseName) {
  const outDir = path.resolve('client/public/assets/before_afters');
  ensureDir(outDir);
  const sizes = [640, 1280];
  for (const width of sizes) {
    const base = path.join(outDir, `${outBaseName}-${width}w`);
    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true, fit: 'inside' })
      .avif({ quality: 60 })
      .toFile(base + '.avif');
    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true, fit: 'inside' })
      .webp({ quality: 80 })
      .toFile(base + '.webp');
  }
}

(async () => {
  const inputDir = path.resolve('client/assets/before_afters');
  const targets = [
    { file: 'under-eye-1.png', base: 'under-eye-1' },
    { file: 'masseter-1.png', base: 'masseter-1' },
  ];
  for (const t of targets) {
    const src = path.join(inputDir, t.file);
    if (!fs.existsSync(src)) {
      console.warn(`Missing source image: ${src}`);
      continue;
    }
    console.log(`Generating variants for ${t.file}...`);
    await generateVariants(src, t.base);
  }
  console.log('Before/after variants generated.');
})();

