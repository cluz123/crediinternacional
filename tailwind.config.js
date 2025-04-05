/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          Monserrat: ["Montserrat", "sans-serif"],
          Poppins: ["Poppins", "sans-serif"],
        },
        clipPath: {
          'diagonal-left-up': 'polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)', // Corte diagonal de abajo hacia arriba, // Corte diagonal,
          'diagonal-right-up': 'polygon(0% 0%, 100% 0%, 93% 100%, 0% 100%)'
        }
      },
    },
    plugins: [],
  }
  
  