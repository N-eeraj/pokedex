/** @type {import("tailwindcss").Config} */

import type from './typeColors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111",
        secondary: "#0CF",
        grey: "#999",
        type
      }
    },
  },
  plugins: [],
}