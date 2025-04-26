import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import ssgBuild from './ssg/build-plugin.mjs';
import { buildContent } from './src/script.ssg.js';

const buildConfig = {
  root: './src',
  base: './',
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
        },
      ],
    }),
    ssgBuild(buildContent, true),
  ],
};

const devConfig = {
  root: './src',
  base: './',
  server: {
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: { api: 'modern' },
    },
  },
  plugins: [
    ssgBuild(buildContent),
  ],
};

export default defineConfig(({ command }) => {
  if (command === 'serve') return devConfig;
  return buildConfig;
});
