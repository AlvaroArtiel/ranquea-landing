import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#5B3FFF',
          600: '#4A37D4',
          700: '#3A2BA8',
          100: '#EDEAFE',
          50: '#F6F4FF',
        },
        gold: '#FFB400',
      },
    },
  },
  plugins: [],
} satisfies Config
