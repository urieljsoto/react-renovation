module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-stone': '#01576F',
        'blue-stone-500': '#4D899A',
        'blue-stone-200': '#E6EEF1',
        'blue-stone-100': '#F8FAFB',
      },
      width:{
        'section': '1140px',
      },
      backgroundImage: {
        'home-hero': "url('../assets/images/hero-image.jpg')",
      }
    },
    screens: {
      'xsm': '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}