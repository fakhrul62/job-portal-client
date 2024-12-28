/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        'head': ['Outfit, serif'],
        'body': ['Abel, serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}

