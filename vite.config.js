import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // A gyökérkönyvtár
  build: {
    outDir: 'public', // Vagy ahová építi a Hostinghoz
  },
  server: {
    port: 5173,
  },
});