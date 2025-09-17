/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
   theme: {
    extend: {
      colors: {
        primary: '#6366F1',     
        darkPrimary: '#8B5CF6', 
        accent: '#F43F5E',      
        darkAccent: '#FB7185',  
        lightBg: '#F9FAFB',     
        darkBg: '#111827',      
        lightCard: '#FFFFFF',
        darkCard: '#1F2937',
      },
    },
  },

  plugins: [
    require('flowbite/plugin'),
  ],
};
