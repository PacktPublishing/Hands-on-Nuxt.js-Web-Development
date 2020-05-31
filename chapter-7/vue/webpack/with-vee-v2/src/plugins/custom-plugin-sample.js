'use strict'

// https://vuejs.org/v2/guide/plugins.html
// https://vuejs.org/v2/guide/plugins.html#Writing-a-Plugin
// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as
  // the first argument, along with possible options
  install (Vue, options) {
    // ES6 way of const someOption = options.someOption
    const { someOption } = options

    // Add an instance method that can be used inside of a Vue component.
    Vue.prototype.$myMethod = (string) => {
      console.log('This is an example:', string)
      return 'This is an example: ' + string + ' ' + someOption
    }

    // Add a component or directive to your plugin, so it will be installed globally to your project.
    // http://optimizely.github.io/vuejs.org/api/global-methods.html
    Vue.component('custom-component', {
     // some options ...
    })
    Vue.directive('custom-directive', {
      bind (el, binding, vnode, oldVnode) {
        // some logic ...
      }
    })

    // Add `Vue.mixin()` to inject options to all components.
    Vue.mixin({
      // Add component lifecycle hooks or properties.
      created() {
        // console.log('Hello from created hook!')
      }
    })

    // Add an instance property.
    Vue.prototype.$myProperty = 'foo'
  }
}

// https://dev.to/nkoik/writing-a-very-simple-plugin-in-vuejs---example-8g8
// https://codeburst.io/creating-a-basic-vue-plugin-a-quick-and-practical-example-cb56fa9a7d09
