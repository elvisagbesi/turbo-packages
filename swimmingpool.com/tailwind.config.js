/* eslint-disable unicorn/prefer-module */
const { default: theme } = require('./theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  extends: '../contentlib/tailwind.config.js',
  content: [
    '../contentlib/src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  colors: {
    primary: {
      DEFAULT: theme.colors.primary.DEFAULT,
      DARK: '#001495',
      DARK_GRAY: '#323232',
      LIGHT_GRAY: '#989898',
    },
    secondary: {
      DEFAULT: theme.colors.secondary.DEFAULT,
      NAVY: '#28346c',
      OVER_NAVY: '#F99C1C',
      LAVENDER: '#ac94ec',
    },
  },
};
