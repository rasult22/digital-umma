import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://rasult22.github.io",
  // base: "/digital-umma", 
  integrations: [tailwind(), icon(), svelte()]
});