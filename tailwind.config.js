/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          300: '#FCD34D',
          400: '#FBBF24',
        },
      },
    },
  },
  plugins: [],
}

