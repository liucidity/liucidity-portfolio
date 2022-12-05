/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {


    // fontFamily: {
    //   "nunito": ['nunito', 'sans-serif'],
    //   "fira code": ['fira code', 'serif']
    // },
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'oxygen': ['oxygen'],
        'montserrat': ['montserrat'],
        'M Plus 1': ['M Plus 1'],
        'Catamaran': ['Catamaran'],
        'firaCode': ['fira Code', 'serif'],
      },
      colors: {
        'ming': '#102444',
        'oxford-blue': '#0b192f',
        'dark-cyan': '#368F8B',
        'green': '#64ffda',
        'light-purple': '#ccc9dc',
        'dark-purple': '#a599b5',

      }
    },
  },
  plugins: [],
}
