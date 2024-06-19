/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'fontMz':[' Georgia, "Times New Roman", Times, serif']
      },
      colors:{
        'colordarkred':['#434F62'],
        'color-primary': ['#40a458'],
        'color-secondary': ['#d4ab05'],
        'color-tertiary': ['#e84850']
      },
      animation: {
        astronautFly: 'astronautFly 40s infinite 0.5s',
        spaceShip: 'spaceShip 7s  forwards 0.5s  1 ',
      },

    },
  },
  plugins: [],
}
