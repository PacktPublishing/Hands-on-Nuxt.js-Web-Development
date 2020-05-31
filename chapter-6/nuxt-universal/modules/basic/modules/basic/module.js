'use strict'

const { resolve } = require('path')

// https://nuxtjs.org/guide/modules#write-a-basic-module
// https://github.com/nuxt-community/module-template
export default function (moduleOptions) {
  // Combine options.
  const options = {
    ...this.options['basic'],
    ...moduleOptions
  }
  // console.log(options)
  // output:
  // {
  //   option1: false,
  //   option2: true,
  //   token: '123'
  // }

  // Add plugin to import router file path as the main template for routing
  // https://nuxtjs.org/api/internals-module-container#addplugin-template-
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'basic.js',
    options
  })
}

// const SimpleModule = function (moduleOptions) {
//   // Write your code here
//   console.log('SimpleModule')
//   console.log(moduleOptions)
// }


// export default ({ app }, inject) => {
//   inject('simpleModule', SimpleModule)
// }

// REQUIRED if publishing the module as npm package
// module.exports.meta = require('./package.json')

// export default ({ app }, inject) => {
//   console.log(inject)
//   // Set the function directly on the context.app object
//   // app.$myInjectedCtxFunctionxx = (string) => console.log('Okay, another functionxx', string)
// }
