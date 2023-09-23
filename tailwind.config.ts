import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)"],
      display: ["var(--font-josefinsans)"],
    },
    extend: {
      colors: {
        paleYellow: {
          light: "#F5F8E7",
          dark: "#A9AB9F",
        },
      },
    },
  },
  plugins: [],
};
export default config;
