/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.25))",
      },
      lineHeight: {
        tight: "1.2",
      },
    },
  },
  plugins: [],
};
