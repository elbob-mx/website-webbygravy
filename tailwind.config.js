/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      small: "0px",
      mobile: "375px",
      mobileHorSmall: "567px",
      mobileHor: "640px",
      tablet: "767px",
      bigHor: "811px",
      bigPhoneHor: "844px",
      vertIpadMini: "820px",
      laptop: "976px",
      ipad: "1023px",
      hd: "1365px",
      fhd: "1440px",
    },
    extend: {
      fontFamily: {
        archivo: "Archivo, sans-serif",
        archivoNarrow: "Archivo Narrow, sans-serif",
        lexend: "Lexend, sans-serif",
        lexendExa: "Lexend Exa, sans-serif",
        source: "Source Code Pro, monospace",
        inconsolata: "Inconsolata, monospace",
        wave: "Wavefont, system-ui",
      },
      colors: {
        offBlack: "#181818",
        offWhite: "#F2F2F2",
        webbyGreen: "#A7F3D0",
        webbyOrange: "#ff5f1a",
        magenta: "#FF00FF",
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
