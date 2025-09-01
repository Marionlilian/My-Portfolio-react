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
        primary: '#6366F1',     // indigo-500
        darkPrimary: '#8B5CF6', // violet-500
        accent: '#F43F5E',      // rose-500
        darkAccent: '#FB7185',  // rose-400
        lightBg: '#F9FAFB',     // gray-50
        darkBg: '#111827',      // gray-900
        lightCard: '#FFFFFF',
        darkCard: '#1F2937',
      },
    },
  },

  plugins: [
    require('flowbite/plugin'),
  ],
};
