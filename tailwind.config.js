/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#15803d",
        secondary: "#2563eb",
        text: "#bcbfc5",
        header: "#111928",
        background: "#0d9488",
      },
    },
  },
  plugins: [],
};
