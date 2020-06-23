'use strict'

import Vue from 'vue'
import App from './app.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    fruits: [
      { name: 'strawberries', type: 'berries' },
      { name: 'orange', type: 'citrus' },
      { name: 'lime', type: 'citrus' }
    ]
  },
  getters: {
    getCitrus: state => {
      return state.fruits.filter(fruit => fruit.type === 'citrus')
    },
    countCitrus: (state, getters) => {
      return getters.getCitrus.length
    },
    getFruitByName: (state, getters) => (name) => {
      return state.fruits.find(fruit => fruit.name === name)
    }
  }
})

new Vue({
  el: '#app',
  template: '<App/>',
  store,
  components: {
    App
  }
})
