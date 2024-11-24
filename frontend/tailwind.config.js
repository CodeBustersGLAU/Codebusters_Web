/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        rubik: ["Rubik", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
      },
      animation: {
        flip: "flip 0.7s ease-in-out",
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateX(0deg)" },
          "50%": { transform: "rotateX(180deg)" },
          "100%": { transform: "rotateX(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
