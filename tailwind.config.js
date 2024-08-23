import { COLORS } from './src/constants/colors';
import { FONTS } from './src/constants/fonts';

// Lowercased value of the font family as the key
// and the font family as the value
const fontFamilies = Object.keys(FONTS).reduce((acc, key) => {
  acc[FONTS[key].toLowerCase()] = [FONTS[key], 'sans-serif'];
  return acc;
}, {});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: COLORS,
      fontFamily: fontFamilies,
      fontSize: {
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.375rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
