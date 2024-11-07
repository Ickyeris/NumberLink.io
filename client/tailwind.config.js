/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
      fontFamily: {
        'titleFont': ['TitleFont', 'sans-serif'],
      },
      height:{
        '100':'100px',
        '250': '250px',
        '500':'500px',
        '600':'600px',
        '800':'800px'
      }
    }
  },
  plugins: [],
}

