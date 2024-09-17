/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        grey: {
          25: 'rgba(25,24,23,.25)'
        },
        navy: {
          pale: '#36384D',
          dark: '#242742',
        },
        vermellion: '#FF6155'
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(45deg, #FF6A3A 0%, #FF576D 78%, #FF527B 100%)',
      }
    },
  },
  plugins: [],
}