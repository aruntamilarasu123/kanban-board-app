/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        500: "325px",
      },
      colors: {
        notFound: "#F2949C",
      },
      maxWidth: {
        "8xl": "96rem",
      },
      keyframes: {
  gradient: {
    "0%": { backgroundPosition: "0% 50%" },
    "50%": { backgroundPosition: "100% 50%" },
    "100%": { backgroundPosition: "0% 50%" },
  },
  wave: {
    "0%, 100%": { transform: "rotate(0deg)" },
    "15%": { transform: "rotate(14deg)" },
    "30%": { transform: "rotate(-8deg)" },
    "45%": { transform: "rotate(14deg)" },
    "60%": { transform: "rotate(-4deg)" },
    "75%": { transform: "rotate(10deg)" },
  },
  glow: {
    '0%, 100%': {
      boxShadow: '0 0 10px #6366f1, 0 0 20px #6366f1',
    },
    '50%': {
      boxShadow: '0 0 20px #818cf8, 0 0 40px #818cf8',
    },
  },
  'fade-in-up': {
    '0%': {
      opacity: '0',
      transform: 'translateY(20px)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)',
    },
  },
},

      animation: {
  gradient: "gradient 2s linear infinite",
  wave: "wave 1s ease-in-out infinite",
  glow: "glow 2s ease-in-out infinite",
  "fade-in-up": "fade-in-up 0.4s ease-out",
},

    },
  },
  plugins: [],
};
