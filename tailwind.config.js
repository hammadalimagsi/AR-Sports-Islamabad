/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070b14',
          900: '#0c1322',
          850: '#111a2e',
          800: '#16233d',
          700: '#213357',
          600: '#2d4474',
        },
        electric: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0369a1',
          accent: '#00d2ff',
        },
        brand: {
          red: '#ef4444',
          green: '#10b981',
          yellow: '#f59e0b',
          blue: '#2563eb',
          purple: '#8b5cf6',
          dark: '#0a0f1d'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
