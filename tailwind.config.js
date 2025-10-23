/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        lume: {
          light: "#d1fae5", // emerald-100
          primary: "#10b981", // emerald-500
          dark: "#064e3b", // emerald-900
        },
      },
    },
  },
  plugins: [],
}


