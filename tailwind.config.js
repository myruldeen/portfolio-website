/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef5fc',
          100: '#d6e7f8',
          200: '#aecdf1',
          300: '#6ea4de',
          400: '#3b82c9',
          500: '#0060c0',
          600: '#0057a8',
          700: '#004a8e',
          800: '#003b70',
          900: '#002c52'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}