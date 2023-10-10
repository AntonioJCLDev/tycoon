/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    colors: {
      white:'#ffff',
      black: '#000000',
      transparent: '#00',
      body:'#2a3356',
      header:'#f35b25',
      kindaWhite:'#fdfcfc',   
      gray:'#e8e2e2',
    },
  },
  plugins: [],
}