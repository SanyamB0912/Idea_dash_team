/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        primary: '#ff4500',
        secondary: '#00bfff',
      },
      fontFamily: {
        // Add custom fonts here
        sans: ['Roboto', 'sans-serif'],
      },
      // Add more theme customizations as needed
    },
    container: {
      center: true, // Center the content horizontally
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [
    // Add Tailwind CSS plugins here
  ],
};
