import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ACFF00",
        secondary: "#F1F3F8",
        accent: "#0F1013",
        neutral: "#C7CBD8",
      },
     
    },
  },
  plugins: [],
};
export default config;
