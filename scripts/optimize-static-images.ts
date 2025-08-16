import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

type DirSpec = { src: string; out: string };

const DIRS: DirSpec[] = [
  { src: 'client/assets/before_afters', out: 'client/public/assets/before_afters' },
  { src: 'client/assets/diagrams', out: 'client/public/assets/diagrams' },
];

const WIDTHS = [640, 1280];
const EXT_PREF = ['.png', '.jpg', '.jpeg', '.webp'];

async function ensureDir(dir: string) {
  await fs.mkdir(dir, { recursive: true });
}

async function listOptimizableFiles(srcDir: string): Promise<string[]> {
  const files = await fs.readdir(srcDir);
  return files
    .filter((f) => EXT_PREF.includes(path.extname(f).toLowerCase()))
    .map((f) => path.join(srcDir, f));
}

async function optimize(srcPath: string, outDir: string) {
  const base = path.basename(srcPath, path.extname(srcPath));
  for (const w of WIDTHS) {
    const webpOut = path.join(outDir, `${base}-${w}w.webp`);
    const avifOut = path.join(outDir, `${base}-${w}w.avif`);

    await sharp(srcPath)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(webpOut);

    await sharp(srcPath)
      .resize({ width: w, withoutEnlargement: true })
      .avif({ quality: 50, effort: 4 })
      .toFile(avifOut);

    console.log('Generated', path.basename(webpOut), 'and', path.basename(avifOut));
  }
}

async function main() {
  for (const d of DIRS) {
    await ensureDir(d.out);
    const files = await listOptimizableFiles(d.src);
    for (const f of files) {
      console.log('Processing', f);
      await optimize(f, d.out);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

