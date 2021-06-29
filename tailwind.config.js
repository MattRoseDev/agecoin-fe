// TODO: remove this comment and fix the error
/* eslint @typescript-eslint/no-var-requires: "off" */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        "80": "20rem"
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"]
      }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      green: colors.green,
      yellow: colors.amber,
      blue: colors.blue
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
