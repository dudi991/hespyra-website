/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF8F2',
        primary: '#1F1B18',
        accent: '#C58A61',
        'accent-hover': '#AC7248',
        border: '#E5DCD0',
        muted: '#6B655D',
        'warm-dark': '#1E1611',
        'warm-dark-card': '#2D231C',
        cream: '#FAF8F2',
        'cream-dark': '#F3EDE3',
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
