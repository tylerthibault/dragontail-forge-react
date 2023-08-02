/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // light
        mylight1: '#fff',
        
        // dark
        mydark1: '#000',
        // util
        myaccent1: '#F47500',
        myaccent2: '#98c1d9',
      },
      fontFamily: {
        myHeading: 'Kaushan Script',
        myPara: 'Karma'
      }
    },
  },
  plugins: [],
}

