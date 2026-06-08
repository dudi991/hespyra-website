/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F4EE',
        primary: '#1E1B18',
        accent: '#C69063',
        'accent-hover': '#A97245',
        border: '#DDD4C8',
        muted: '#8A8178',
        'warm-dark': '#1E1611',
        'warm-dark-card': '#2D231C',
        cream: '#F7F4EE',
        'cream-dark': '#EFE9DF',
        card: '#FBF8F3',
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
