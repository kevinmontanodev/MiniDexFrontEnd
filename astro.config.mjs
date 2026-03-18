// @ts-check
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless"
import path from "path"

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  output: "server",
  adapter: vercel({}),
  security: {
    checkOrigin: false
  },

  vite: {
    plugins: [tailwindcss()],
    resolve : {
      alias: {
        "@": path.resolve("./src")
      }
    }
  }
});