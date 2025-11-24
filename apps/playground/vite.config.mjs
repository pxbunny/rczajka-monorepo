import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

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
    })
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
  }
};

export default defineConfig(({ command }) => {
  if (command === 'serve') return devConfig;
  return buildConfig;
});
