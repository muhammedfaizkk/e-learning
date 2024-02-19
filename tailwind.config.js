/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'md-b-lg': { 'max': '830px' },
        '2xl': { 'max': '1440px' },
        'min-mob': '570px',
        'mob-scr': { 'max': '570px' },
        'max-660px': { 'max': '660px' },
        'max-640px': { 'max': '640px' },
        'max-448px': { 'max': '448px' },
        'max-438px': { 'max': '438px' },
        'max-390px': { 'max': '390px' },
        'max-350px': { 'max': '350px' },
        'max-340px': { 'max': '340px' },
        'max-1280px': { 'max': '1280px' },
        'max-1200px': { 'max': '1200px' },
        'max-1098px': { 'max': '1098px' },
        'max-1066px': { 'max': '1066px' },
        'max-998px': { 'max': '998px' },
        'max-774px': { 'max': '774px' },
        'min-774px':  '774px',
        'max-1024px': { 'max': '1024px' },
        'max-720px': { 'max': '720px' },
        


      },
      fontFamily: {
        'myFont': 'Be Vietnam Pro',
      },
      colors: {
        'absalutewhite': ' var(--Absolute-White, #FFF)',
        'drk-yellow': 'var(--Orange-50, #FF9500)',
        'light-orange': 'var(--Orange-95, #FFF4E5)',
        'white-97': 'var(--White-97, #F7F7F8)',
        'hash': ' rgba(255, 255, 255, 0.20)',
        'darkHash': 'var(--Grey-30, #4C4C4D);',
        'hash-1': '  var(--Grey-35, #59595A)',
        'hash-light': '  var(--White-95, #F1F1F3)',
        'l-white': 'var(--Orange-97, #FFF9F0)',
        'Orange-80': 'var(--Orange-80, #FFD599);',
        'Orange-90': 'var(--Orange-90, #FFEACC);',
        'var(--Grey-20, #333)': 'var(--Grey-20, #333);'


      },
      backgroundImage: {
        'hero-pattern': "url('../public/assets/shape-17.png')",
      },
      fontWeight: {
        200: 200,
        400: 400,
        600: 600,
      }
    },
  },
  plugins: [],
}

