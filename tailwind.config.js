/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
      animation: {
        tilt: 'tilt 2s linear infinite',
      },
      keyframes: {
        tilt: {
          '0%, 100%': {
            transform: 'skewX(0deg)',
          },
          '50%': {
            transform: 'skewX(6deg)',
          },
        },
      },
    },
  },
  varients:{
    extend:{
      typography:["dark"],
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
