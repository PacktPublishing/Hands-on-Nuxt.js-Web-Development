'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import Routes from './routes'

// Install router plugins.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
// https://github.com/vuejs/vue-router
Vue.use(VueRouter)

// Create the router.
const router = new VueRouter({
  routes: Routes
})

export default router
