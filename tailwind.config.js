/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx", 
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'inter' : ["Inter_400Reguler"],
        'inter-medium' : ["Inter_500Medium"],
        'inter-bold' : ["Inter_700Bold"],
      },
    },
  },
  plugins: [],
}

