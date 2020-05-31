'use strict'

// https://vuejs.org/v2/guide/plugins.html
// https://vuejs.org/v2/guide/plugins.html#Writing-a-Plugin
// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install (Vue, options) {
    if (options === undefined) {
      options = {}
    }

    // ES6 way of const language = options.language
    let { language } = options

    // Language options.
    let languages = {
      'EN': 'Hello!', // English
      'ES': 'Hola!', // Spanish
      'DE': 'Guten Tag!' // DEutsch (German)
    }

    // Set default.
    if (language === undefined) {
      language = 'EN'
    }

    // Add an instance method that can be used inside of a Vue component.
    Vue.prototype.$greet = (name) => {
      return  languages[language] + ' ' + name
    }

    // Add an instance property.
    // https://codegolf.stackexchange.com/questions/146544/hello-world-in-multiple-languages
    Vue.prototype.$message = 'こんにちは世界！' // Hello World in Japanese.
  }
}

// https://dev.to/nkoik/writing-a-very-simple-plugin-in-vuejs---example-8g8
// https://codeburst.io/creating-a-basic-vue-plugin-a-quick-and-practical-example-cb56fa9a7d09
