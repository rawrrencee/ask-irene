/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#4b5563',
          secondary: '#bfdbfe',
          accent: '#ddd6fe',
          neutral: '#291334',
          'base-100': '#FAF7F5',
          info: '#93c5fd',
          success: '#a7f3d0',
          warning: '#fde68a',
          error: '#fda4af'
        }
      }
    ]
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
}
