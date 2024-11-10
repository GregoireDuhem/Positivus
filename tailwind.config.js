/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Green: "#B9FF66",
        Dark: "#191A23",
        Black: "#000000",
        Grey: "#F3F3F3",
      },
      fontSize: {
        // Desktop sizes based on your latest screenshot
        h1: ["3.75rem", { lineHeight: "auto" }], // 60px
        h2: ["2.5rem", { lineHeight: "auto" }], // 40px
        h3: ["1.875rem", { lineHeight: "auto" }], // 30px
        h4: ["1.25rem", { lineHeight: "auto" }], // 20px
        p: ["1.125rem", { lineHeight: "auto" }], // 18px

        // Mobile sizes
        "h1-mobile": ["2.6875rem", { lineHeight: "auto" }], // 43px
        "h2-mobile": ["2.25rem", { lineHeight: "auto" }], // 36px
        "h3-mobile": ["1.625rem", { lineHeight: "auto" }], // 26px
        "h4-mobile": ["1.125rem", { lineHeight: "auto" }], // 18px
        "p-mobile": ["1rem", { lineHeight: "1.5" }], // 16px / 24px
      },
      fontFamily: {
        baloo: ['"Baloo 2"', "cursive"], // Font family for Baloo 2
        space: ['"Space Grotesk"', "sans-serif"], // Font family for Space Grotesk
        sans: ["Inter", "sans-serif"], // Your fallback font if you still want to use Inter
      },
    },
  },
  plugins: [],
};
