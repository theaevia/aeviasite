import sharp from 'sharp';
import path from 'path';

const images = [
  'aevia-favicon.png'
];

const inputDir = path.join(process.cwd(), 'client/assets/logos');
const outputDir = path.join(process.cwd(), 'client/assets/logos');

async function convertToWebP() {
  try {
    for (const image of images) {
      const inputPath = path.join(inputDir, image);
      const outputPath = path.join(outputDir, image.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
      
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