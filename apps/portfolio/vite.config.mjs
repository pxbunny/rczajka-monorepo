import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  root: './website',
  base: './',
  publicDir: './public',
  build: {
    outDir: '../../../dist/portfolio',
    emptyOutDir: true,
    minify: true,
  },
  css: {
    preprocessorOptions: {
      scss: { api: 'modern' },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: './assets',
          dest: './',
        },
      ],
    }),
  ],
});
