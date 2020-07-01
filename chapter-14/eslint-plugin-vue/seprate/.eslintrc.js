module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'standard',
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/recommended'
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
    // https://eslint.vuejs.org/rules/max-attributes-per-line.html#vue-max-attributes-per-line
    'vue/max-attributes-per-line': 'off',
    // https://eslint.vuejs.org/rules/v-on-style.html#vue-v-on-style
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-on-style.md#wrench-options
    'vue/v-on-style': ['error', 'longform'],
    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-self-closing.md#html-normal-never-void-always
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always', // allow self-closing on void elements
        normal: 'always',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', 'always']
  }
}
