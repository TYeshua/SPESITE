import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/aaaa
export default defineConfig({
  build: { chunkSizeWarningLimit: 1000 },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: "/SPESITE/"
});
