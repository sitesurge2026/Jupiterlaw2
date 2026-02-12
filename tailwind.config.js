// tailwind.config.js
module.exports = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./home/**/*.{js,ts,jsx,tsx}",
    "./contact-us/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,jsx}"
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Varela Round", "sans-serif"],
      },
      colors: {
        background: {
          primary: "#ffffff",
          secondary: "#eeeeee",
          alternative: "#000000",
        },
        text: {
          primary: "#000000",
          secondary: "#444444",
          alternative: "#ffffff",
        },
        border: {
          primary: "#000000",
          secondary: "#cccccc",
        },
      },
    },
  },
};
