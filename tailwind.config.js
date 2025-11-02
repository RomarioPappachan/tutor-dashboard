/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Mulish, monospace",
    },

    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        teal: {
          light: "#ebfbfb",
          medium: "#5ce0eb",
          dark: "#009ba7",
        },
        gray: {
          dark: "#2b2b2b",
          medium: "#5f5f5f",
          light: "#a6a6a6",
          subtle: "#afafaf",
        },
        neutralWhite: {
          soft: "#f8f5f5",
        },
      },
    },
  },
  plugins: [],
};
