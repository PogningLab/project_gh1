module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {

    extend: {
      colors: {
        'main1': '#1B1C20',
        'main2': '#060047',
        'plain': '#F0FBFF',
        'fill': '#FFFFFF',
        'primary': '#FF004F',
        'primary2': '#7B68EE',
        'gradientStart': '#DC143C',
        'gradientEnd': '#FFE4E1',
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
