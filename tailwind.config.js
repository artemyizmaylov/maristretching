/** @type {import('tailwindcss').Config} */
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
      whitepurple: '#7587C2',
      white: '#FFF9EF',
      black: '#555547',
    },
    fontFamily: {
      sans: ['var(--helveticaNeue)'],
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
