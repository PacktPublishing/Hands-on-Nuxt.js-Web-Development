'use strict'

import Vue from 'vue/dist/vue.js'
import Meta from 'vue-meta'
import VueRouter from 'vue-router'

import Routes from './routes'
import App from './app.vue'
import PluginBasic from './plugins/basic'
import PluginComponent from './plugins/component'
import PluginDirective from './plugins/directive'
import PluginMixin from './plugins/mixin'

// Install vue meta & router plugins.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
// https://github.com/vuejs/vue-router
// https://github.com/nuxt/vue-meta
Vue.use(VueRouter)
Vue.use(Meta)

// Install custom plugins.
Vue.use(PluginBasic, {
  language: 'ES'
})
Vue.use(PluginComponent)
Vue.use(PluginDirective)
Vue.use(PluginMixin)

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
