import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['framer-motion'], // ✅ Ensure framer-motion is included
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      external: ['framer-motion'], // ✅ Mark as external if necessary
    },
  },
});
