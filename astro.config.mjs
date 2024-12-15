// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import playformCompress from "@playform/compress";
import playformInline from "@playform/inline";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react(),
    playformCompress({
      /* options */
    }),
    playformInline({
      /* options */
    }),
    mdx(),
  ],
});
