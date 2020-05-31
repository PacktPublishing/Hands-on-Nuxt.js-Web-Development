import Vue from 'vue'
import Sample from '~/components/global/sample-1.vue'

Vue.component('sample-1', Sample)
Vue.component('sample-2', {
  // https://vuejs.org/v2/guide/render-function.html
  render (createElement) {
    return createElement('p', 'A message from sample global component 2.')
  },
  mounted () {
    console.log('mounted in global component sample 2')
  }
})
