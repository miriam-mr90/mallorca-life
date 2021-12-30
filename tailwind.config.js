/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
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
    extend: {},
  },
  plugins: [],
}
