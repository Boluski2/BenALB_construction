#!/usr/bin/env node

/**
 * Performance Testing Script for BenALB Construction Website
 * 
 * This script analyzes your production build and provides performance metrics.
 * Run after building: npm run build
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist');
const THRESHOLDS = {
  // Maximum total bundle size (in KB)
  totalBundleSize: 500,
  // Maximum JavaScript bundle size (in KB)
  jsBundleSize: 250,
  // Maximum CSS bundle size (in KB)
  cssBundleSize: 150,
  // Maximum individual chunk size (in KB)
  maxChunkSize: 100,
};

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}

function analyzeBundle() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist/ directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  console.log('📊 Building Performance Analysis...\n');

  const files = {
    js: [],
    css: [],
    images: [],
    other: []
  };

  let totalSize = 0;

  function walkDir(dir, relative = '') {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const relativePath = path.join(relative, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory() && !item.startsWith('.')) {
        walkDir(fullPath, relativePath);
      } else if (stat.isFile()) {
        const size = stat.size;
        totalSize += size;

        if (item.endsWith('.js') || item.endsWith('.mjs')) {
          files.js.push({ path: relativePath, size });
        } else if (item.endsWith('.css')) {
          files.css.push({ path: relativePath, size });
        } else if (['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'].some(ext => item.endsWith(ext))) {
          files.images.push({ path: relativePath, size });
        } else if (!item.startsWith('.')) {
          files.other.push({ path: relativePath, size });
        }
      }
    });
  }

  walkDir(DIST_DIR);

  // Sort by size
  Object.values(files).forEach(arr => arr.sort((a, b) => b.size - a.size));

  // Calculate totals
  const jsTotalSize = files.js.reduce((sum, f) => sum + f.size, 0);
  const cssTotalSize = files.css.reduce((sum, f) => sum + f.size, 0);
  const imagesTotalSize = files.images.reduce((sum, f) => sum + f.size, 0);
  const otherTotalSize = files.other.reduce((sum, f) => sum + f.size, 0);

  // Display results
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📈 BUNDLE SIZE ANALYSIS');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  console.log('📦 Total Bundle Size:', formatBytes(totalSize));
  console.log('  ├─ JavaScript:', formatBytes(jsTotalSize), `(${((jsTotalSize / totalSize) * 100).toFixed(2)}%)`);
  console.log('  ├─ CSS:', formatBytes(cssTotalSize), `(${((cssTotalSize / totalSize) * 100).toFixed(2)}%)`);
  console.log('  ├─ Images:', formatBytes(imagesTotalSize), `(${((imagesTotalSize / totalSize) * 100).toFixed(2)}%)`);
  console.log('  └─ Other:', formatBytes(otherTotalSize), `(${((otherTotalSize / totalSize) * 100).toFixed(2)}%)`);

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('Top 10 Largest JavaScript Files:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  files.js.slice(0, 10).forEach((file, i) => {
    const status = file.size > THRESHOLDS.maxChunkSize * 1024 ? '⚠️ ' : '✓ ';
    console.log(`${status} ${i + 1}. ${path.basename(file.path)}`);
    console.log(`    ${formatBytes(file.size)}`);
  });

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('✅ PERFORMANCE CHECKS');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  const checks = [];

  // Check total size
  checks.push({
    name: 'Total Bundle Size',
    limit: THRESHOLDS.totalBundleSize,
    actual: Math.round(totalSize / 1024),
    unit: 'KB',
    type: 'bundle'
  });

  // Check JS size
  checks.push({
    name: 'JavaScript Size',
    limit: THRESHOLDS.jsBundleSize,
    actual: Math.round(jsTotalSize / 1024),
    unit: 'KB',
    type: 'js'
  });

  // Check CSS size
  checks.push({
    name: 'CSS Size',
    limit: THRESHOLDS.cssBundleSize,
    actual: Math.round(cssTotalSize / 1024),
    unit: 'KB',
    type: 'css'
  });

  // Check largest chunks
  const largestChunk = Math.round(Math.max(...files.js.map(f => f.size / 1024)));
  checks.push({
    name: 'Largest Chunk Size',
    limit: THRESHOLDS.maxChunkSize,
    actual: largestChunk,
    unit: 'KB',
    type: 'chunk'
  });

  let allPass = true;
  checks.forEach(check => {
    const pass = check.actual <= check.limit;
    const status = pass ? '✅ PASS' : '❌ FAIL';
    const diff = check.actual - check.limit;
    const diffStr = pass ? '' : ` (${Math.round(diff)} ${check.unit} over)`;
    console.log(`${status} ${check.name}: ${check.actual}${check.unit} / ${check.limit}${check.unit}${diffStr}`);
    if (!pass) allPass = false;
  });

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('💡 OPTIMIZATION RECOMMENDATIONS');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  if (jsTotalSize > THRESHOLDS.jsBundleSize * 1024) {
    console.log('1. 📦 JavaScript bundle is larger than recommended');
    console.log('   → Use route-based code splitting (already implemented)');
    console.log('   → Consider removing unused dependencies');
    console.log('   → Use dynamic imports for heavy libraries\n');
  }

  if (imagesTotalSize > 100 * 1024) {
    console.log('2. 🖼️  Image size is large');
    console.log('   → Convert images to WebP format');
    console.log('   → Compress images losslessly');
    console.log('   → Use responsive images with srcset\n');
  }

  if (largestChunk > THRESHOLDS.maxChunkSize) {
    const largeFiles = files.js.filter(f => f.size > THRESHOLDS.maxChunkSize * 1024);
    console.log('3. 🔴 Some chunks exceed recommended size');
    largeFiles.forEach(file => {
      console.log(`   → ${path.basename(file.path)}: ${formatBytes(file.size)}`);
    });
    console.log('   → Split into smaller chunks\n');
  }

  if (allPass) {
    console.log('🎉 All checks passed! Your bundle is well-optimized.\n');
  } else {
    console.log('⚠️  Some checks failed. Review recommendations above.\n');
  }

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  process.exit(allPass ? 0 : 1);
}

analyzeBundle();
