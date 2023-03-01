/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,jpg}",
  ],
  theme: {
    extend: {
      colors: {
        lightbg:'#E0E0E0',
        darkbg:'#0F121A',
        primary: '#E01A4F',
        secondary: {
          1: '#A8631E',
          2: '#34210E',
          3: '#482A0E',
          4: '#FF9B3B',
          5: '#FF9128',
        },
        retro:{
          grey: "#584948",
          burgundy: "#582221",
          red: "#A11713",
          blush: "#FF8481",
        },
        dark:{
          bg:"#"
        }
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif']
      },
    },
  },
  plugins: [],
}
