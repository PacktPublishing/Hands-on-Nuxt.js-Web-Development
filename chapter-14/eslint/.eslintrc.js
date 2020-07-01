module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    // 'no-console': ["error", { allow: ["warn", "error"] }]
    // 'no-undef': ["off"],
    // 'no-unused-vars': ["off"]
    // "quotes": ["error", "double"]
  }
}
