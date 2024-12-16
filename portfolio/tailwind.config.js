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
        gradientFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        rotatePing: {
          '0%': { transform: 'rotate(-175deg) scale(1)' },
          '100%': { transform: 'rotate(-175deg) scale(2)' },
        },
      },
      animation: {
        gradientFlow: 'gradientFlow 3s ease-in-out infinite',
        rotatePing: 'rotatePing 6s infinite',
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