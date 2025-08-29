import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const heroImages = [
    {
        input: 'client/assets/hero_images/aevia-clinic3.webp',
        output: 'client/assets/hero_images/aevia-clinic3-800w.webp',
        width: 800,
        quality: 80
    },
    {
        input: 'client/assets/hero_images/sculptra.webp',
        output: 'client/assets/hero_images/sculptra-800w.webp',
        width: 800,
        quality: 80
    },
    {
        input: 'client/assets/hero_images/aevia-clinic2.webp',
        output: 'client/assets/hero_images/aevia-clinic2-800w.webp',
        width: 800,
        quality: 80
    },
    {
        input: 'client/assets/hero_images/skin-model-2.webp',
        output: 'client/assets/hero_images/skin-model-2-800w.webp',
        width: 800,
        quality: 80
    },
    {
        input: 'client/assets/hero_images/mind-hero.webp',
        output: 'client/assets/hero_images/mind-hero-800w.webp',
        width: 800,
        quality: 80
    },
    {
        input: 'client/assets/hero_images/skin-model.webp',
        output: 'client/assets/hero_images/skin-model-800w.webp',
        width: 800,
        quality: 80
    },
    {
        input: 'client/assets/hero_images/mind-coaching-water.webp',
        output: 'client/assets/hero_images/mind-coaching-water-800w.webp',
        width: 800,
        quality: 80
    },
    {
        input: 'client/assets/hero_images/reviews-hero.webp',
        output: 'client/assets/hero_images/reviews-hero-800w.webp',
        width: 800,
        quality: 80
    }
];

async function optimizeImage(input: string, output: string, width: number, quality: number) {
    try {
        console.log(`Optimizing ${input}...`);
        await sharp(input)
            .resize(width, null, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .webp({ quality })
            .toFile(output);
        console.log(`Successfully created ${output}`);
    } catch (error) {
        console.error(`Error optimizing ${input}:`, error);
    }
}

async function main() {
    console.log('Starting hero image optimization...');
    
    for (const image of heroImages) {
        await optimizeImage(image.input, image.output, image.width, image.quality);
    }
    
    console.log('Hero image optimization completed!');
}

main().catch(console.error); 
