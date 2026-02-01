import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images', 'finished');

async function inspectImages() {
    console.log('Inspecting images in:', IMAGES_DIR);

    if (!fs.existsSync(IMAGES_DIR)) {
        console.log('Directory not found');
        return;
    }

    const files = fs.readdirSync(IMAGES_DIR);
    const jpgs = files.filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
    const webps = files.filter(f => f.endsWith('.webp'));

    console.log(`Found ${jpgs.length} JPG/PNG files.`);
    console.log(`Found ${webps.length} WebP files.`);

    if (jpgs.length > 0) {
        console.log('Originals still exist! We can re-convert.');
    }

    if (webps.length > 0) {
        const sample = path.join(IMAGES_DIR, webps[0]);
        console.log('Checking metadata for:', sample);
        try {
            const metadata = await sharp(sample).metadata();
            console.log('Metadata:', {
                format: metadata.format,
                orientation: metadata.orientation, // If undefined, metadata is missing
                width: metadata.width,
                height: metadata.height
            });
        } catch (err) {
            console.error('Error reading metadata:', err);
        }
    }
}

inspectImages();
