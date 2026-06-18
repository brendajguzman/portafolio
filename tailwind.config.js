/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#0D0F14',
        surface: '#161B27',
        border:  '#1E2535',
        primary: '#7C3AED',
        accent:  '#A78BFA',
        muted:   '#64748B',
        text:    '#E2E8F0',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
