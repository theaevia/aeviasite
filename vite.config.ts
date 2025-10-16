import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import { fileURLToPath } from "url";
import type { ConfigEnv, UserConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(async (_env: ConfigEnv): Promise<UserConfig> => {
  const rawAssetBase = process.env.VITE_ASSET_BASE_URL?.trim();
  const normalizedAssetBase = rawAssetBase ? rawAssetBase.replace(/\/+$/, "") : "";
  const resolvedBase = normalizedAssetBase ? `${normalizedAssetBase}/` : "/";

  return {
    base: resolvedBase,
    root: path.resolve(__dirname, "client"),
    publicDir: path.resolve(__dirname, "client/public"),
    plugins: [react(), svgr()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'client/src'),
        '@shared': path.resolve(__dirname, 'shared'),
        '@assets': path.resolve(__dirname, 'client/assets'),
        '@/components': path.resolve(__dirname, 'client/src/components'),
        '@/pages': path.resolve(__dirname, 'client/src/pages'),
        '@/lib': path.resolve(__dirname, 'client/src/lib')
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.jpg', '.jpeg', '.png', '.svg', '.webp']
    },
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
      copyPublicDir: true,
      assetsDir: 'assets',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "client/index.html"),
        },
        output: {
          assetFileNames: (assetInfo) => {
            if (!assetInfo.name) return 'assets/[name].[hash][extname]';
            if (assetInfo.name.includes('public/')) {
              return '[name][extname]';
            }
            return 'assets/[name].[hash][extname]';
          }
        }
      },
    },
    assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg', '**/*.webp'],
    optimizeDeps: {
      include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.webp']
    },
    server: {
      port: Number(process.env.PORT) || 5000,
      open: true,
    },
  };
});
