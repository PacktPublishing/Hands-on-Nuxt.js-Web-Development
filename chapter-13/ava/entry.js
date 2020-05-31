'use strict'

// Import babel/polyfill.
// https://babeljs.io/docs/en/babel-polyfill/#usage-in-node--browserify--webpack
// Installation
// npm install --save @babel/polyfill
// Because this is a polyfill (which will run before your source code), we need it to be a dependency, not a devDependency
import "@babel/polyfill/noConflict"

import Vue from 'vue/dist/vue.js'

import App from './components/app.vue'
import router from './router'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
