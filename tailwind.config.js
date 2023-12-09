/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pink-20": "#9a36d6",
        "pink-100": "#1e0b21",
        "pink-300": "#39163e",
        "gray-100": "#998a9d",
      },
      fontFamily: {
        WorkSansBold: "WorkSans-Bold",
        WorkSans: "WorkSans",
      },
      content: {
        bgDesktop: "url('./src/assets/images/background-pattern-desktop.svg')",
        iconMinus: "url('./src/assets/images/icon-minus.svg')",
        iconPlus: "url('./src/assets/images/icon-plus.svg')",
        iconStar: "url('./src/assets/images/icon-star.svg')",
        mobileHome: "url('./src/assets/images/background-pattern-mobile.svg')",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
};
