import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: import.meta.env.PROD ? "/app-root" : "",
  compressHTML: true,
  server: {
    host: true,
  },
  experimental: {
    assets: true,
  },
});
