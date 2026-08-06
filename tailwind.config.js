/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: '#E4633A',
        'orange-soft': '#FA7A50',
        green: '#5F8F3E',
        'green-soft': '#73A94A',
        paper: '#f4f2ea',
        'paper-2': '#ece9dd',
        paper2: '#ece9dd',
        card: '#fbfaf4',
        'cream-hi': '#fffdf5',
        ink: '#1c1b16',
        inksoft: '#4a4841',
        'ink-soft': '#4a4841',
        muted: '#8a877b',
        forest: '#2C7A1E',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '22px',
        lg: '30px',
      },
    },
  },
  plugins: [],
};
