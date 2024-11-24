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
        flip: "flip 0.7s ease-in-out", // Flip animation with 0.7s duration
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg)" }, // Start at 0 degrees (no rotation)
          "50%": { transform: "rotateY(180deg)" }, // Rotate to 180 degrees (flipping)
          "100%": { transform: "rotateY(0deg)" }, // End back at 0 degrees (no rotation)
        },
      },
    },
  },
  plugins: [],
};
