import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Use require for path to avoid esModuleInterop error
const path = require('path');

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: {
    'import.meta.env.VITE_GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.VITE_GOOGLE_MAPS_API_KEY),
  },
}); 