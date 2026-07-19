/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#17160F',
          soft: '#2B2A22',
        },
        stone: {
          50: '#FBFAF8',
          100: '#F2F0EA',
          200: '#E8E5DD',
          300: '#D9D5C9',
          400: '#B8B3A2',
        },
        brass: {
          50: '#F7F0E4',
          200: '#E2CB9B',
          400: '#C6A362',
          500: '#AC8A4C',
          600: '#8C6D38',
          700: '#6B512A',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1440px',
      },
      boxShadow: {
        card: '0 20px 60px -20px rgba(23, 22, 15, 0.25)',
        soft: '0 10px 30px -12px rgba(23, 22, 15, 0.18)',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
