/* eslint-disable no-undef */
module.exports = {
  content: ["./src/**/*.{html,js,vue}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
