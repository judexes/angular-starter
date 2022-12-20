/** @type {import('tailwindcss').Config} */
const colors = require('./tailwind.colors');
module.exports = {
  important: true,
  jit: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      // check src/app/styles/_variables.scss
      sans: `var(--font-family)`,
      serif: `var(--font-family)`,
      mono: `var(--font-family)`,
    },
    colors: colors,
    container: {
      center: true,
    },
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}
