import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_LOGO = path.join(__dirname, '../public/images/logo.png');
const APP_DIR = path.join(__dirname, '../app');
const PUBLIC_DIR = path.join(__dirname, '../public');

async function generateAssets() {
    console.log('Generating favicon and OG assets...');

    // 0. Prepare the base logo: Trim -> Resize to Square -> Circle Mask
    // This ensures we get a "coin" look without white corners even if source has background.
    const BASE_SIZE = 512;

    // Step A: Load and Trim Aggressively
    let pipeline = sharp(SOURCE_LOGO).trim({ threshold: 40 });
    const trimmedBuffer = await pipeline.toBuffer();

    // Step B: Composite into a Circle
    // First, resize the trimmed logo to cover the base size (or contain if irregular)
    // We use 'cover' to ensure it fills the circle, maximizing size.
    // If it's a wide logo, 'contain' might be safer to prevent cutting off text. 
    // Given user wants "Maximize", 'cover' on a square crop is risky if text exists.
    // Let's use 'contain' within a square, then circle mask.

    const baseSquare = await sharp(trimmedBuffer)
        .resize({
            width: BASE_SIZE,
            height: BASE_SIZE,
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent pad
        })
        .toBuffer();

    // Create Circle Mask
    const mask = Buffer.from(
        `<svg width="${BASE_SIZE}" height="${BASE_SIZE}">
            <circle cx="${BASE_SIZE / 2}" cy="${BASE_SIZE / 2}" r="${BASE_SIZE / 2}" fill="black"/>
         </svg>`
    );

    // Apply Mask (dest-in keeps the intersection)
    const circleLogoBuffer = await sharp(baseSquare)
        .composite([{ input: mask, blend: 'dest-in' }])
        .toBuffer();

    console.log('✓ Prepared circular base logo');

    // 1. favicon.ico
    await sharp(circleLogoBuffer)
        .resize(32, 32)
        .toFile(path.join(APP_DIR, 'favicon.ico'));
    console.log('✓ Generated app/favicon.ico');

    // 2. icon.png
    await sharp(circleLogoBuffer)
        .resize(32, 32)
        .toFile(path.join(APP_DIR, 'icon.png'));
    console.log('✓ Generated app/icon.png');

    // 3. apple-icon.png
    await sharp(circleLogoBuffer)
        .resize(180, 180)
        .toFile(path.join(APP_DIR, 'apple-icon.png'));
    console.log('✓ Generated app/apple-icon.png');

    // 4. opengraph
    // For OG, we might want the original full version, not the circle icon.
    // But let's keep consistency or just use the trimmed one on white/transparent?
    // Let's use the trimmed version on white for OG to be safe.
    await sharp({
        create: {
            width: 1200,
            height: 630,
            channels: 4,
            background: { r: 255, g: 255, b: 255, alpha: 1 }
        }
    })
        .composite([
            {
                input: await sharp(trimmedBuffer).resize({ width: 600, height: 600, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer(),
                gravity: 'center'
            }
        ])
        .toFile(path.join(APP_DIR, 'opengraph-image.png'));
    console.log('✓ Generated app/opengraph-image.png');
}

generateAssets().catch(console.error);
