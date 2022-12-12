/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      textColor: {
        primary: '#605CFF',
        secondary: '#FF69B4',
        accent: '#2FE6A7',
        neutral: '#FFFFFF',
        grey: '#364153',
        background: '#1A202C',
      },
      backgroundColor: {
        primary: '#605CFF',
        secondary: '#FF69B4',
        accent: '#2FE6A7',
        neutral: '#FFFFFF',
        grey: '#364153',
        background: '#1A202C',
      },
      fontFamily: {
        dmSans: 'DM Sans' || 'sans-serif',
      },
      cursor: {
        'zoom-in': 'zoom-in',
        pointer: 'pointer',
      },
    },
  },
  plugins: [],
};
