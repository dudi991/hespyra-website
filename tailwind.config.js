/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F5',
        primary: '#1C1917',
        accent: '#B67A53',
        'accent-hover': '#9A633F',
        border: '#E6E1DA',
        muted: '#EDE8DC',
        light: '#F2EDE4',
        'warm-dark': '#1E1611',
        'warm-dark-card': '#2D231C',
        cream: '#FAF8F5',
        'cream-dark': '#F2EDE4',
        midnight: '#111524'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
