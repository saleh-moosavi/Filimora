/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        my: {
          // Base colors
          "white-min": "#c6ffc6",
          "white-med": "#d9ffd9",
          "white-max": "#f5fff5",

          "black-min": "#6b6b6b",
          "black-med": "#3f3f3f",
          "black-max": "#1a1a1a",

          "green-low": "#00ff00",
          "green-min": "#00d400",
          "green-med": "#009b00",
          "green-max": "#005f00",

          // Global utility colors
          success: "#00ff00",
          warning: "#ffff00",
          error: "#ff0000",
          info: "#00ffff",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
