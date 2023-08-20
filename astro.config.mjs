import { defineConfig } from "astro/config";

const BUCKET_BASE = "/app-root";
const PROJECT_BASE = "/projects/posts/20230820";

// https://astro.build/config
export default defineConfig({
  srcDir: `.${PROJECT_BASE}`,
  base: import.meta.env.PROD ? `.${BUCKET_BASE}${PROJECT_BASE}` : "",
  outDir: import.meta.env.PROD ? `./dist${BUCKET_BASE}${PROJECT_BASE}` : "",
  compressHTML: true,
  server: {
    host: true,
  },
  build: {
    assets: "_assets",
  },
  experimental: {
    assets: true,
  },
});
