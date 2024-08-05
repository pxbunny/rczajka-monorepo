import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.tsx',
    './menu/**/*.tsx',
    './ui/**/*.tsx',
  ],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      dimmed: 'rgb(var(--color-dimmed) / <alpha-value>)',
      accent: 'rgb(var(--color-accent) / <alpha-value>)',
      background: 'rgb(var(--background) / <alpha-value>)',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1152px',
      '2xl': '1280px',
    },
    transitionDuration: {
      'DEFAULT': '250ms',
    },
    extend: {
      fontSize: {
        'lg': ['1.125rem', '1'],
        'xl': ['1.25rem', '1'],
        '2xl': ['1.5rem', '1'],
        '3xl': ['1.875rem', '1'],
        '4xl': ['2.25rem', '1'],
      }
    }
  },
};
export default config;
