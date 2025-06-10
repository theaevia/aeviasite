import sharp from 'sharp';
import path from 'path';

const images = [
  'royalty-free-skin4.jpg',
  'royalty-free-skin-botox2.jpg',
  'royalty-free-skin-botox1.jpg',
  'royalty-free-skin3.jpg',
  'royalty-free-skin2.jpg',
  'royalty-free-skin1.jpg'
];

const inputDir = path.join(process.cwd(), 'client/assets/hero_images');
const outputDir = path.join(process.cwd(), 'client/assets/hero_images');

async function convertToWebP() {
  try {
    for (const image of images) {
      const inputPath = path.join(inputDir, image);
      const outputPath = path.join(outputDir, image.replace('.jpg', '.webp'));
      
      console.log(`Converting ${image} to WebP...`);
      await sharp(inputPath)
        .webp({ quality: 90 })
        .toFile(outputPath);
      console.log(`Successfully converted ${image} to WebP!`);
    }
  } catch (error) {
    console.error('Error converting images:', error);
  }
}

convertToWebP().catch(console.error); 