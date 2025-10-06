/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37"
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"]
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      animation: {
        fadeInUp: "fadeInUp 800ms ease-out both"
      }
    },
  },
  plugins: [],
}
