import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F1EB",        // primary off-white background
        bone: "#E8E2D5",         // mid surface, dividers
        stone: "#C8C0B2",        // inactive borders
        "grey-warm": "#88827A",  // secondary text
        slate: "#3A3733",        // hover-text, deep dividers
        ink: "#1F1D1A",          // primary text, dark surfaces
        "shadow-deep": "#0E0D0B",// hero / footer
        moss: "#3D453B",         // single accent — atmospheric green
      },
      fontFamily: {
        display: ['var(--font-fraunces)', "Georgia", "serif"],
        body: ['var(--font-manrope)', "system-ui", "sans-serif"],
        mono: ['var(--font-jetbrains)', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        editorial: "0.18em",
        wider2: "0.32em",
      },
      transitionTimingFunction: {
        elegant: "cubic-bezier(0.22, 1, 0.36, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "hero-zoom": "heroZoom 24s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        heroZoom: {
          from: { transform: "scale(1.05)" },
          to: { transform: "scale(1.12)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
