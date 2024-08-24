/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '430px',
        'md': '650px',
        'lg': '960px',
        'xl': '1260px',
      },
      fontFamily: {
        'Roboto': ["Roboto", 'sans-serif']
      },
      colors: {
        "mygreen": "#22c55e",
        "mylight1": "#e2e8f0",
        "mydark1": "#1e293b",
        "mydark2": "#334155",
      }
    },
  },
  plugins: [
  ],
}