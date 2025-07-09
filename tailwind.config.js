/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
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
      colors: {
        border: "var(--color-border)", /* glassmorphic border */
        input: "var(--color-input)", /* elevated surface */
        ring: "var(--color-ring)", /* soft purple */
        background: "var(--color-background)", /* near-white with blue undertone */
        foreground: "var(--color-foreground)", /* deep slate */
        primary: {
          DEFAULT: "var(--color-primary)", /* soft purple */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* light periwinkle */
          foreground: "var(--color-secondary-foreground)", /* deep slate */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* clear red */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* elevated surface */
          foreground: "var(--color-muted-foreground)", /* medium slate */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* warm orange */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* deep slate */
        },
        card: {
          DEFAULT: "var(--color-card)", /* elevated surface */
          foreground: "var(--color-card-foreground)", /* deep slate */
        },
        success: {
          DEFAULT: "var(--color-success)", /* vibrant green */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* balanced amber */
          foreground: "var(--color-warning-foreground)", /* deep slate */
        },
        error: {
          DEFAULT: "var(--color-error)", /* clear red */
          foreground: "var(--color-error-foreground)", /* white */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'squircle': '1.25rem',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        caption: ['Inter', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        'heading-normal': '400',
        'heading-medium': '500',
        'heading-semibold': '600',
        'heading-bold': '700',
        'body-normal': '400',
        'body-medium': '500',
      },
      letterSpacing: {
        'wide': '0.025em',
      },
      lineHeight: {
        'relaxed': '1.625',
      },
      backdropBlur: {
        'glassmorphic': '16px',
      },
      boxShadow: {
        'elevation-1': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevation-2': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'elevation-3': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glassmorphic': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'glow-primary': '0 0 20px rgba(167, 139, 250, 0.3)',
        'glow-accent': '0 0 20px rgba(251, 146, 60, 0.3)',
      },
      animation: {
        'blob-morph': 'blob-morph 6s ease-in-out infinite',
        'float-particle': 'float-particle 4s ease-in-out infinite',
        'ripple': 'ripple 0.3s ease-out',
      },
      keyframes: {
        'blob-morph': {
          '0%, 100%': {
            'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '50%': {
            'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
        },
        'float-particle': {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
            opacity: '0.3',
          },
          '50%': {
            transform: 'translateY(-20px) rotate(180deg)',
            opacity: '0.6',
          },
        },
        'ripple': {
          '0%': {
            width: '0',
            height: '0',
            opacity: '1',
          },
          '100%': {
            width: '300px',
            height: '300px',
            opacity: '0',
          },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      zIndex: {
        'header': '50',
        'sidebar': '40',
        'dropdown': '60',
        'interview': '70',
        'modal': '80',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}