import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

async function convertImages() {
    console.log('Starting image conversion...');

    try {
        const allFiles = getAllFiles(IMAGES_DIR, []);
        const targetFiles = allFiles.filter(file => {
            const ext = path.extname(file).toLowerCase();
            // Skip already converted files or non-images
            return ['.jpg', '.jpeg', '.png'].includes(ext);
        });

        console.log(`Found ${targetFiles.length} images to convert.`);

        for (const file of targetFiles) {
            const dir = path.dirname(file);
            const ext = path.extname(file);
            const basename = path.basename(file, ext);
            const newFile = path.join(dir, `${basename}.webp`);

            // Skip if webp already exists (optional, but good for idempotency if we didn't delete)
            // BUT requirement is to delete old files, so we assume we want to overwrite/create

            try {
                await sharp(file)
                    .rotate()
                    .webp({ quality: 80 })
                    .toFile(newFile);

                console.log(`Converted: ${path.relative(IMAGES_DIR, file)} -> ${path.relative(IMAGES_DIR, newFile)}`);

                // Delete original file
                fs.unlinkSync(file);
                console.log(`Deleted original: ${path.relative(IMAGES_DIR, file)}`);

            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }

        console.log('All done!');

    } catch (error) {
        console.error('Fatal error:', error);
    }
}

convertImages();
