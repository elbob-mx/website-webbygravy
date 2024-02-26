/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.html"],
  theme: {
    extend: {
      fontFamily: {
        archivo: "Archivo, sans-serif",
        kosugi: "Kosugi, sans-serif",
        lexend: "Lexend, sans-serif",
        lexendExa: "Lexend Exa,  sans-serif",
      },
      colors: {
        offBlack: "#181818",
        offWhite: "#F2F2F2",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
