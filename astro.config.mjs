// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages configuration
  site: 'https://mun33b-exe.github.io',
  base: '/mun33b-exe-portfolio/',
  
  // Static output for GitHub Pages (no server required)
  output: 'static',
  
  // Build configuration
  build: {
    assets: '_assets'
  },
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()]
});