/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#f6625c",
        headingColor: "#000000E0",
        textColor: "#000000E0",
        secondaryText: "#000000A6",
        defaultBorder: "#D9D9D9FF",
      },
      boxShadow: {
        "3xl": "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;",
      },
      screens: {
        sm: "600px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
