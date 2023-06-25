/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      roboto: ['Roboto'],
    },
    extend: {
      screens: {
        'xs': '375px',
      },
        colors: {
          'atera-pink': '#FF176B',
          'atera-pink-dark': '#9c0138',
          'gold': '#D1AD78',
          'smoky-black': '#1A1A1A',
          'smoky-white': '#EDEDED',
          'atera-dark-gray': '#898989',
          'atera-light-gray': '#a9a9a9'
        },
      fontSize: {
        xxs: '0.625rem',
      },
    },
  },
  plugins: [],
}

