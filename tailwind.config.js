/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        kosugi: "Kosugi, sans-serif",
        lexend: "Lexend, sans-serif",
        lexendExa: "Lexend Exa,  sans-serif",
        archivo: "Archivo, sans-serif",
      },
      colors: {
        offBlack: "#181818",
        offWhite: "#F2F2F2",
        darkAqua: "#001212",
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
