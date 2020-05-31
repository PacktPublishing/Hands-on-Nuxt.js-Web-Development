'use strict'

// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install (Vue, options) {
    if (options === undefined) {
      options = {}
    }

    // ES6 way of const someOption = options.someOption
    const { someOption } = options

    // Add `Vue.mixin()` to inject options to all components.
    Vue.mixin({
      // Add component lifecycle hooks or properties.
      created () {
        console.log('Hello from created hook!')
      }
    })
  }
}
