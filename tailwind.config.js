/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'smipx': '300px',
        // => @media (min-width: 640px) { ... }

        'ipx': '375px',
        // => @media (min-width: 640px) { ... }

        'ip8': '414px',
        // => @media (min-width: 640px) { ... }

        'ip8n': '400px',
        // => @media (min-width: 640px) { ... }

        'at500': '500px',
        // => @media (min-width: 640px) { ... }

        'at540': '540px',
        // => @media (min-width: 640px) { ... }

        'xlsm': '639px',
        // => @media (min-width: 640px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'toy': '830px',
        // => @media (min-width: 1536px) { ... }

        'silver': '950px',
        // => @media (min-width: 1536px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'dry': '1440px',
        // => @media (min-width: 1536px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        'xlmy': '1326px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        'sxl': '1920px',
        // => @media (min-width: 1536px) { ... }
      } 
    },
  },
  plugins: [],
}

