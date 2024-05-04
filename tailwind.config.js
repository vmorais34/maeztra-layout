/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1026px',
      xl: '1440px',
    },
    colors: {
      base: '#FAA500',
      primary: '#FFFFFF',
      secondary: '#353535',
      tertiary: '#EFEFEF',
      textPrimary: '#353535',
      textSecondary: '#FFFFFF'
    },
    extend: {},
  },
  plugins: [],
};
