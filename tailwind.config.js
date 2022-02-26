module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      aspectRatio: {
        '2/3': '2 / 3',
      },
    },
  },
  plugins: [],
}
