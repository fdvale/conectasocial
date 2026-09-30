import { readFile, writeFile } from "node:fs/promises";
import { minify } from "html-minifier-terser";

const caminhoHTML = new URL("../dist/index.html", import.meta.url);

const htmlOriginal = await readFile(caminhoHTML, "utf8");

const htmlMinificado = await minify(htmlOriginal, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
    useShortDoctype: true
});

await writeFile(caminhoHTML, htmlMinificado, "utf8");

console.log("HTML minificado com sucesso.");
