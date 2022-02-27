module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      // xl: '1280px',
      // '2xl': '1536px',
    },
    extend: {
      aspectRatio: {
        '2/3': '2 / 3',
      },
    },
  },
  plugins: [],
}
