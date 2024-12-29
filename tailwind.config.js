/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'git-gray-900': '#0e0e1a',
        'git-gray-700': '#1a1a29',
        'clean-dark': '#0e0f13',
        'clean-gray': '#16171c',
        'gray-login-area-500': '#1c1d2f',
        'gray-login-area-900': '#090a0e',
      }
    },
  },
  plugins: [require("rippleui")],
}