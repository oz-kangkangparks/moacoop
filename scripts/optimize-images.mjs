import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Disable cache to ensure fresh processing
sharp.cache(false);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIR = path.join(__dirname, '../public/images/social');
const MAX_WIDTH = 1920;
const QUALITY = 80;

// Log function
const log = (msg) => console.log(`[ImageOptimizer] ${msg}`);

async function optimizeImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    const dir = path.dirname(filePath);
    const name = path.basename(filePath, ext);
    const newFilePath = path.join(dir, `${name}.webp`);

    try {
        // Create pipeline
        let pipeline = sharp(filePath);

        // Check metadata first to debug
        const meta = await pipeline.metadata();
        const orientation = meta.orientation;
        if (orientation && orientation !== 1) {
            log(`Auto-rotating ${name}${ext} (Orientation: ${orientation})`);
        }

        // Apply rotation
        pipeline = pipeline.rotate();

        // Refresh metadata after rotation (logic fix: we need new dimensions)
        // But pipeline.metadata() returns input metadata. 
        // We will just resize based on input width for now, or just let sharp handle it.
        // Actually, if we rotate 90 deg, width/height swap. 
        // If we want max width 1920, we should check the *oriented* width.
        // Sharp's resize applies *after* rotate if chained.

        // Correct chain: rotate -> resize -> webp
        // We don't strictly need to check width if we just say .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        // But let's keep it simple.

        pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });

        // Convert to WebP
        await pipeline
            .webp({ quality: QUALITY })
            .toFile(newFilePath);


        // Get sizes
        const oldSize = fs.statSync(filePath).size;
        const newSize = fs.statSync(newFilePath).size;
        const savings = ((oldSize - newSize) / oldSize * 100).toFixed(1);

        log(`Optimized: ${name}${ext} -> ${name}.webp`);
        log(`Size: ${(oldSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% Saved)`);

        // Remove original file
        fs.unlinkSync(filePath);

    } catch (error) {
        console.error(`Error optimizing ${filePath}:`, error);
    }
}

async function scanDirectory(directory) {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await scanDirectory(fullPath);
        } else {
            await optimizeImage(fullPath);
        }
    }
}

(async () => {
    log('Starting optimization...');
    if (fs.existsSync(TARGET_DIR)) {
        await scanDirectory(TARGET_DIR);
        log('Optimization complete!');
    } else {
        console.error(`Target directory not found: ${TARGET_DIR}`);
    }
})();
