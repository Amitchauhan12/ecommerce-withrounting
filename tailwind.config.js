module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%"
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        yellow: {
          DEFAULT: "#fbee4f"
        },
        blue: {
          DEFAULT: "#3866df"
        },
        gray: {
          darkest: "#1f2d3d",
          dark: "#333333",
          DEFAULT: "#c0ccda",
          light: "#edeef3",
          lightest: "#f6f6f6"
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
