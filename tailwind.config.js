const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Red Hat Display', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      white: colors.white,
      transparent: colors.transparent,
      'pale-blue': {
        light: 'hsl(225, 100%, 98%)',
        DEFAULT: 'hsl(225, 100%, 94%)',
      },
      blue: {
        light: 'hsl(245, 83%, 68%)',
        DEFAULT: 'hsl(245, 75%, 52%)',
        dark: 'hsl(223, 47%, 23%)',
      },
      'desaturated-blue': 'hsl(224, 23%, 55%)',
    },
    extend: {
      boxShadow: {
        card: '0 40px 40px -20px hsla(228, 87%, 39%, 0.1518)',
        button: '0 20px 20px 0 hsla(245, 75%, 52%, 0.1903)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
