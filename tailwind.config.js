/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'earth-sky-view': 'url(/a-sky-view-of-earth-from-suomi-npp.jpg)',
      },
      screens: {
        'rotate': {'raw': '(orientation: landscape)'},
      },
      colors: {
        'transparent': 'rgba(0, 0, 0, 0)',
        'background': 'rgb(26, 41, 92)',    // deep space blue
        'interactive': 'rgb(173, 121, 95)', // nebula orange
        'text': '#F8F8F8',                  // starlight white

        // 'background': '#0B3D91',  // deep space blue

        // 'interactive': '#F5A623',// nebula orange
        'important': '#8A2BE2',  // nebula purple
        'highlight': '#FFD700'   // star yellow


        // 'primary': 'var(--primary-color)',
        // 'secondary': 'var(--secondary-color)',
        // 'text-color': '#1D3557',
        // 'background': 'var(--background-color)',
        // 'accent': 'var(--accent-color)'


        // space: '#0B0C10',
        // darkBlue: '#1F2833',
        // lightBlue: '#66FCF1',
        // neonBlue: '#45A29E',
        // charcoal: '#C5C6C7',
        // white: '#F8F8F8',
        // lightGray: '#F1FAEE'
      },
    },
  },
  plugins: [],
};
