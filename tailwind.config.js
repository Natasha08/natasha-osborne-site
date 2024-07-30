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
        'colorful-stars-and-nebulae': 'url(/colorful_stars_and_nebulae.jpg)',
        'surface-of-europa': 'url(/surface_of_europa.png)',
        'rocky-mountain-1': 'url(/rocky_mountain_1_cropped.jpg)'
      },
      screens: {
        'rotate': {'raw': '(orientation: landscape)'},
      },
      colors: {
        'transparent': 'rgba(0, 0, 0, 0)',
        'background': 'rgb(26, 41, 92)',    // deep space blue
        'interactive': 'rgb(173, 121, 95)', // nebula orange
        'text': '#F8F8F8',                  // starlight white
        'important': '#8A2BE2',  // nebula purple
        'highlight': '#FFD700',   // star yellow
        'spam': 'rgba(255,255,255,0.3)',
        'ham': 'rgba(255,255,255,0.3)'
      },
    },
  },
  plugins: [],
};
