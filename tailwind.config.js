/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: '480px',
      tabs: '768px',
      pc: '1024px',
      desktop: '1200px',
    },
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
      },
      keyframes: {
        navSlideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        navSlideOut: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        greenSlideLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        greenSlideCenter: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        greenSlideRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        appear: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        }
      },
      animation: {
        slideInNav: 'navSlideIn 1s ease-in',
        slideOutNav: 'navSlideOut 1s ease-in',
        greenSliderLeft: 'greenSlideLeft 2s ease-in',
        greenSliderCenter: 'greenSlideCenter 3s ease-in',
        greenSliderRight: 'greenSlideRight 2s ease-in',
        itemAppear: 'appear 2s ease-in-out',
      },
    },
  },
  plugins: [],
}

