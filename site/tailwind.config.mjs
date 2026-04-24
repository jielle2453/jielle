/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F3EEE3',
          dark: '#E4DAC6',
          deep: '#D8CDB5',
        },
        ink: {
          DEFAULT: '#1A1814',
          soft: '#55504A',
          faint: '#938B80',
        },
        rust: {
          DEFAULT: '#C04A1E',
          soft: '#E89477',
          deep: '#7E2F0F',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        hand: ['Caveat', 'cursive'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
      },
    },
  },
  plugins: [],
};
