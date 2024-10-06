/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(at center, var(--tw-gradient-stops))",
      },
      fontFamily: {
        clash: ['"Clash Display"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
