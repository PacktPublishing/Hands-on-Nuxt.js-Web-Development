// https://nuxtjs.org/guide/plugins
// https://nuxtjs.org/api/configuration-plugins
// https://vuejs.org/v2/guide/plugins.html
import Vue from 'vue'
import PluginSample from './custom-plugin-sample'

Vue.use(PluginSample, {
  someOption: 'baz'
})
