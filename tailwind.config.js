module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /bg-(.*)-(50)/,
    },
  ],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
