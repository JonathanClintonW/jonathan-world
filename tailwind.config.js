/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.ejs",
    "./src/**/*.ejs" 
  ],
  theme: {
    extend: {
      fontFamily: {
        monserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        light_gray: '#B4B4B8',
        gray: '#686D76',
        dark_gray: '#373A40',
        turqoise: '#00a5a7',
        dark_turqoise: '#003C43',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontSize: {
        '128px': '128px',
      }
    },
  },
  plugins: [],
}

