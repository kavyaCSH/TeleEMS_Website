/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         emergency: {
          red: '#E63946',
          'red-dark': '#C62828',
          'red-light': '#FF6B6B',
        },
        trust: {
          navy: '#1D3557',
          'navy-light': '#264573',
        },
        tech: {
          blue: '#457B9D',
          'blue-light': '#5A9DBF',
        },
        success: {
          green: '#2DC653',
          'green-dark': '#1B9E3E',
        },
        medical: {
          white: '#F8F9FA',
        },
        warning: {
          yellow: '#F7B32B',
          orange: '#E76F51',
        },
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E63946 0%, #457B9D 50%, #1D3557 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0a0e1a 0%, #1D3557 40%, #0f1923 100%)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
