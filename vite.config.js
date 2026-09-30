import { defineConfig } from "vite";

export default defineConfig({
    base: "./",
    build: {
        minify: "oxc",
        cssMinify: true
    }
});