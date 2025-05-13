/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
          colors: {
            green: {
              500: '#00C853',
              600: '#00B44B',
            },
          },
          fontFamily: {
            sans: ['Inter','"Helvetica Neue"', 'Arial', 'sans-serif'],
          },
        },
      },
    plugins: [],
  }
  