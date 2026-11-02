import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/panel/energy-station-panel.js'),
      name: 'EnergyStationPanel',
      formats: ['es', 'umd'],
      fileName: (format) => format === 'es' ? 'energy-station-panel.js' : 'energy-station-panel.umd.js'
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

