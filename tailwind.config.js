/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#26BC4B", hover: "#21A742", bright: "#42DC68" },
        base: "#0a0c0b",
        el1: "#111212",
        el2: "#1E1F1F",
        bord: "rgba(255,255,255,0.10)",
        bords: "rgba(254,255,254,0.20)",
        tp: "#F9F9F9",
        td: "#9BA29D",
        tm: "#7F7D83",
      },
      fontFamily: { sans: ["Archivo", "-apple-system", "Segoe UI", "sans-serif"] },
    },
  },
  plugins: [],
};
