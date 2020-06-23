<template>
  <div>
    <p>{{ number }}</p>
    <p>
      <button v-on:click="multiply">x 2</button>
      <button v-on:click="divide">/ 2</button>
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    number: 1
  },
  mutations: {
    multiply: state => state.number = state.number * 2,
    divide: state => state.number = state.number / 2
  }
})

export default {
  // data() {
  //   return {
  //     number: store.state.number
  //   }
  // },
  computed: {
    number () {
      return store.state.number
    }
  },
  methods: {
    multiply () {
      store.commit('multiply')
    },
    divide () {
      store.commit('divide')
    }
  }
}
</script>

<style>
/** empty */
</style>
