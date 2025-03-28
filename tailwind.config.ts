import type { Config } from "tailwindcss";


export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blackish': '#222222',
        'whiteish': '#f4f4f4',
        'khaki': '#f0e68c',
        'lightblue': '#add8e6',
        'lightgreen': '#90ee90',
        'lightpink': '#ffb6c1',
        'lightcyan': '#e0ffff',
        'lightsalmon': '#ffa07a',
        'lightsteelblue': '#b0c4de',
      }
    },
  },
  plugins: [],
} satisfies Config
