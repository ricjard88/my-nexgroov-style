import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Source Sans Pro", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          warm: "hsl(var(--accent-warm))",
          "warm-foreground": "hsl(var(--accent-warm-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "grow-width": {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        "blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        "tile-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(90deg)" },
          "50%": { transform: "rotate(180deg)" },
          "75%": { transform: "rotate(270deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "tile-scale": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.7)" },
        },
        "tile-opacity": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
        "tile-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(0.85)", opacity: "0.6" },
        },
        "tile-wobble": {
          "0%, 100%": { transform: "rotate(-5deg) scale(1)" },
          "25%": { transform: "rotate(5deg) scale(1.05)" },
          "50%": { transform: "rotate(-5deg) scale(0.95)" },
          "75%": { transform: "rotate(5deg) scale(1)" },
        },
        "tile-chaos": {
          "0%": { transform: "rotate(0deg) scale(1)", opacity: "1" },
          "25%": { transform: "rotate(90deg) scale(0.8)", opacity: "0.5" },
          "50%": { transform: "rotate(180deg) scale(1.1)", opacity: "0.8" },
          "75%": { transform: "rotate(270deg) scale(0.9)", opacity: "0.4" },
          "100%": { transform: "rotate(360deg) scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-in-slow": "fade-in-slow 0.8s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "grow-width": "grow-width 0.8s ease-out forwards",
        "blink": "blink 1s step-end infinite",
        "tile-rotate": "tile-rotate 2s linear infinite",
        "tile-rotate-fast": "tile-rotate 1.2s linear infinite",
        "tile-rotate-faster": "tile-rotate 0.8s linear infinite",
        "tile-scale": "tile-scale 1.5s ease-in-out infinite",
        "tile-scale-fast": "tile-scale 0.8s ease-in-out infinite",
        "tile-opacity": "tile-opacity 1.2s ease-in-out infinite",
        "tile-opacity-fast": "tile-opacity 0.6s ease-in-out infinite",
        "tile-pulse": "tile-pulse 1s ease-in-out infinite",
        "tile-pulse-fast": "tile-pulse 0.5s ease-in-out infinite",
        "tile-wobble": "tile-wobble 1.2s ease-in-out infinite",
        "tile-wobble-fast": "tile-wobble 0.6s ease-in-out infinite",
        "tile-chaos": "tile-chaos 1.5s ease-in-out infinite",
        "tile-chaos-fast": "tile-chaos 0.8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
