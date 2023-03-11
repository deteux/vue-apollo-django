module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {},
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
