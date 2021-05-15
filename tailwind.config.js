module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", "sans-serif"]
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
