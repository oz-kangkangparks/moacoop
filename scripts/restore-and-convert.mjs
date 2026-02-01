import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_IMAGES = path.join(PROJECT_ROOT, 'public', 'images');

// Paths
const SRC_AGREEMENT = 'E:/문서/모아협동조합/활동내역/2025/김해시복지재단 협약식';
const DEST_AGREEMENT = path.join(PUBLIC_IMAGES, 'social', 'agreement');

const SRC_FINISHED = 'E:/문서/모아협동조합/활동내역/2025/주거개선사업/1호/이미지/마무리 사진';
const DEST_FINISHED = path.join(PUBLIC_IMAGES, 'finished');

const SRC_WORKING = 'E:/문서/모아협동조합/활동내역/2025/주거개선사업/1호/이미지/작업중';
const DEST_WORKING = path.join(PUBLIC_IMAGES, 'working');

async function processFolder(srcDir, destDir, renamePrefix = null) {
    if (!fs.existsSync(srcDir)) {
        console.error(`Source not found: ${srcDir}`);
        return;
    }
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    const files = fs.readdirSync(srcDir)
        .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
        .sort(); // Sort by name

    console.log(`Processing ${files.length} files from ${srcDir} -> ${destDir}`);

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const srcPath = path.join(srcDir, file);

        // Determine destination filename
        let destBasename;
        if (renamePrefix) {
            // agreement_01.webp
            destBasename = `${renamePrefix}_${String(i + 1).padStart(2, '0')}`;
        } else {
            // Keep original name
            destBasename = path.basename(file, path.extname(file));
        }

        const destWebp = path.join(destDir, `${destBasename}.webp`);
        // Temporary copy path (optional, but we can stream directly)

        try {
            await sharp(srcPath)
                .rotate() // AUTO-ROTATE based on EXIF
                .webp({ quality: 80 })
                .toFile(destWebp);

            // console.log(`Converted: ${file} -> ${path.basename(destWebp)}`);
        } catch (err) {
            console.error(`Error processing ${file}:`, err);
        }
    }
}

async function run() {
    console.log('Starting Restoration and Conversion...');

    // 1. Agreement
    await processFolder(SRC_AGREEMENT, DEST_AGREEMENT, 'agreement');

    // 2. Finished
    await processFolder(SRC_FINISHED, DEST_FINISHED);

    // 3. Working
    await processFolder(SRC_WORKING, DEST_WORKING);

    console.log('Done!');
}

run();
