/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#07090e',
          card: '#0d111d',
          cardBorder: '#1e2638',
          accent: '#eab308', // Gold
          gold: '#facc15',
          goldGlow: 'rgba(250, 204, 21, 0.25)',
          neon: '#10b981',
          purple: '#8b5cf6',
          blue: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(250, 204, 21, 0.4))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 35px rgba(250, 204, 21, 0.8))' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
