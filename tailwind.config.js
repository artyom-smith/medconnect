/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },

      colors: {
        mainbg: '#00B8F1',
        skyblue: '#72C5F7',
      }
    },
  },
  plugins: [],
}