import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      accent: "var(--color-accent)",
      bg: "var(--background)",
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1152px',
      '2xl': '1280px',
    },
    extend: {
      textShadow: {
        "DEFAULT": "-1px -1px 0 var(--color-primary), 1px -1px 0 var(--color-primary), -1px 1px 0 var(--color-primary), 1px 1px 0 var(--color-primary)",
        "primary": "-1px -1px 0 var(--color-primary), 1px -1px 0 var(--color-primary), -1px 1px 0 var(--color-primary), 1px 1px 0 var(--color-primary)",
        "secondary": "-1px -1px 0 var(--color-secondary), 1px -1px 0 var(--color-secondary), -1px 1px 0 var(--color-secondary), 1px 1px 0 var(--color-secondary)",
      }
    }
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-stroke': (value) => ({
            textShadow: value,
          })
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
export default config;
