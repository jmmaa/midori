/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./js/*.{html,js}","*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        "left-fade-in": {
          "0%": {
            transform: "translateX(-5px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(-5px)",
            opacity: 1
          }
        },
        "right-fade-in": {
          "0%": {
            transform: "translateX(5px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(5px)",
            opacity: 1
          }
        }
      },

      animation: {
        "left-fade-in": "left-fade-in",
        "right-fade-in": "right-fade-in"
      }
    },
  },


  plugins: [require('tailwindcss-animate')],
}
