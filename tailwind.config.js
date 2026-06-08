/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F3F1EC',
        primary: '#1E1B18',
        accent: '#B67F5C',
        'accent-hover': '#9A6542',
        border: '#DDD8D0',
        muted: '#6E6860',
        'warm-dark': '#1E1611',
        'warm-dark-card': '#2D231C',
        cream: '#F3F1EC',
        'cream-dark': '#E8E3DB',
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
