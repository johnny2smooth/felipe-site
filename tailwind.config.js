/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',

    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: 'minmax(25%, 1fr) auto minmax(25%, 1fr)',
      },
      maxWidth: {
        custom: '1280px',
      },
    },
  },
  plugins: [],
};
