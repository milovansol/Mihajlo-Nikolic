import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'rgb(10,7,6)',
  			foreground: 'rgb(255,255,255)',
        accent: {
          1: 'rgb(var(--accent-1) / <alpha-value>)',
          2: 'rgb(var(--accent-2) / <alpha-value>)',
          3: 'rgb(var(--accent-3) / <alpha-value>)',
        },
        slate: {
          // 350: 'rgb(163,160,185)',
          350: 'rgb(175.5,188,204.5)'
        }
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      screens: {
        '1640': '1640px',
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
