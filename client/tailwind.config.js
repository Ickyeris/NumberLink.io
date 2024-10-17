/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx'
  ],
  theme: {
    extend: {
      width: {
        '500': '500px'
      },
      height: {
        '100': '100px',
        '500' : '500px',
        '800' : '800px'
      },
      spacing: {
        '9/10': '90%'
      },
      aspectRatio: {
        '1': '1 / 1',
        '1/2': '1 / 2'
      },
      maxWidth: {
        '95vh': '95vh',
        '500': '500px',
        '750': '750px',
        '250': '250px',
      }
    },
  },
  plugins: [],
}

