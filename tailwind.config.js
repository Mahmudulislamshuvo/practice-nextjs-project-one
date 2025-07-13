/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "/pages/**/*.{js,ts,jsx,mdx}",
    "./components/**/*.{js,ts,jsx,mdx}",
    "./app/**/*.{js,ts,jsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontSize: {
      "2xs": ["0.75rem", { lineHeight: "1.25rem" }],
      xs: ["0.8125rem", { lineHeight: "1.5rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    typography: require("./typography"),

    extend: {
      colors: {
        lighterDark: "#0F172A",
        dark: "#0B1120",
      },
      boxShadow: {
        glow: "0 0 4px rgb(0 0 0 / 0.1)",
      },
      maxWidth: {
        lg: "33rem",
        "2xl": "40rem",
        "3xl": "50rem",
        "5xl": "66rem",
      },
      opacity: {
        1: "0.01",
        2.5: "0.025",
        7.5: "0.075",
        15: "0.15",
      },
      keyframes: {
        glitch: {
          "0%": { clip: "rect(24px, 9999px, 26px, 0)" },
          "10%": { clip: "rect(74px, 9999px, 76px, 0)" },
          "20%": { clip: "rect(14px, 9999px, 16px, 0)" },
          "30%": { clip: "rect(44px, 9999px, 46px, 0)" },
          "40%": { clip: "rect(94px, 9999px, 96px, 0)" },
          "50%": { clip: "rect(34px, 9999px, 36px, 0)" },
          "60%": { clip: "rect(84px, 9999px, 86px, 0)" },
          "100%": { clip: "rect(24px, 9999px, 26px, 0)" },
        },
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        glitch: "glitch 1s step-end infinite",
        "spin-slow": "rotate360 6s linear infinite",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
