// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // ✅ REPLACE your old animation config with this new one
      animation: {
        'pulse-glow': 'pulse-glow 3s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px -5px rgba(0, 196, 255, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 35px 0px rgba(0, 196, 255, 0.7)' 
          },
        },
      },
    },
  },
  plugins: [],
}