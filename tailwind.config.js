module.exports = {
    theme: {
      extend: {
        keyframes: {
          cloud1: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(100vw)' } },
          cloud2: { '0%': { transform: 'translateX(-120%)' }, '100%': { transform: 'translateX(100vw)' } },
          cloud3: { '0%': { transform: 'translateX(-150%)' }, '100%': { transform: 'translateX(100vw)' } },
        },
        animation: {
          cloud1: 'cloud1 40s linear infinite',
          cloud2: 'cloud2 70s linear infinite',
          cloud3: 'cloud3 100s linear infinite',
        },
      },
    },
    plugins: [],
  };
  