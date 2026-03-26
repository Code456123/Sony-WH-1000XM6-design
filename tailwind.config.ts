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
        background: "#050505",
        foreground: "#ffffff",
        primary: "#050505",
        secondary: "#0A0A0C",
        accent: {
          blue: "#0050FF",
          cyan: "#00D6FF"
        }
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at center, #050815 0%, #050505 50%)',
      }
    },
  },
  plugins: [],
};
export default config;
