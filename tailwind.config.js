/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-hanken)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-newsreader)", "Georgia", "serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        paper:   { DEFAULT: "#F7F4ED", dark: "#1F1B16" },
        surface: { DEFAULT: "#FFFFFF", dark: "#2A2620" },
        hairline:{ DEFAULT: "#E7E1D5", dark: "#35302A" },
        ink:     { DEFAULT: "#211D18", dark: "#F2EEE5" },
        ink2:    { DEFAULT: "#5C564D", dark: "#AAA193" },
        muted:   { DEFAULT: "#9A917F", dark: "#8F877A" },
        accent:  { DEFAULT: "#1C3D5A", hover: "#14304A", dark: "#4E84B8", link: "#7FB0DC",
                   tint: "#EAF0F5", tintbd: "#D6E1EB" },
        signal:  { DEFAULT: "#B25E1E", text: "#9A5B1E" },
        ok:      { DEFAULT: "#3C7A52", bg: "#E9F2EC", bd: "#CFE4D6" },
      },
    },
  },
  plugins: [],
};
