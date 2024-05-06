/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1026px',
      xl: '1440px',
      '2xl': '1920px',
    },
    colors: {
      base: '#FAA500',
      primary: '#FFFFFF',
      secondary: '#353535',
      tertiary: '#EFEFEF',
      textPrimary: '#353535',
      textSecondary: '#FFFFFF'
    },
    extend: {
      boxShadow: {
        'smMenu': '0 0 #0000, 0 0 #0000, 0px 4px 6px 0px #00000014, 0 0 #0000'
      }
    },
  },
  plugins: [],
};
