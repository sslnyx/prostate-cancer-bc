const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
      },
      colors: {
        blue: "#53BCEB",
        secondary: "#EB9353",
        orange: "#EB9353",
      },
    },
  },
  plugins: [],
};
