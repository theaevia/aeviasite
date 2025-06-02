import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const imageDirectories = [
    'client/assets/hero_images',
    'client/assets/logos',
    'client/assets/about_pics'
];

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

async function convertToWebP(directory: string) {
    try {
        const files = await fs.readdir(directory);
        
        for (const file of files) {
            const filePath = path.join(directory, file);
            const stats = await fs.stat(filePath);
            
            if (stats.isDirectory()) {
                await convertToWebP(filePath);
                continue;
            }
            
            const ext = path.extname(file).toLowerCase();
            if (!imageExtensions.includes(ext)) {
                continue;
            }
            
            const fileName = path.basename(file, ext);
            const webpPath = path.join(directory, `${fileName}.webp`);
            
            // Skip if WebP version already exists
            try {
                await fs.access(webpPath);
                console.log(`Skipping ${file} - WebP version already exists`);
                continue;
            } catch {
                // File doesn't exist, proceed with conversion
            }
            
            console.log(`Converting ${file} to WebP...`);
            await sharp(filePath)
                .webp({ quality: 80 }) // Adjust quality as needed (0-100)
                .toFile(webpPath);
            
            console.log(`Successfully converted ${file} to WebP`);
        }
    } catch (error) {
        console.error(`Error processing directory ${directory}:`, error);
    }
}

async function main() {
    console.log('Starting WebP conversion...');
    
    for (const directory of imageDirectories) {
        console.log(`\nProcessing directory: ${directory}`);
        await convertToWebP(directory);
    }
    
    console.log('\nWebP conversion completed!');
}

main().catch(console.error); 