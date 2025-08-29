const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function generateResponsiveVariants(inputPath, outBaseName) {
  const outDir = path.resolve('client/public/assets/treatment_images');
  ensureDir(outDir);

  const sizes = [320, 640, 1280];
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

(async () => {
  const profhiloSrc = path.resolve('client/assets/hero_images/profhilo.jpg');
  await generateResponsiveVariants(profhiloSrc, 'profhilo');
  console.log('Generated responsive variants for profhilo.');

  const jawlineSrc = path.resolve('client/assets/hero_images/jawline-slimming.jpg');
  await generateResponsiveVariants(jawlineSrc, 'jawline-slimming');
  console.log('Generated responsive variants for jawline-slimming.');

  const jawline2Src = path.resolve('client/assets/hero_images/jawline-slimming-2.jpg');
  await generateResponsiveVariants(jawline2Src, 'jawline-slimming-2');
  console.log('Generated responsive variants for jawline-slimming-2.');

  const jawline3Src = path.resolve('client/assets/hero_images/jawline-slimming-3.webp');
  await generateResponsiveVariants(jawline3Src, 'jawline-slimming-3');
  console.log('Generated responsive variants for jawline-slimming-3.');

  const jawline4Src = path.resolve('client/assets/hero_images/jawline-slimming-4.png');
  await generateResponsiveVariants(jawline4Src, 'jawline-slimming-4');
  console.log('Generated responsive variants for jawline-slimming-4.');

  const poly1Src = path.resolve('client/assets/hero_images/polynucleotides-1.jpg');
  await generateResponsiveVariants(poly1Src, 'polynucleotides-1');
  console.log('Generated responsive variants for polynucleotides-1.');

  const underEye1Src = path.resolve('client/assets/hero_images/under-eye-1.jpg');
  await generateResponsiveVariants(underEye1Src, 'under-eye-1');
  console.log('Generated responsive variants for under-eye-1.');

  const model1Src = path.resolve('client/assets/hero_images/model-1.webp');
  await generateResponsiveVariants(model1Src, 'model-1');
  console.log('Generated responsive variants for model-1.');

  // Model-2 for Sunekos thumbnail/hero
  const model2Src = path.resolve('client/assets/hero_images/model-2.webp');
  await generateResponsiveVariants(model2Src, 'model-2');
  console.log('Generated responsive variants for model-2.');
})();
