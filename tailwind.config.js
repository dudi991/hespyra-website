/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F4ED',
        primary: '#1F1B18',
        accent: '#C78B61',
        'accent-hover': '#AD754B',
        border: '#DED6C9',
        muted: '#70685E',
        'warm-dark': '#1E1611',
        'warm-dark-card': '#2D231C',
        cream: '#F7F4ED',
        'cream-dark': '#EEE8DD',
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
