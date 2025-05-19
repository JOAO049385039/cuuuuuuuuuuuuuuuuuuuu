/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        marsala: '#6c2e33',
        dourado: '#b76e79',
        rosaclaro: '#f8e1e7'
      }
    }
  },
  plugins: [],
}