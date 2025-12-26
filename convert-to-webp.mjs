import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'src', 'assets', 'profile-photo.jpg');
const outputPath = path.join(__dirname, 'src', 'assets', 'profile-photo.webp');

console.log('🖼️  Converting profile photo to WebP format...');
console.log('📁 Input:', inputPath);

// Get original file size
const originalSize = fs.statSync(inputPath).size;
console.log(`📊 Current JPEG size: ${(originalSize / 1024).toFixed(2)} KB`);

sharp(inputPath)
  .resize(512, 512, {
    fit: 'cover',
    position: 'top'
  })
  .webp({
    quality: 85,
    effort: 6
  })
  .toFile(outputPath)
  .then(info => {
    const newSize = fs.statSync(outputPath).size;
    console.log(`✨ WebP size: ${(newSize / 1024).toFixed(2)} KB`);
    console.log(`💾 Savings: ${((originalSize - newSize) / 1024).toFixed(2)} KB (${((1 - newSize/originalSize) * 100).toFixed(1)}% reduction)`);
    console.log('\n✅ WebP image created successfully!');
    console.log('📝 File saved as: src/assets/profile-photo.webp');
    console.log('\n📦 Next step: Update HeroSection.tsx to use WebP with JPEG fallback');
  })
  .catch(err => {
    console.error('❌ Error converting image:', err);
  });
