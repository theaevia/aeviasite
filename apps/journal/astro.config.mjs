import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..', '..');

const base = process.env.JOURNAL_BASE || '/journal';

export default defineConfig({
  site: 'https://www.theaevia.co.uk',
  base,
  output: 'static',
  integrations: [react(), sitemap(), mdx(), tailwind({ config: './tailwind.config.ts' })],
  vite: {
    plugins: [svgr()],
    resolve: {
      alias: {
        '@': path.resolve(repoRoot, 'client/src'),
        '@assets': path.resolve(repoRoot, 'client/assets'),
        '@shared': path.resolve(repoRoot, 'shared'),
        '@/components': path.resolve(repoRoot, 'client/src/components'),
        '@/pages': path.resolve(repoRoot, 'client/src/pages'),
        '@/lib': path.resolve(repoRoot, 'client/src/lib'),
      }
    },
    server: {
      fs: {
        allow: [repoRoot, __dirname]
      },
      // In local dev, proxy the Tina admin so `/journal/admin` works
      proxy: process.env.TINA_PUBLIC_IS_LOCAL
        ? {
            '/journal/admin': {
              target: 'http://localhost:4001',
              changeOrigin: true,
              rewrite: (p) => p.replace(/^\/journal/, ''),
            },
            '/admin': {
              target: 'http://localhost:4001',
              changeOrigin: true,
            },
          }
        : undefined,
    }
  }
});
