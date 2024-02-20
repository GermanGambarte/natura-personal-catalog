/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      custom: {
        'bg-primary': '#1d1f21',
        'bg-secondary': '#2c2e30',
        'fg-primary': '#ffffff',
        'fg-secondary': '#e0e0e0',
        'accent-primary': '#ff6600',
        disable: '#929292'
      }
    }
  },
  plugins: []
}
