/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome-img': "url('./lola-welcome.jpg')",
        'contact-img': "url('./cat-contact.png')",
        'verify-img' : "url('./cat-verify.jpg')",
        'verify-img2' : "url('./cat-verify2.jpg')",
        'verify-img3' : "url('./cat-ultima.png')"
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'nunito-sans': ['"Nunito Sans"', 'sans-serif']
      }
    },
    colors:{
      'orange':'#ED6436',
      'green': '#65C178',
      'light-grey' : '#F2F2F4',
      'black': '#181818',
      'dark-grey' : '#777777',
      'white': '#fff',
      'red': '#ff4040'
    }
  },
  plugins: [],
}
