/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enables dark mode based on class

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        sans_jp: ['var(--font-sans-jp)'],
        figtree: ['var(--font-figtree)'],
      },
      colors: {
        // Light Mode
        primaryBackgroundLight: '#F5F5F5', // Light Grey
        textLight: '#333333', // Dark Grey
        accentLight: '#1E90FF', // Dodger Blue (Adjust to a more suitable blue)

        // Dark Mode
        primaryBackgroundDark: '#121212', // Very Dark Grey
        textDark: '#ffffff', // White
        accentDark: '#2E8B57', // Sea Green (Adjust to a more suitable green)

        // Borders
        borderLight: '#D1D1D1', // Light Grey
        borderDark: '#444', // Dark Grey

        // Focus
        focusLight: '#85D7FF', // Light Blue
        focusDark: '#007BFF', // Blue

        // Hover
        hoverLight: '#EAEAEA', // Lighter Grey
        hoverDark: '#1F1F1F', // Darker Grey

        hoverBgDark: 'hsla(0,0%,100%,.02)',
        hoverBgLight: 'hsla(0,0%,100%,.05)',

        hoverCardLight: ' rgba(30, 41, 59, 0.05);',

        // Button Colors
        buttonBackground: '#4CAF50', // Green (Adjust to a more suitable color)
        buttonHover: '#45A049', // Darker Green (Adjust to a more suitable color)

        // Box Shadows
        boxShadowLight: 'rgba(0, 0, 0, 0.1)', // Light Grey shadow
        boxShadowDark: 'rgba(0, 0, 0, 0.6)', // Dark Grey shadow
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      screens: {
        xs: '431px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        mxs: { max: '431px' },
        msm: { max: '640px' },
        mmd: { max: '768px' },
        mlg: { max: '1024px' },
        mxl: { max: '1280px' },
        m2xl: { max: '1536px' },
        xsm: { min: '431px' },
        smm: { min: '640px' },
        mdm: { min: '768px' },
        lgm: { min: '1024px' },
        xlm: { min: '1280px' },
        '2xlm': { min: '1536px' },
      },
      container: {
        center: true,
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-logical'),
    require('nightwind'),
  ],
};
