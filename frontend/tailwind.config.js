/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      fontFamily: {
        primary: 'Rockline',
      },
      boxShadow: {
        custom: '0 0 10px 2px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#4A30F2',
          secondary: '#705CF2',
          accent: '#3BBF8F',
          neutral: '#323232',
          'base-100': '#262626',
          info: '#1d4ed8',
          success: '#16a34a',
          warning: '#facc15',
          error: '#dc2626',
        },
      },
    ],
  },
};
