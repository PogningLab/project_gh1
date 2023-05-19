module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {

    extend: {
      colors: {
        'main1': '#1B1C20',
        'main2': '#191A1E',
        'main3': '#2F3FCA',
        'plain': '#F0FBFF',
        'fill': '#FFFFFF',
        'primary': '#2F3FCA',
        'primary2': '#5C69D5',
        'gradientStart': '#7981FF',
        'gradientEnd': '#F2A3FF',
      },
      fontFamily: {
        // add turner new bold
        'turner': ['Turner New', 'sans-serif'],
        'chakra': ['Chakra Petch', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
