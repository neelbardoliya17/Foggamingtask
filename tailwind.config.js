/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bf-dark': '#1a1f25',
        'bf-gray': '#2a2f35',
        'bf-blue': '#00ffff',
        'game-dark': '#1a1a1a',
        'game-accent': '#ffd700',
      },
      fontFamily: {
        'game': ['Roboto Condensed', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    }
  },
  plugins: [],
}