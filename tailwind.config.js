/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lume: {
          black: "#0B0B0B", // Header
          white: "#FFFFFF", 
          gray: "#E5E5E5",
          charcoal: "#2B2B2B", //Teks Kecil
          silver: "#B8B8B8", 
          beige: "#F6F1EB",
          gold: "#C0A776",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'], // untuk heading, brand, title
        body: ['"Poppins"', 'sans-serif'],        // untuk teks utama
      },
    },
  },
  plugins: [],
}
