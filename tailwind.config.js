/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Appalachian earth tones
        'mountain-green': {
          50: '#f0f7f4',
          100: '#e0efe8',
          200: '#c2dfd1',
          300: '#a3cfba',
          400: '#85bfa3',
          500: '#4a7c59',  // Primary green
          600: '#3b6347',
          700: '#2c4a35',
          800: '#1d3123',
          900: '#0e1811',
        },
        'autumn-orange': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#d2691e',  // Warm orange
          600: '#a85416',
          700: '#7e3f0e',
          800: '#542a06',
          900: '#2a1503',
        },
        'sky-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#4682b4',  // Mountain sky blue
          600: '#386890',
          700: '#2a4e6c',
          800: '#1c3448',
          900: '#0e1a24',
        },
        'barn-red': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#b22222',  // Classic barn red
          600: '#8e1b1b',
          700: '#6b1414',
          800: '#470d0d',
          900: '#240606',
        },
        'soil-brown': {
          50: '#faf5f0',
          100: '#f5ebe0',
          200: '#ebd7c2',
          300: '#e0c3a3',
          400: '#d6af85',
          500: '#8b4513',  // Rich soil brown
          600: '#6f370f',
          700: '#53290b',
          800: '#371b07',
          900: '#1c0e04',
        },
      },
      fontFamily: {
        'display': ['Merriweather', 'Georgia', 'serif'],
        'body': ['Open Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'mountain-gradient': 'linear-gradient(180deg, #4682b4 0%, #4a7c59 100%)',
        'sunset-gradient': 'linear-gradient(90deg, #d2691e 0%, #b22222 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}