/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'blackish': '#333333',
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
}
