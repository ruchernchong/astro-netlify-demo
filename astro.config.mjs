import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://lighthearted-phoenix-fd5541.netlify.app/",
  integrations: [sitemap()],
});
