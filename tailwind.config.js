/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1D5D9B',
        'secondary': '#1D5D9B',
        'tertiary': '#F4D160'
      }
    },
  },
  plugins: [],
}

