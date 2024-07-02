/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          10: '#F6F6F6',
          20: '#D6E4F0',
          30: '#1E56A0',
          40: '#163172',
          60: '#152947',
          70: '#274662'
        },
      },
      width: {
        '35': '7rem'
      },
      height: {
        '15': '4rem'
      }
    },
  },
  plugins: [],
}