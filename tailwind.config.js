/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}', // if using /app directory
    ],
    theme: {
      extend: {
        animation: {
          marquee: 'marquee 15s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-50%)' }, // scroll by half width for duplicate content
          },
        },
      },
    },
    plugins: [],
  };
  