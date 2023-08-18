import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  host: true,
  base: import.meta.env.PROD ? "/app-root" : "",
  experimental: {
    assets: true,
  },
});
