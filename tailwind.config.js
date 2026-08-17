/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blood:   '#e10600',
        surface: '#0d0d0d',
        dark:    '#070707',
        primary: '#ff3333',
        muted:   '#5a5a5a',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body:    ['"DM Sans"',    'sans-serif'],
      },
      letterSpacing: {
        widest: '0.35em',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
}