import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(async ({ command }) => {
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
      alias: {
        "@": path.resolve(__dirname, "client/src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "client/assets"),
      },
    },
    build: {
      outDir: path.resolve(__dirname, "dist/public"),
      emptyOutDir: true,
      // No rollupOptions.input needed—Vite will use client/index.html automatically
    },
  };
});
