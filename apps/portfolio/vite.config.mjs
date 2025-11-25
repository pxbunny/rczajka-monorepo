import { defineConfig } from 'vite';

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
    }
  }
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
