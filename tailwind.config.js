module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          600: '#912F40',
        },
        pink: {
          50: '#fbeaed',
          600: '#D46A92',
        }
      }
    }
  },
  plugins: [],
}