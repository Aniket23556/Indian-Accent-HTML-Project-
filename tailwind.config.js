/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    extend: {
      spacing: {
        '100': '25rem',
        '50': '12.5rem',
      },
    },
    extend: {
      fontSize: {
        'custom': '0.25rem',
        'extra': '1.5rem',
      },
    },
  },
}