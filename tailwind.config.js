/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed', 'sans-serif'],
      },
      colors: {
        moderateViolet: 'hsl(263, 55%, 52%)',
        darkGrayishBlue: 'hsl(217, 19%, 35%)',
        darkBlackishBlue: 'hsl(219, 29%, 14%)',
        lightGray: 'hsl(0, 0%, 81%)',
        lightGrayishBlue: 'hsl(210, 46%, 95%)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
