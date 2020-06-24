<template>
  <div>
    <ul>
      <li v-for="(user, index) in users" v-bind:key="user.id">
        {{ user.name }}
        <button class="button" v-on:click="removeUser(user.id)">Remove</button>
      </li>
    </ul>
    <button class="button" v-on:click="reloadUsers" v-if="Object.keys(this.$store.state.users.list).length == '0'">Reload</button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
  // fetch ({ store, params }) {
  //   return axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then((res) => {
  //     store.commit('users/setUsers', res.data)
  //   })
  // },
  // async fetch ({ store, params }) {
  //   let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   store.dispatch('users/setUsers', data)
  // },
  async fetch () {
    // 'this' can be access inside fetch method.
    // console.log(this)
    // Access store via this.$nuxt.context.
    const { store } = this.$nuxt.context
    await store.dispatch('users/getUsers')
  },
  computed: {
    ...mapState ('users', {
      users (state) {
        return state.list
      }
    })
  },
  methods: {
    ...mapActions('users', {
      removeUser: 'removeUser',
      reloadUsers: 'getUsers'
    })
    // removeUser (id) {
    //   this.$store.commit('users/removeUser', id)
    // }
  }
}
</script>

<style>
/** empty */
</style>
