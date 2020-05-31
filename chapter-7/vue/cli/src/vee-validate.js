import {
  extend,
  // localize
} from 'vee-validate'
import {
  min,
  required,
  email,
  regex
} from 'vee-validate/dist/rules'
// import en from 'vee-validate/dist/locale/en.json'

// Install rules
// extend('required', required)
// extend('min', min)
// extend('email', email)
// extend('regex', regex)

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('min', {
  ...min,
  message: 'At least {length} letters'
})

extend('email', {
  ...email,
  message: 'This field must be a valid email'
})

extend('regex', {
  ...regex,
  validate(value) {
    // https://stackoverflow.com/questions/28265381/regex-that-does-not-match-any-html-tag
    var pattern = /^(?!.*<[^>]+>).*/
    return pattern.test(value)
  },
  message: 'No html tags allowed'
})

// Install messages
// localize({
//   en
// })
