/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1280px",
    },
    fontFamily: {
      dm: ["DM Sans", "sans-serif"],
    },
    fontSize: {
      heading: ["32px", "2rem"],
      body: ["16px", "1rem"],
      label: ["14px", "0.875rem"],
      "small-text": ["10px", "0.625rem"],
      "price-text": ["12px", "0.75rem"],
    },
    colors: {
      "charcoal-black": "#1B1D1F",
      "jet-black": "#111315",
      "slate-gray": "#6F757C",
      "mint-green": "#BEE3CC",
      "ivory-white": "#FEF7EE",
      "mustard-yellow": "#F6C768",
      "coral-red": "#ED735D",
    },
    extend: {},
  },
  plugins: [],
};
