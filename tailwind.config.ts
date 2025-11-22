import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        runestone: {
          blue: "#0B3C5D",
          teal: "#1FB5B8",
          sand: "#F4E9DC"
        }
      }
    }
  },
  plugins: []
};

export default config;
