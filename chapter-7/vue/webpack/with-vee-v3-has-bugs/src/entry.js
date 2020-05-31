'use strict'

// Import babel/polyfill.
// https://babeljs.io/docs/en/babel-polyfill/#usage-in-node--browserify--webpack
// Installation
// npm install --save @babel/polyfill
// Because this is a polyfill (which will run before your source code), we need it to be a dependency, not a devDependency
// import "@babel/polyfill/noConflict"
// import 'core-js'

import Vue from 'vue/dist/vue.js'
import Meta from 'vue-meta'
import VueRouter from 'vue-router'
import "./vee-validate"

// import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

import Routes from './routes'
import App from './app.vue'
import PluginSample from './plugins/custom-plugin-sample'

// Install vue meta & router plugins.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
// https://github.com/vuejs/vue-router
// https://github.com/nuxt/vue-meta
Vue.use(VueRouter)
Vue.use(Meta)

// // Add a rule.
// extend('secret', {
//   validate: value => value === 'example',
//   message: 'This is not the magic word'
// })

// extend('required', {
//   ...required,
//   message: 'This field is required'
// })

// Register vee-validate globally
// Vue.component('ValidationProvider', ValidationProvider)

// Vuetify includes errors property on its input components, you
// should rename vee-validate's errorBag name to something else.
// https://baianat.github.io/vee-validate/#configuration
// Vue.use(VeeValidate, {
//   errorBagName: 'vErrors'
// })

// Install custom plugins.
Vue.use(PluginSample, {
  someOption: 'baz'
})

// Create the router.
const router = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: Routes
})

// Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({
  el: '#app',
  router,
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Lau Tiam Kok',
    // all titles will be injected into this template
    titleTemplate: '%s | My Vue Awesome App',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { vmid: 'description', name: 'description', content: 'default description...' }
    ]
  },
  template: '<App/>',
  components: {
    App
  }
})


// new Vue({
//   router,
//   render: h => h(App)
// }).$mount("#app");
