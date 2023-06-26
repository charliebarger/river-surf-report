/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    'bg-chartBad',
    'bg-chartBadBorder',
    'bg-chartFair',
    'bg-chartFairBorder',
    'bg-chartGood',
    'bg-chartGoodBorder',
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        surfin_otter: "url('../public/river-surf-welcome.png')",
      },
      gridTemplateColumns: {
        16: 'minmax(600px, 1fr), 33%',
      },
      colors: {
        primaryColor: '#001021',
        secondaryColor: 'hsl(194deg 65% 75%)',
        fontColor: 'black',
        highlightColor: 'hsl(48deg 89% 50%)',
        highlightColorDulled: 'hsl(48deg 79% 50%)',
        chartBad: 'hsl(358deg 48% 44% / 60%)',
        chartBadBorder: 'hsl(358deg 48% 44% / 100%)',
        chartFair: 'hsl(202deg 60% 46% / 60%)',
        chartFairBorder: 'hsl(202deg 60% 46% / 100%)',
        chartGood: 'hsl(90deg 55% 44% / 60%)',
        chartGoodBorder: 'hsl(90deg 55% 44% / 100%)',
        linkColor: 'hsl(205deg 71% 53%)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
