/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      color: {
        myColor: "#ffffff",
      },
      width: {
        maxWidth: "120px",
      },
    },
  },
  plugins: [],
};
