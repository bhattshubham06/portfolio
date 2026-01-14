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
        night: "#020617",
        gold: "#F59E0B",
        data: "#3B82F6",
        graphite: "rgba(255,255,255,0.04)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Playfair Display", "Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 10px 50px rgba(59,130,246,0.25)",
        card: "0 20px 70px rgba(0,0,0,0.35)"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
        mesh: "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.12), transparent 25%), radial-gradient(circle at 80% 10%, rgba(245,158,11,0.14), transparent 20%), radial-gradient(circle at 50% 80%, rgba(59,130,246,0.12), transparent 25%)"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseWide: {
          "0%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
          "100%": { opacity: "0.35" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseWide: "pulseWide 10s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

