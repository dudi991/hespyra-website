/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F2EB',
        primary: '#1C1917',
        accent: '#B67A53',
        'accent-hover': '#9A633F',
        border: '#E6E1DA',
        muted: '#78716C',
        'warm-dark': '#1E1611',
        'warm-dark-card': '#2D231C',
        cream: '#F5F2EB',
        'cream-dark': '#EBE6DD',
        midnight: '#111524'
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
