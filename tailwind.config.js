/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgmain: '#C5E4E7',
        labels: '#5E7A7D',
        heading: '#3D6666',
        inputColor: '#00474B',
        disabledbtn: '#0D686D',
        inputActive: '#26C2AE',
        labelGrey: '#7F9D9F',
        inputBG: '#F3F9FA',
        invalid: '#E17052'
      }
    },
  },
  plugins: [],
}
