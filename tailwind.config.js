/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#101928",
        Secondary: "#3F3F44",
        Optional: "#7B7B7B",
      }
    },
  },
  plugins: [],
};