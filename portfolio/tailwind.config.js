/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Inter', 'sans-serif']
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  animation: {
    typewriter: 'typewriter 2s steps(30) 1s forwards',
    blink: 'blink 0.5s step-end infinite',
  },
}