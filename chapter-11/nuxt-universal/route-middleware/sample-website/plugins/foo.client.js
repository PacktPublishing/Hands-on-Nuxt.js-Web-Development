// https://nuxtjs.org/guide/plugins#name-conventional-plugin
import Vue from 'vue'
import PluginSample from './foo-plugin'

Vue.use(PluginSample, {
  someOption: 'foo client only!'
})
