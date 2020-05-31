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

    // Add a component or directive to your plugin, so it will be installed globally to your project.
    // http://optimizely.github.io/vuejs.org/api/global-methods.html
    Vue.directive('custom-directive', {
      bind (el, binding, vnode, oldVnode) {
        // some logic ...
      }
    })
  }
}
