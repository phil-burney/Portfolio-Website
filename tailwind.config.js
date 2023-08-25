/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      animation: {
        gradientHover: 'gradientAnimation 2s infinite'
      }
    }
  },
  plugins: [],
}

