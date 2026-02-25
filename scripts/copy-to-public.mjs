import { readdirSync, statSync, mkdirSync, copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';

function copyDirRecursive(src, dest) {
  if (!existsSync(src)) {
    console.log(`Source does not exist: ${src}`);
    return;
  }
  
  const entries = readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    
    if (entry.isDirectory()) {
      mkdirSync(destPath, { recursive: true });
      copyDirRecursive(srcPath, destPath);
    } else {
      mkdirSync(dirname(destPath), { recursive: true });
      copyFileSync(srcPath, destPath);
    }
  }
}

const srcDir = '/vercel/share/v0-project/lib';
const destDir = '/vercel/share/v0-project/public/lib';

mkdirSync(destDir, { recursive: true });
copyDirRecursive(srcDir, destDir);

// Also copy assets to public
const assetsSrc = '/vercel/share/v0-project/assets';
const assetsDest = '/vercel/share/v0-project/public/assets';
if (existsSync(assetsSrc)) {
  mkdirSync(assetsDest, { recursive: true });
  copyDirRecursive(assetsSrc, assetsDest);
}

console.log('Done copying lib/ and assets/ to public/');
