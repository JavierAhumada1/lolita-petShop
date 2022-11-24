/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'welcome-img': "url('../public/lola-welcome.jpg')"
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'nunito-sans': ['"Nunito Sans"', 'sans-serif']
      }
    },
    colors: {
      'orange':'#ED6436',
      'green': '#65C178',
      'light-grey': '#F2F2F4',
      'black': '#181818',
      'dark-grey': '#777777',
      'white': '#fff',
    }
  },
  plugins: [],
}
