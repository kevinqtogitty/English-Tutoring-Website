/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl1: '1.25rem',
      xl2: '1.563rem',
      xl3: '1.953rem',
      xl4: '2.441rem',
      xl5: '3.052rem'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    backgroundImage: {
      'waves': "url('./src/assets/images/wave.svg')"
    }
  },
  plugins: []
};
