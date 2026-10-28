/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vintageGreen: '#263d2e',
        vintageGreenDark: '#1a2c21',
        vintageCream: '#f5eee6',
        vintageCreamDark: '#ebe1d5',
        vintageMustard: '#f2a922',
        vintageMustardDark: '#d98f12',
        vintageTerracotta: '#cf633a',
        vintageRust: '#b8522b',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Abril Fatface"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
