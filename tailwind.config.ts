import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#0f172a",
        gold: "#c2872f",
        data: "#2563eb",
        graphite: "#64748b"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-serif)", "Source Serif 4", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 14px 28px rgba(15,23,42,0.08)",
        card: "0 20px 45px rgba(15,23,42,0.1)"
      }
    }
  },
  plugins: []
};

export default config;

