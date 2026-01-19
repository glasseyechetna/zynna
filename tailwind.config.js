// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],          // body text
        serif: ["Playfair Display", "serif"],     // headings
      },
    },
  },

  plugins: [],
};
