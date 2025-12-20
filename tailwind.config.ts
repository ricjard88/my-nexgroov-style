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
        // Micro orbital drift - subtle elliptical path
        "orbital-drift": {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(4px, -3px)" },
          "50%": { transform: "translate(0, -5px)" },
          "75%": { transform: "translate(-4px, -3px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        // Gentle horizontal swing
        "pendulum-sway": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
        // Soft vertical float
        "vertical-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        // Diagonal diamond pattern
        "diagonal-wander": {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(4px, -4px)" },
          "50%": { transform: "translate(0, 0)" },
          "75%": { transform: "translate(-4px, 4px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        // Slow figure-8
        "figure-eight": {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(4px, -3px)" },
          "50%": { transform: "translate(0, 0)" },
          "75%": { transform: "translate(-4px, 3px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        // Spiral motion
        "lazy-spiral": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(3px, -3px) rotate(2deg)" },
          "50%": { transform: "translate(0, -4px) rotate(0deg)" },
          "75%": { transform: "translate(-3px, -3px) rotate(-2deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        // Breath-like subtle drift with scale
        "breath-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(2px, -3px) scale(1.02)" },
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
        // Circle animations - 3-5s cycles for faster movement
        "orbital-drift": "orbital-drift 4s ease-in-out infinite",
        "pendulum-sway": "pendulum-sway 3s ease-in-out infinite",
        "vertical-float": "vertical-float 3s ease-in-out infinite",
        "diagonal-wander": "diagonal-wander 4s ease-in-out infinite",
        "figure-eight": "figure-eight 4s ease-in-out infinite",
        "lazy-spiral": "lazy-spiral 5s ease-in-out infinite",
        "breath-drift": "breath-drift 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
