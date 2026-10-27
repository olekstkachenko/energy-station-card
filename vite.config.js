import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  server: {
    port: 3000,
    open: false,
    host: true
  },
  build: {
    outDir: 'dist/app',
    emptyOutDir: false
  }
});
