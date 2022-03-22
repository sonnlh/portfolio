module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        light: '#f4f6f8',
        primary: "#f6e05e"
      },
      backgroundImage: {
        'layer-texture': "url('./img/layer.svg')",
      }
    },
  },
  plugins: [],
}