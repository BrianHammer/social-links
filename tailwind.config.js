/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],

  theme: {
    colors: {
      "primary": "hsl(75, 94%, 57%)",
      "white": "hsl(0, 0%, 100%)",
      "grey": "hsl(0, 0%, 20%)",
      "dark-grey": "hsl(0, 0%, 12%)",
      "off-black": "hsl(0, 0%, 8%)"
    },

    fontFamily: {
      "main": ["Inter"]
    },
    fontWeight: {
      "normal": "400",
      "thick": "600",
      "extra-thick": "700",
    },

    screens: {
      "mobile": "375px",
      "desktop": "1440px"
    },
    extend: {},
  },
  plugins: [],
}

