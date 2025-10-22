/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colors: {
          // Background
          bgWhite: "#FBFBFB",
          bgDark: "#111111",

          // Primary / accents
          primaryDark: "#5b2718",
          primaryLightesh: "#933C24",
          primaryLight: "#E0BA8E",

          // Text / neutrals
          textLight: "#F5F5F5",
          textBlack: "#000000",
          textDarkGray: "#5D5D5D",
          textGray: "#737373",
          textLightGray: "#B9B9B9",
          textLighterGray: "#D9D9D9",

          // Extra
          extraLight: "#F9F6F1",
        },
      },
      backgroundImage: {
        "hero-bg": "url('/images/hero-bg.webp')",
        "bread-bg": "url('/images/bread-bg.webp')",
        "discount-bg": "url('/images/discount-bg.webp')",
        "about-bg": "url('/images/about-bg.webp')",
        "footer-bg": "url('/images/footer-bg.webp')",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sansita: ['"Sansita Swashed"', "cursive"],
      },
      fontSize: {
        heroSubtitle: "clamp(1rem, 2.5vw, 1.3rem)",
        h1: "clamp(1.8rem, 0.9706rem + 4.7059vw, 4.2rem)",
        h2: "clamp(1.4rem, 3vw, 3.5rem)",
        h3: "clamp(1.1rem, 2vw, 1.3rem)",
        h4: "clamp(1rem, 2vw, 1.15rem)",
      },
      animation: {
        scroll: "scroll 15s linear infinite", // default
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};
