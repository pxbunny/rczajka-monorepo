import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.tsx',
    './menu/**/*.tsx',
    './ui/**/*.tsx',
  ],
  theme: {
    colors: {
      primary:     'var(--color-primary)',
      secondary:   'var(--color-secondary)',
      dimmed:      'var(--color-dimmed)',
      accent:      'var(--color-accent)',
      bgPrimary:   'var(--bg-primary)',
      bgSecondary: 'var(--bg-secondary)',
    },
    screens: {
      'sm':  '640px',
      'md':  '768px',
      'lg':  '1024px',
      'xl':  '1152px',
      '2xl': '1280px',
    },
    transitionDuration: {
      'DEFAULT': '250ms',
    },
    extend: {
      fontSize: {
        'lg':  ['1.125rem', '1'],
        'xl':  ['1.25rem',  '1'],
        '2xl': ['1.5rem',   '1'],
        '3xl': ['1.875rem', '1'],
        '4xl': ['2.25rem',  '1'],
      }
    }
  },
};
export default config;
