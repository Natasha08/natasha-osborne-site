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
        'colorful-stars-and-nebulae': 'url(/colorful_stars_and_nebulae.jpg)',
        'europa-illustration': 'url(/europa_surface_illustration.jpg)',
        'juno-jupiter': 'url(/juno_jupiter.jpg)'
      },
      screens: {
        'rotate': {'raw': '(orientation: landscape)'},
        'xs': {'max': '639px'},
        'xxs': {'max': '450px'},
        'lg-mid': {'min': '1024px', 'max': '1180px'},
        'xl-mid': {'min': '1400px', 'max': '1535px'},
        '3xl': {'min': '1800px'}
      },
      colors: {
        'transparent': 'rgba(0, 0, 0, 0)',
        'deep-blue': 'var(--deep-blue)',
        'interactive': 'var(--nebula-orange)', // nebula orange
        'text': 'var(--text-white)',                  // starlight white
        'important': '#8A2BE2',  // nebula purple
        'highlight': '#FFD700',  // star yellow
        'europa-glow': 'rgba(79, 53, 17, 0.5)',
        'neon-blue': '#1F51FF',
        'glow-blue': 'rgb(0, 128, 255)',
        'translucent-gray': 'rgba(128, 128, 128, 0.3)',
        'jupiter-dark-beige': 'var(--jupiter-dark-beige)',
        'muted-gold': 'var(--muted-gold)',
        'muted-gold-translucent': 'var(--muted-gold-translucent)'
      },
      spacing: {
        '76': '19rem',
        '82': '22rem',
        '98': '26rem',
        '8-1/2': '2.125rem'
      }
    },
  },
  plugins: [],
};
