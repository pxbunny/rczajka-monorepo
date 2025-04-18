import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import ssgBuild from './ssg/build-plugin.mjs';

export default defineConfig({
  root: './src',
  base: './',
  server: {
    open: true,
  },
  build: {
    outDir: '../../../dist/portfolio',
    emptyOutDir: true,
    minify: true,
    copyPublicDir: false,
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
        }
      ],
    }),
    ssgBuild(),
  ],
});
