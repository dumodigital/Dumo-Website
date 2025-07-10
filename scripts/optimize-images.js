import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import imageminWebp from 'imagemin-webp';
import fs from 'fs';
import path from 'path';

// List of large images that need optimization
const largeImages = [
  '$50k.png',
  'me.png', 
  'hun.png',
  '4.png',
  'balls.png',
  'image.png',
  'alex-laplante.png',
  'charlie-dumo.png'
];

async function optimizeImages() {
  const inputDir = 'public/images';
  const outputDir = 'public/images/optimized';
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log('🚀 Starting image optimization...');
  
  try {
    // Convert large PNGs to WebP with high compression
    const webpFiles = await imagemin([`${inputDir}/*.png`], {
      destination: outputDir,
      plugins: [
        imageminWebp({
          quality: 80, // Good quality with significant size reduction
          method: 6    // High compression
        })
      ]
    });
    
    // Compress remaining PNGs
    const pngFiles = await imagemin([`${inputDir}/*.png`], {
      destination: outputDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8], // 60-80% quality
          strip: true           // Remove metadata
        })
      ]
    });
    
    console.log('✅ Optimized images:');
    console.log(`📊 WebP files: ${webpFiles.length}`);
    console.log(`📊 PNG files: ${pngFiles.length}`);
    
    // Calculate size savings
    let originalSize = 0;
    let optimizedSize = 0;
    
    for (const file of [...webpFiles, ...pngFiles]) {
      const originalPath = path.join(inputDir, path.basename(file.destinationPath, path.extname(file.destinationPath)) + '.png');
      if (fs.existsSync(originalPath)) {
        originalSize += fs.statSync(originalPath).size;
      }
      optimizedSize += file.data.length;
    }
    
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    console.log(`💾 Size reduction: ${savings}% (${(originalSize / 1024 / 1024).toFixed(1)}MB → ${(optimizedSize / 1024 / 1024).toFixed(1)}MB)`);
    
  } catch (error) {
    console.error('❌ Optimization failed:', error);
  }
}

optimizeImages(); 