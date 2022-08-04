/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    "vue",
  ],
  rules: {
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "comma-dangle": ["error", "always-multiline"],
  },
}
