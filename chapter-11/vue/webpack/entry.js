'use strict'

// Import babel/polyfill.
// https://babeljs.io/docs/en/babel-polyfill/#usage-in-node--browserify--webpack
// Installation
// npm install --save @babel/polyfill
// Because this is a polyfill (which will run before your source code), we need it to be a dependency, not a devDependency
import "@babel/polyfill/noConflict"

import Vue from 'vue/dist/vue.js'
import Meta from 'vue-meta'

import App from './components/app.vue'
import store from './store'
import router from './router'

// Install vue meta plugins.
// https://github.com/nuxt/vue-meta
Vue.use(Meta)

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
  store,
  components: {
    App
  }
})
