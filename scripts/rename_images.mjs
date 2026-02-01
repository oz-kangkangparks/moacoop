import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.join(__dirname, '..');
const PUBLIC_IMAGES = path.join(PROJECT_ROOT, 'public', 'images');

const TARGETS = [
    { dir: 'finished', prefix: 'finished' },
    { dir: 'working', prefix: 'working' }
];

function getNextIndex(files, prefix) {
    const regex = new RegExp(`^${prefix}_(\\d+)\\.webp$`);
    let max = 0;
    for (const file of files) {
        const match = file.match(regex);
        if (match) {
            const num = parseInt(match[1], 10);
            if (num > max) max = num;
        }
    }
    return max + 1;
}

function processDirectory({ dir, prefix }) {
    const dirPath = path.join(PUBLIC_IMAGES, dir);
    if (!fs.existsSync(dirPath)) {
        console.log(`Directory not found: ${dirPath}`);
        return;
    }

    const files = fs.readdirSync(dirPath);
    const kakaoFiles = files.filter(f => f.includes('KakaoTalk') && f.endsWith('.webp')).sort();

    if (kakaoFiles.length === 0) {
        console.log(`[${dir}] No KakaoTalk files found.`);
        return;
    }

    let currentIndex = getNextIndex(files, prefix);
    console.log(`[${dir}] Starting rename from index ${currentIndex} for ${kakaoFiles.length} files.`);

    for (const file of kakaoFiles) {
        const oldPath = path.join(dirPath, file);
        const newName = `${prefix}_${currentIndex}.webp`;
        const newPath = path.join(dirPath, newName);

        try {
            fs.renameSync(oldPath, newPath);
            // console.log(`Renamed: ${file} -> ${newName}`);
            currentIndex++;
        } catch (err) {
            console.error(`Error renaming ${file}:`, err);
        }
    }
    console.log(`[${dir}] Finished renaming.`);
}

console.log('Starting migration of filenames...');
TARGETS.forEach(processDirectory);
console.log('All done.');
