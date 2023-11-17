/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main-color': '#A445ED',
        'black-1': '#050505',
        'gray-1': '#1F1F1F',
        'gray-2': '#2D2D2D',
        'gray-3': '#3A3A3A',
        'gray-4': '#757575',
        'gray-5': '#E9E9E9',
        'gray-6': '#F4F4F4',
        'error-color': '#FF5252',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
