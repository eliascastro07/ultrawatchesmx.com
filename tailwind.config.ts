import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050505",
          900: "#0a0a0b",
          800: "#0f1012",
          700: "#16181c",
          600: "#1f2227",
          500: "#2a2d33",
        },
        gold: {
          50: "#fbf6e6",
          100: "#f5e7b8",
          200: "#ecd383",
          300: "#dcb751",
          400: "#c79a2c",
          500: "#a87d1c",
          600: "#7c5b12",
          700: "#4f3a0b",
        },
        cream: "#e8e3d6",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        ultra: "0.32em",
      },
      animation: {
        shimmer: "shimmer 3.6s linear infinite",
        "pulse-glow": "pulseGlow 2.4s ease-in-out infinite",
        "tick-second": "tickSecond 60s steps(60) infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.4", filter: "blur(40px)" },
          "50%": { opacity: "0.9", filter: "blur(56px)" },
        },
        tickSecond: {
          to: { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
