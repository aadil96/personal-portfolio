module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f8faff",
          900: "#212121",
          "900_75": "#14131375",
          "900_cc": "#141313cc",
          "900_6c": "#1413136c",
          "900_19": "#14131319",
          "900_0c": "#1413130c",
          "900_63": "#14131363",
          "900_02": "#191917",
          "900_01": "#141313",
        },
        red: { 400: "#eb5757", A100_6c: "#f785856c", A100: "#f78585" },
        light_blue: { 400: "#1abcfe" },
        black: { 900: "#060200", "900_01": "#010101" },
        deep_orange: { 300: "#ff6c63" },
        purple: { 300: "#b86adf" },
        white: { A700_6c: "#ffffff6c", A700_a2: "#ffffffa2", A700: "#ffffff" },
        orange: { 300: "#ffb147" },
        indigo: {
          700: "#252eb9",
          900: "#00189f",
          A700: "#304ffe",
          "900_01": "#00179f",
        },
        blue: { 100: "#c1caff" },
      },
      fontFamily: {
        ibmplexsans: "IBM Plex Sans",
        ibmplexserif: "IBM Plex Serif",
        jost: "Jost",
        poppins: "Poppins",
      },
      backgroundImage: {
        gradient: "linear-gradient(272deg ,#ffb147,#ff6c63,#b86adf)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
