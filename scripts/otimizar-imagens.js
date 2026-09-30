import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const imagemOriginal = "imagens/banner-conectasocial.png";
const pastaDestino = "public/imagens";

await mkdir(pastaDestino, { recursive: true });

await sharp(imagemOriginal)
    .resize({
        width: 600,
        withoutEnlargement: true
    })
    .webp({
        quality: 80
    })
    .toFile(`${pastaDestino}/banner-conectasocial-600.webp`);

await sharp(imagemOriginal)
    .resize({
        width: 1200,
        withoutEnlargement: true
    })
    .webp({
        quality: 80
    })
    .toFile(`${pastaDestino}/banner-conectasocial-1200.webp`);

console.log("Imagens WebP geradas com sucesso.");
