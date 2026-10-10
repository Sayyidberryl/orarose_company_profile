import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

const img = 'logo_kecil.jpeg';
const inputPath = path.join(publicDir, img);

if (fs.existsSync(inputPath)) {
  sharp(inputPath)
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'logo_kecil.webp'))
    .then(() => console.log('Converted to WebP.'));
    
  sharp(inputPath)
    .png()
    .resize(180, 180)
    .toFile(path.join(publicDir, 'logo_kecil.png'))
    .then(() => console.log('Converted to PNG for favicon.'));
} else {
  console.log('logo_kecil.jpeg not found.');
}
