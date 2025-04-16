import { defineConfig } from 'vite';

export default defineConfig({
  root: './website',
  base: './',
  build: {
    outDir: '../../../dist/portfolio',
    emptyOutDir: true,
    minify: true
  },
  css: {
    preprocessorOptions: {
      scss: { api: 'modern' }
    }
  },
  plugins: [

  ]
});
