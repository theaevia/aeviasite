import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import { fileURLToPath } from "url";
import type { ConfigEnv, UserConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(async ({ command }: ConfigEnv): Promise<UserConfig> => {
  // Only load Replit plugins in `vite dev`
  const replitPlugins: any[] = [];
  if (command === "serve" && process.env.REPL_ID) {
    const runtimeErrorOverlay = (
      await import("@replit/vite-plugin-runtime-error-modal")
    ).default;
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    replitPlugins.push(runtimeErrorOverlay(), cartographer());
  }

  return {
    root: path.resolve(__dirname, "client"),
    plugins: [react(), svgr(), ...replitPlugins],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "client/src")
        },
        {
          find: "@shared",
          replacement: path.resolve(__dirname, "shared")
        },
        {
          find: "@assets",
          replacement: path.resolve(__dirname, "client/assets")
        }
      ],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.jpg', '.jpeg', '.png', '.svg']
    },
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
      assetsDir: 'assets',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "client/index.html"),
        },
        output: {
          assetFileNames: 'assets/[name].[hash][extname]'
        }
      },
    },
    assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.svg'],
    optimizeDeps: {
      include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg']
    },
    server: {
      port: Number(process.env.PORT) || 5000,
      open: true,
    },
  };
});
