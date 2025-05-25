// frontend/postcss.config.mjs
/** @type {import('postcss-load-config').Config} */
export default {
  plugins: {
    '@tailwindcss/postcss': {},  // tailwindcss 대신!
    autoprefixer: {},
  },
};
