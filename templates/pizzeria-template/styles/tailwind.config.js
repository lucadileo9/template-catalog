const templateConfig = require('./config').templateConfig;

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: templateConfig.colors.primary,
        secondary: templateConfig.colors.secondary,
      },
    },
  },
  plugins: [],
};