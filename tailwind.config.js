module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: [".75rem", "1.28"], //12px
      tiny: [".875rem", "1.28"], //14px
      base: ["1rem", "1.3"], //16px
      lg: "1.125rem", //18px
      xl: ["1.3125rem", "1.3"], //21px
      "2xl": ["1.5rem", "1.3"], //24px
      "3xl": ["1.875rem", "1.3"],
      "4xl": "2.5rem", //40px
      "5xl": ["3.625rem", "1.05"],
      "6xl": "4rem",
      "7xl": "5rem",
    },
    spacing: {
      1: "1px",
      5: "5px",
      8: "8px",
      10: "10px",
      14: "14px",
      20: "20px",
      30: "30px",
      40: "40px",
      45: "45px",
      70: "70px",
      115: "115px",
      175: "175px",
      310: "310px",
      400: "400px",
    },
    container: {
      screens: {
        sm: "100%",
        md: "1024px",
        lg: "1024px",
        xl: "1024px",
        "2xl": "1024px",
      },
    },
    extend: {},
    colors: {
      grey: { light: "#FCFCFC", dark: "#BEBEC2", header: "#DFDFE0" },
      title: "#6F6E73",
      white: "#FFFFFF",
      blue: "#885FFF",
      whiteSmoke: "#f5f5f5",
    },
  },
  plugins: [],
};
