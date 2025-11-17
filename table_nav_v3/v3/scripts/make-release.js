// scripts/make-release.js
const fs = require('fs');
const path = require('path');

// Remove old release folder
const releaseDir = path.join(__dirname, '..', 'release');
if (fs.existsSync(releaseDir)) {
  fs.rmSync(releaseDir, { recursive: true, force: true });
  console.log('🗑️  Removed old release folder');
}

// Create new release folder structure
fs.mkdirSync(releaseDir);
fs.mkdirSync(path.join(releaseDir, 'dist'));
fs.mkdirSync(path.join(releaseDir, 'src'));
fs.mkdirSync(path.join(releaseDir, 'src', 'content'));

// Copy files
const filesToCopy = [
  { from: 'manifest.json', to: 'manifest.json' },
  { from: 'options.html', to: 'options.html' },
  { from: 'nomouse.png', to: 'nomouse.png' },
  { from: 'dist/bundle.js', to: 'dist/bundle.js' },
  { from: 'src/content/injector.js', to: 'src/content/injector.js' }
];

filesToCopy.forEach(({ from, to }) => {
  const source = path.join(__dirname, '..', from);
  const dest = path.join(releaseDir, to);
  
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log(`✅ Copied ${from}`);
  } else {
    console.error(`❌ Missing ${from}`);
  }
});

console.log('🎉 Release folder created successfully!');
console.log(`📦 Location: ${releaseDir}`);

// npm run release