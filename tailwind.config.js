/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Brand Color System requested by USER
        brand: {
          bg: '#FFFFFF',
          alt: '#F5F7F5',
          text: '#202720',
          muted: '#626B63',
          green: '#248A45',
          hover: '#176B35',
          border: '#E2E8E2',
          charcoal: '#202720',
          50: '#F0F9F3',
          100: '#DCF1E3',
          200: '#B8E3C6',
          500: '#248A45',
          600: '#176B35',
          700: '#12542A',
        },
        // Semantic surface and content tokens
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F5F7F5',
          card: '#FFFFFF',
          subtle: '#F0F3F0',
        },
        content: {
          DEFAULT: '#202720',
          muted: '#626B63',
          subtle: '#8E978F',
        },
        border: {
          DEFAULT: '#E2E8E2',
          subtle: '#ECEFEC',
        },
        // Backward-compatible tokens mapped cleanly to new light/contrast theme
        dark: {
          950: '#FFFFFF',
          900: '#F5F7F5',
          850: '#ECEFEC',
          800: '#E2E8E2',
          750: '#D5DDD5',
          700: '#CBD5CB',
          600: '#626B63',
          charcoal: '#202720'
        },
        navy: {
          950: '#FFFFFF',
          900: '#F5F7F5',
          850: '#ECEFEC',
          800: '#E2E8E2',
          700: '#CBD5CB',
        },
        neon: {
          300: '#4ADE80',
          400: '#248A45',
          500: '#248A45',
          600: '#176B35',
          accent: '#248A45',
          glow: 'rgba(36, 138, 69, 0.2)',
        },
        electric: {
          400: '#248A45',
          500: '#248A45',
          600: '#176B35',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
