import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.theaevia.co.uk',
  base: '/journal',
  output: 'static',
  integrations: [react(), sitemap(), mdx(), tailwind({ config: './tailwind.config.ts' })],
});
