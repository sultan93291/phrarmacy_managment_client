/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from 'tailwindcss-animate';
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: 'true',
        padding: '24px',
        screen: {
          '2xl': '1545px',
        },
      },
      fontFamily: {
        nunito: ["'Nunito', sans-serif"],
        dmsans: ["'DM Sans', sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: '#0CA6FC',
          foreground: 'hsl(var(--primary-foreground))',
        },
        primaryLight: '#EFF8FF',
        titleText: '#000',
        primryDark: '#0063A9',
        menuLinkColor: '#1C404A',
        categoryBtnColor: '#052D4C',
        headerBg: '#EFF8FF',
        headerSearchbarPlaceHolder: 'rgba(0, 0, 0, 0.40)',

        subtitleText: 'rgba(0, 0, 0, 0.80)',
        borderLight: 'rgba(0, 0, 0, 0.20)',
        healthcareCardBg: '#01548B',
        teamCardColor: '#dff1ff',
        indicatorsColor: '#074673',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
