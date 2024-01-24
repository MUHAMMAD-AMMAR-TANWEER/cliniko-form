import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        // 'desktop': '1280px',
        // => @media (max-width: 1535px) { ... }
        // 'xl-desktop': { max: '1536px' },
        "lg-desktop": { max: "1535px" },
        "md-desktop": { max: "1279px" },
        "sm-desktop": { max: "1024px" },
        "xs-desktop": { max: "992px" },
        tablet: { max: "768px" },
        "lg-mob": { max: "600px" },
        "semiLg-mob": { max: "500px" },
        "md-mob": { max: "450px" },
        "sm-mob": { max: "320px" },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
