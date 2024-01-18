/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1000px" },
      // => @media (max-width: 1023px) { ... }

      md: { min: "600px", max: "780px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "780px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "425px" },
    },
    extend: {
      // fontFamily: {
      //   inter: ["Inter", "sans-serif"],
      // },
      colors: {
        indigo: {
          light: "#f4f2ff",
          dark: "#735fd7",
        },
        red: {
          light: "#fff2ec",
          dark: "#e78045",
        },
        blue: {
          light: "#ecfbff",
          dark: "#48bcd9",
        },
        yellow: {
          light: "#feefd0",
          dark: "#f9b214",
        },
        grey: {
          light: "#faf7f2",
          default: "#fff",
        },
        green: {
          light: "#eefcef",
        },
        sky: {
          light: "#e6f5fa",
        },
        sidenav: {
          dark: "#faf7f2",
        },
      },
    },
    fontSize: {
      tiny: ".65rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },

  plugins: [],
};
