/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          900: '#08080a',
          800: '#111216',
          700: '#1a1b22',
          600: '#252732',
        },
        brown: {
          900: '#1c110b',
          800: '#2C1810',
          700: '#3D2318',
        },
        gold: {
          50: '#FDF9EE',
          100: '#F7EDCE',
          200: '#EBD79A',
          300: '#DFC166',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#8B6914',
          700: '#684E0F',
        },
        cream: '#FDF8F0',
        blush: '#F5EFE6',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.15)',
        'gold-border': '0 0 0 1px rgba(212, 175, 55, 0.3)',
      }
    },
  },
  plugins: [],
}
