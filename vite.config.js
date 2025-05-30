import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Automatically open the browser
    port: process.env.PORT || 5000, // Use the PORT environment variable or default to 5000
  },
}); 