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

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         // A simpler, more robust keyframe
//         textSlide: {
//           '0%, 20%': {
//             transform: 'translateY(0%)',
//           },
//           '80%, 100%': {
//             transform: 'translateY(-50%)',
//           },
//         },
//       },
//       animation: {
//         // We'll use this class name in the JSX
//         'text-slide': 'textSlide 6s ease-in-out infinite alternate',
//       },
//     },
//   },
//   plugins: [],
// };