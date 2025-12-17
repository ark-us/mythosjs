import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'bundle.js'),
      name: 'WasmxJS',
      formats: ['es', 'umd'],
      fileName: (format) => `wasmxjs-bundle.${format}.js`
    },
    rollupOptions: {
      output: {
        // Ensure all dependencies are bundled
        inlineDynamicImports: true,
      }
    },
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    target: 'es2020'
  },
  optimizeDeps: {
    include: ['@ark-us/wasmxjs']
  }
});
