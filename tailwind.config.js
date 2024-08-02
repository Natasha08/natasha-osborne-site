/** @type {import('tailwindcss').Config} */

export default {
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
        'rocky-mountain-1': 'url(/rocky_mountain_1_cropped.jpg)',
        'mobile-rocky-mountain-1': 'url(/mobile_rocky_mountain_1_cropped.jpg)',
        'hubble-hd-189733b': 'url(/hubble_hd_189733b.jpg)',
        'earth-center-view': 'url(/earth_center_view.jpg)'
      },
      screens: {
        'rotate': {'raw': '(orientation: landscape)'},
        'xs': '450px'
      },
      colors: {
        'transparent': 'rgba(0, 0, 0, 0)',
        'background': 'rgb(26, 41, 92)',    // deep space blue
        'interactive': 'rgb(173, 121, 95)', // nebula orange
        'text': '#F8F8F8',                  // starlight white
        'important': '#8A2BE2',  // nebula purple
        'highlight': '#FFD700',  // star yellow
        'europa-glow': 'rgba(79, 53, 17, 0.5)'
      },
    },
  },
  plugins: [],
};
