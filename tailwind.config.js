/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#026389",
        secondary: "#f2ff71",
        primaryaccent: "#fdfae9",
        secondaryaccent: "#b2753d",
      },
    },
  },
  plugins: [],
}

