/** @type {import('tailwindcss').Config} */
export default {
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#0b0b0b",
          dark: "#111111",
          gold: "#c9a227",
          "gold-light": "#e0c35a",
          cream: "#f7f4ed",
          white: "#ffffff",
          muted: "#8a8a8a",
          border: "#dedbd2",
        },
      },

      fontFamily: {
        sans: [
          "Inter",
          "Arial",
          "Helvetica",
          "sans-serif",
        ],

        display: [
          "Georgia",
          "Times New Roman",
          "serif",
        ],
      },

      boxShadow: {
        luxury:
          "0 20px 45px rgba(0, 0, 0, 0.10)",

        gold:
          "0 12px 30px rgba(201, 162, 39, 0.20)",
      },

      animation: {
        float: "float 5s ease-in-out infinite",
        "float-slow": "floatSlow 7s ease-in-out infinite",
        shimmer: "shimmer 3s infinite",
        "fade-up": "fadeUp 0.8s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
      },

      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        floatSlow: {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-18px) rotate(1deg)",
          },
        },

        shimmer: {
          "0%": {
            left: "-120%",
          },
          "45%, 100%": {
            left: "130%",
          },
        },

        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
    },
  },

  plugins: [],
};