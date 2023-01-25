/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryColor: "hsl(196deg 46% 48%)",
        secondaryColor: "hsl(194deg 65% 75%)",
        fontColor: "black",
        highlightColor: "hsl(48deg 89% 50%)",
        highlightColorDulled: "hsl(48deg 79% 50%)",
        chartBad: "hsl(358deg 48% 44% / 60%)",
        chartBadBorder: "hsl(358deg 48% 44% / 100%)",
        chartFair: "hsl(202deg 60% 46% / 60%)",
        chartFairBorder: "hsl(202deg 60% 46% / 100%)",
        chartGood: "hsl(90deg 55% 44% / 60%)",
        chartGoodBorder: "hsl(90deg 55% 44% / 100%)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
