'use strict'

// https://github.com/avajs/ava/blob/master/docs/recipes/babel.md
// https://github.com/avajs/ava/issues/1767#issuecomment-381010437
require('@babel/register')({
  babelrc: false,
  presets: ['@babel/preset-env']
})
