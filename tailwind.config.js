/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      os: ["Open sans", "sans-serif"],
    },
    extend: {
      backgroundColor: {
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        wiggle: {
          "0% 100%": { transform: "rotate(0deg)" },
          "15%, 35%, 55%, 75%, 95%": { transform: "rotate(-2deg)" },
          "5%, 25%, 45%, 65%, 85%": { transform: "rotate(2deg)" },
        },
        appear: {
          "0%": { opacity: "0", transform: "translateY(65px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        drop: {
          "0%": { opacity: "0.4", transform: "translateY(-65px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        fromshadow: {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        fliesout: {
          "0%": { opacity: "0", transform: "scale(0)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        fliesin: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-out 1",
        appear: "appear 0.5s ease-out 1",
        drop: "drop 0.8s ease-out 1",
        fromshadow: "fromshadow 0.5s ease-out 1",
        fliesout: "fliesout 0.3s ease-out 1",
        fliesin: "fliesin 0.3s ease-out 1",
      },
    },
  },
  plugins: [],
};
