import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/card/energy-station-card.js'),
      name: 'EnergyStationCard',
      formats: ['es', 'umd'],
      fileName: (format) => format === 'es' ? 'energy-station-card.js' : 'energy-station-card.umd.js'
    },
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true
      }
    }
  }
});
