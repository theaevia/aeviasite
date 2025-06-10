import sharp from 'sharp';
import path from 'path';

const inputPath = path.join(process.cwd(), 'client/assets/logos/logo-gold.png');
const outputPath = path.join(process.cwd(), 'client/assets/logos/logo-gold.webp');

async function convertToWebP() {
    try {
        console.log('Converting gold logo to WebP...');
        await sharp(inputPath)
            .webp({ quality: 90 })
            .toFile(outputPath);
        console.log('Successfully converted gold logo to WebP!');
    } catch (error) {
        console.error('Error converting gold logo:', error);
    }
}

convertToWebP().catch(console.error); 