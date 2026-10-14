/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#080809',
          900: '#101013',
          850: '#151518',
          800: '#1d1d22',
          700: '#282830',
          600: '#383844',
        },
        navy: {
          950: '#080809',
          900: '#101013',
          850: '#151518',
          800: '#1d1d22',
          700: '#282830',
          600: '#383844',
        },
        neon: {
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          accent: '#10e760',
          glow: 'rgba(16, 231, 96, 0.25)',
        },
        electric: {
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          accent: '#10e760',
        },
        brand: {
          red: '#ef4444',
          green: '#22c55e',
          neon: '#10e760',
          yellow: '#f59e0b',
          blue: '#3b82f6',
          dark: '#080809'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
