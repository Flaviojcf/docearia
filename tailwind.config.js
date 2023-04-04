/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {},
    colors: {
      orange: "#C98A40",
      yellow : "#FEF4DE",
      white: "#FFFFFF",
      brown : "#7C4032",
      bottom: "#584125",
      modalOverlay: "rgba(0, 0, 0, 0.75)"

    },
    screens: {
      desktop: { max: "1440px" },


      tablet: { max: "1024px" },
    

      md: { max: "768px" },


      mobile: { max: "425px" },
    },
  },
  plugins: [],
};
