import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

const imagesToConvert = [
  'foto_orang_opt.jpg',
  'orarose-architecture-core.jpg',
  'orarose-hero.jpg'
];

async function convertImages() {
  for (const img of imagesToConvert) {
    const inputPath = path.join(publicDir, img);
    const outputPath = path.join(publicDir, img.replace('.jpg', '.webp'));

    if (fs.existsSync(inputPath)) {
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`Converted ${img} to WebP.`);
      } catch (err) {
        console.error(`Failed to convert ${img}:`, err);
      }
    } else {
      console.log(`File ${img} not found.`);
    }
  }
}

convertImages();
