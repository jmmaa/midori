/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./js/*.{html,js}","*.{html,js}"],
  theme: {
    extend: {

      fontFamily: {
        "t-black": "titillium-black",
        "t-semibold": "titillium-semibold",
        "t-light": "titillium-light",
        "t-regular": "titillium-regular",
        "z-bold": "zen-bold",
        "z-black": "zen-black",
        "z-regular": "zen-regular"
      }
    },
  },


  plugins: [require('tailwindcss-animate')],
}
