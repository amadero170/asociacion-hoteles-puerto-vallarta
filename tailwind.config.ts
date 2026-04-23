import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Deep teal — replaces navy for dark sections (warm, oceanic, not corporate) */
        deep: {
          950: "#041F2A",
          900: "#072535",
          800: "#0C3347",
          700: "#134460",
        },
        /* Turquoise / Aqua — mar caribeño */
        aqua: {
          100: "#D2F5F4",
          200: "#A3ECEB",
          300: "#6DDEDE",
          400: "#3FCECE",
          500: "#17B8B6",
          600: "#0D9A98",
          700: "#097876",
          800: "#095F5D",
          900: "#084A49",
        },
        /* Coral / naranja atardecer */
        coral: {
          100: "#FFE8DF",
          200: "#FFCDB8",
          300: "#FFB096",
          400: "#FF8E6B",
          500: "#F4724F",  /* primary CTA */
          600: "#E05438",
          700: "#C43E25",
        },
        /* Arena cálida */
        sand: {
          50:  "#FBF8F1",
          100: "#F6EFE0",
          200: "#EDE3CC",
          300: "#E0D0B4",
          400: "#C9B890",
        },
        /* Verde palma */
        palm: {
          400: "#52C27A",
          500: "#35A862",
          600: "#1E8B4C",
          700: "#156B3B",
        },
        /* Sol dorado */
        sun: {
          300: "#FFE082",
          400: "#FFD04A",
          500: "#FFC220",
          600: "#F0A800",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee":         "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "float":           "float 6s ease-in-out infinite",
        "pulse-soft":      "pulse-soft 3s ease-in-out infinite",
        "wave":            "wave 8s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.55" },
        },
        wave: {
          "0%, 100%": { transform: "translateX(0) scaleY(1)" },
          "50%":      { transform: "translateX(-2%) scaleY(1.05)" },
        },
      },
      backgroundImage: {
        "gradient-radial":  "radial-gradient(var(--tw-gradient-stops))",
        "tropical-hero":    "linear-gradient(135deg, #041F2A 0%, #0C3347 50%, #097876 100%)",
        "warm-glow":        "radial-gradient(ellipse at top, #17B8B620 0%, transparent 70%)",
      },
      transitionTimingFunction: {
        "spring":     "cubic-bezier(0.32, 0.72, 0, 1)",
        "bounce-out": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
