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
    },
  },
  plugins: [],
};
