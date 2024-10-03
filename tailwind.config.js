/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purpleMain: '#7871fc',
        pinkSoft: '#EDC7B7',
        wheat: '#EEE2DC',
        text_gray: '#141516',
        text_gray_dark: "#9ca3af",
        bg: '#B1A6A4',
        bgDark: '#1f2937',
        bgSlightDark: '#1f2f37',
        SlightWhite: '#e1e1e1',
      },
    },
  },
  darkMode: "class",
  plugins: [],
}

