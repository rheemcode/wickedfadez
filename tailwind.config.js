
const colors = require("tailwindcss/colors");

const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true
    },
    colors: {
      ...colors,
    },
    extend: {
      fontFamily: {
        sans: ['"Josefin Sans"', 'sans-serif'],
        josefin: ['"Josefin Sans"', 'sans-serif'],
        quicksand: ['var(--font-quicksand)'],
        spacegrotesk: ['var(--font-spacegrotesk)'],
      },
    },
  },
  plugins: [],
}
export default config
