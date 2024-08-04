/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#333333',          // Primary
        slateGray: '#6C6E6F',          // Secondary
        dustyRose: '#D4A6A1',          // Accent
        offWhite: '#F5F5F5',          // Background
        darkCharcoal: '#2D2D2D',       // Text
        softBeige: '#E3D9D1',          // Button
        lightCharcoal: '#4F4F4F',      // Button Hover
        lightSlateGray: '#9E9E9E',     // Secondary Button Hover
        veryLightGray: '#F0F0F0',      // Background Hover
        deepCharcoal: '#1E1E1E',       // Navbar Background
        black: '#000000',             // Navbar Background (alternative)
        lightGray: '#E0E0E0',         // Borders
        darkGray: '#4A4A4A'            // Dark Gray
        ,offWhite: {
          DEFAULT: '#f8f8f8',  // The main off-white color
          light: '#fcfcfc',    // Lighter shade
          lighter: '#fdfdfd',  // Even lighter shade
          dark: '#f2f2f2',     // Darker shade
          darker: '#ededed',   // Even darker shade
        },
      },
      height: {
        'screen-half': '50vh', // Custom class for 50% of viewport height
      },
      backgroundImage:{
        'tinyDotsImg': "url('/tinyDots.jpg')",

      },
      maxHeight: {
        'xs': '20rem',     // Custom size for maximum height equivalent to max-w-xs
        'sm': '24rem',     // Custom size for maximum height equivalent to max-w-sm
        'md': '28rem',     // Custom size for maximum height equivalent to max-w-md
        'lg': '32rem',     // Custom size for maximum height equivalent to max-w-lg
        'xl': '36rem',     // Custom size for maximum height equivalent to max-w-xl
        'full': '100%',    // Maximum height of 100% of its container
        'screen': '100vh', // Maximum height equal to the full viewport height
      },
      minHeight: {
        'xs': '20rem',     // Custom size for minimum height equivalent to max-w-xs
        'sm': '24rem',     // Custom size for minimum height equivalent to max-w-sm
        'md': '28rem',     // Custom size for minimum height equivalent to max-w-md
        'lg': '32rem',     // Custom size for minimum height equivalent to max-w-lg
        'xl': '36rem',     // Custom size for minimum height equivalent to max-w-xl
        'full': '100%',    // Minimum height of 100% of its container
        'screen': '100vh', // Minimum height equal to the full viewport height
      },
      minWidth: {
        'xs': '20rem',     // Custom size for maximum height equivalent to max-w-xs
        'sm': '24rem',     // Custom size for maximum height equivalent to max-w-sm
        'md': '28rem',     // Custom size for maximum height equivalent to max-w-md
        'lg': '32rem',     // Custom size for maximum height equivalent to max-w-lg
        'xl': '36rem',     // Custom size for maximum height equivalent to max-w-xl
        'full': '100%',    // Maximum height of 100% of its container
        'screen': '100vh', // Maximum height equal to the full viewport height
      },
      maxWidth: {
        'xs': '20rem',     // Custom size for maximum height equivalent to max-w-xs
        'sm': '24rem',     // Custom size for maximum height equivalent to max-w-sm
        'md': '28rem',     // Custom size for maximum height equivalent to max-w-md
        'lg': '32rem',     // Custom size for maximum height equivalent to max-w-lg
        'xl': '36rem',     // Custom size for maximum height equivalent to max-w-xl
        'full': '100%',    // Maximum height of 100% of its container
        'screen': '100vh', // Maximum height equal to the full viewport height
      },
    },
    
  },
  plugins: [],
}

