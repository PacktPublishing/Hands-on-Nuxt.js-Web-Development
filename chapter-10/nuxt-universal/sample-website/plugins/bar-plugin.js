'use strict'

// https://vuejs.org/v2/guide/plugins.html
// This exports the plugin object.
export default {
  install (Vue, options) {
    const { someOption } = options

    // Add an instance method that can be used inside of a Vue component.
    Vue.prototype.$myBarServerMethod = (string) => {
      return 'This is a bar example: ' + string + ' ' + someOption
    }

    // Add an instance property.
    Vue.prototype.$myBarServerProperty = 'bar'
  }
}
