import type { Config } from 'tailwindcss'
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mtn' : "url('/background.svg')",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "dark": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#2c2c2a",
            foreground: "#dedfda",
            primary: "#947722",
          },
          
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ]
}
export default config


