/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05070e',
          surface: '#0c101c',
          card: 'rgba(15, 23, 42, 0.75)',
          border: 'rgba(255, 255, 255, 0.08)',
          hover: 'rgba(255, 255, 255, 0.12)',
        },
        brand: {
          cyan: '#06b6d4',
          'cyan-glow': 'rgba(6, 182, 212, 0.35)',
          violet: '#8b5cf6',
          'violet-glow': 'rgba(139, 92, 246, 0.35)',
          indigo: '#6366f1',
          emerald: '#10b981',
          'emerald-glow': 'rgba(16, 185, 129, 0.35)',
        }
      },
      fontFamily: {
        display: ['Syne', 'Outfit', 'sans-serif'],
        tech: ['Space Grotesk', 'sans-serif'],
        sans: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 4s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'scan': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(6, 182, 212, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(139, 92, 246, 0.5))' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scan: {
          '0%, 100%': { top: '0%' },
          '50%': { top: '95%' },
        }
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
        'grid-pattern-light': "radial-gradient(circle, rgba(0, 0, 0, 0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-size': '24px 24px',
      }
    },
  },
  plugins: [],
}
