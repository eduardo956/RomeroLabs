/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "obsidian-bg": "#090a0f",
        "obsidian-surface": "#14151a",
        "obsidian-surface-raised": "#1e2029",
        "obsidian-border": "#262933",
        "obsidian-border-gold": "rgba(212, 154, 83, 0.4)",
        "gold-primary": "#d49a53",
        "gold-champagne": "#f7e1bc",
        "gold-light": "#e5b878",
        "text-primary": "#ffffff",
        "text-secondary": "#a1a1aa",
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.375rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "display-hero": ["Space Grotesk", "sans-serif"],
        "headline-lg": ["Space Grotesk", "sans-serif"],
        "headline-md": ["Space Grotesk", "sans-serif"],
        "headline-sm": ["Space Grotesk", "sans-serif"],
        "body-lg": ["Geist", "sans-serif"],
        "body-md": ["Geist", "sans-serif"],
        "body-sm": ["Geist", "sans-serif"],
        "label-md": ["JetBrains Mono", "monospace"],
        "label-sm": ["JetBrains Mono", "monospace"]
      }
    },
  },
  plugins: [],
}
