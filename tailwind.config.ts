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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary': '#1A1A1B',
        'secondary': '#183D3D',
        'tertiary': '#37AA9C',
        'accent': '#93B1A6',
      },
    },
  },
  plugins: [],
};
export default config;
