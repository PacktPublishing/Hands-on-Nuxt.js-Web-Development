// https://nuxtjs.org/guide/plugins#name-conventional-plugin
import Vue from 'vue'
import PluginSample from './bar-plugin'

Vue.use(PluginSample, {
  someOption: 'bar server only!'
})
