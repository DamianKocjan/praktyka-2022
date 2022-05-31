/* eslint-disable no-undef */
module.exports = {
  content: ["./src/**/*.{html,js,vue,ts}", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
