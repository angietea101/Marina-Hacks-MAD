import type { Config } from "tailwindcss";
import { Nunito_Sans } from 'next/font/google';

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
	fontWeight: {
		extrabold: '1000',
	  },
      fontFamily: {
        sans: ['var(--font-nunito-sans)', 'sans-serif'], // Use the CSS variable here
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#F8F5ED",
        secondary: "#D6B483",
        input: "#B9B1B1",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
