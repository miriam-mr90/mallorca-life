/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#FFF',
      brand: {
        main: '#4EAFD4',
        light: '#9CD1DC',
        dark: '#268FB7'
      },
    },
    fontFamily: {
      display: ['Titillium Web', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      spacing: {
        '300': '18rem',
        '30': '3rem',
        '50': '5rem',
      }
    },
    minWidth: {
      '0': '0',
      full: '100%',
    },
  },
  plugins: [],
}
