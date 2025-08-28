/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E60023', // Tossplace 레드 컬러
        neutral: '#111111',
        gray: {
          100: '#F5F5F5',
          200: '#E0E0E0',
          300: '#BDBDBD'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
