import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Substitua pelo NOME DO SEU REPOSITÓRIO
export default defineConfig({
  base: '/SPESITE/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});