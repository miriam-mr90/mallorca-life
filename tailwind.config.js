/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#FFF',
      black:  '#000',
      'black-gradient': '#000000ad',
      brand: {
        black: '#23191A',
        main: '#E5737D',
        light: '#FAE3E5',
        dark: '#268FB7'
      },
      grey: '#C5C3C3'
    },
    fontFamily: {
      display: ['Titillium Web', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],

      },
      fontSize: {
        'logo-xs': '1.25rem',
        'logo-sm': '1.5rem',
        'logo-md': '2rem',
      },
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
