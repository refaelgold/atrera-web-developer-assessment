/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
    },
    extend: {
        colors: {
          'atera-pink': '#FF176B',
          'gold': '#D1AD78',
          'smoky-black': '#1A1A1A',
          'smoky-white': '#EDEDED',
          'atera-dark-gray': '#898989',
          'atera-light-gray': '#a9a9a9'
        },
    },
  },
  plugins: [],
}

