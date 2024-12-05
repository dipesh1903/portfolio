/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-1": "#FAF6E3",
        "accent-2": "#D8DBBD",
        "accent-3": "#B59F78",
        "accent-4": "#2A3663"
      },
    },
    fontFamily: {
      Acorn: ['Acorn', 'sans']
    }
  },
  plugins: [],
}

