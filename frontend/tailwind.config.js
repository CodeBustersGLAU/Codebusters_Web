/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        rubik: ["Rubik", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
        dosis1: ["Dosis", "serif"],
        angrybirds: ["AngryBirds Regular", "serif"],
      },
      animation: {
        flip: "flip 0.7s ease-in-out", // Flip animation
        pulseCircle: "pulseCircle 1.5s ease-in-out infinite", // Pulsing circle animation
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },
        pulseCircle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.5" },
        },
      },
      colors: {
        customGray: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
