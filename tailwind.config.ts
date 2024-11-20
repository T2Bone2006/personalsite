import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        textShadow : {
            terminal: "0 0 4px var(--tw-shadow-color)"
        }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }: any) {
        matchUtilities(
          {
            'text-shadow': (value: string) => ({
              textShadow: value,
            }),
          },
          { values: theme('textShadow') }
        )
      }),
  ],
};
export default config;
