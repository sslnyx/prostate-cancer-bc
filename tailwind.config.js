const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: "22px",
      },
      colors: {
        darkBlue: "#0F4B6F",
        blue: "#53BCEB",
        secondary: "#EB9353",
        orange: "#EB9353",
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
