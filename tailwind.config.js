/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F5EE',
        primary: '#1F1B18',
        accent: '#C98A5F',
        'accent-hover': '#AD744A',
        border: '#E4DDD2',
        muted: '#736B61',
        'warm-dark': '#1E1611',
        'warm-dark-card': '#2D231C',
        cream: '#F8F5EE',
        'cream-dark': '#EFE8DC',
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
