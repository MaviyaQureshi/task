/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#F3CECE",
      button: "#FF8F8F",
      language: "#FAE9DF",
      back: "#FAE9DF",
      transparent: "#808080",
      black: "#000000",
    },
    backgroundImage: {
      hero: "url('./images/bg1.png')",
    },
  },
  plugins: [],
};
