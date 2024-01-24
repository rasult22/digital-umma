const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        railway: ["Raleway Variable"],
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
      screens: {
        "custom-screen": { raw: "(max-height: 670px)" },
        lg: { min: "1200px" },
        md: { max: "1200px", min: "700px" },
        sm: { max: "700px", min: "0px" },
      },
    },
  },
  plugins: [require("tailwindcss-fluid-type")],
};
