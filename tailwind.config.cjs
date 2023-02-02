/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        blue: {
          100: '#0E7CFF',
          200: '#0E5CFF',
        },
        black: {
          100: '#09090B',
          200: '#040405',
        },
      },
      keyframes: {
        'wave-animation': {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'right-animation': {
          '0%': { transform: 'translateX(16px)', opacity: '.5' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        wave: 'wave-animation 2.1s infinite',
        right: 'right-animation .5s forwards',
      },
      gridTemplateColumns: {
        'card-project': '2fr 1fr',
        'card-project-inverted': '1fr 2fr',
      },
      boxShadow: {
        'card-knowledges': '4px 5px 4px 3px rgba(14, 124, 255, .137)',
        'icon-contact': '0 0 5px rgba(14, 124, 255, 1)',
      },
    },
  },
  plugins: [],
}
