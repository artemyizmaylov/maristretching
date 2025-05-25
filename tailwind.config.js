const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: '#51837D',
      whitegreen: '#9BB3AB',
      pink: '#FB9481',
      purple: '#A3B1DF',
      white: '#FFF9EF',
      black: '#555547',
    },
    fontFamily: {
      sans: ['var(--helveticaNeue)', ...fontFamily.sans],
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
