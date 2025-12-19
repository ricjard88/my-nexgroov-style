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
        // Gentle rotation - smooth and slow
        "tile-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        // Gentle scale - subtle breathing effect
        "tile-scale": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.88)" },
        },
        // Glow pulse - shadow animation instead of opacity flash
        "tile-glow": {
          "0%, 100%": { boxShadow: "0 0 8px 2px hsl(270 40% 65% / 0.4)" },
          "50%": { boxShadow: "0 0 20px 6px hsl(270 40% 70% / 0.6)" },
        },
        // Gentle drift - subtle floating motion
        "tile-drift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(2px, -3px)" },
          "50%": { transform: "translate(-2px, 2px)" },
          "75%": { transform: "translate(3px, 1px)" },
        },
        // Gentle sway - soft rotation wobble
        "tile-sway": {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        // Breathe - combine scale with gentle glow
        "tile-breathe": {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 8px 2px hsl(270 40% 65% / 0.3)" },
          "50%": { transform: "scale(0.92)", boxShadow: "0 0 16px 4px hsl(270 40% 70% / 0.5)" },
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
        // Slow, gentle animations - no flashing
        "tile-rotate": "tile-rotate 4s linear infinite",
        "tile-rotate-fast": "tile-rotate 2.5s linear infinite",
        "tile-scale": "tile-scale 3s ease-in-out infinite",
        "tile-scale-fast": "tile-scale 2s ease-in-out infinite",
        "tile-glow": "tile-glow 3s ease-in-out infinite",
        "tile-glow-fast": "tile-glow 2s ease-in-out infinite",
        "tile-drift": "tile-drift 4s ease-in-out infinite",
        "tile-drift-fast": "tile-drift 2.5s ease-in-out infinite",
        "tile-sway": "tile-sway 3s ease-in-out infinite",
        "tile-sway-fast": "tile-sway 2s ease-in-out infinite",
        "tile-breathe": "tile-breathe 3.5s ease-in-out infinite",
        "tile-breathe-fast": "tile-breathe 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
