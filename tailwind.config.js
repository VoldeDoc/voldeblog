const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    flowbite.content()
  ],
  darkMode: 'selector',
  theme: {
    colors: require('tailwindcss/colors'),
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}