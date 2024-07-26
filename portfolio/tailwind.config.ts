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
      accent: "#DF7171",
    },
    extend: {
      textShadow: {
        "DEFAULT": "0 0 2px var(--color-primary)",
      }
    }
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          })
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
export default config;
