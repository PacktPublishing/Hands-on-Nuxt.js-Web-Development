<template>

  <!-- row -->
  <div class="row">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <!-- cell -->
        <div class="large-shrink medium-6 cell">

          <ul>
            <li v-for="(user, index) in users" v-bind:key="user.id">
              {{ user.name }}
              <button class="button" v-on:click="removeUser(user.id)">Remove</button>
            </li>
          </ul>

        </div>
        <!-- cell -->

        <!-- cell -->
        <div class="large-auto medium-6 cell">
        </div>
        <!-- cell -->

      </div>
    </div>

  </div>
  <!-- row -->

</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  // fetch ({ store, params }) {
  //   return axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then((res) => {
  //     store.commit('users/setUsers', res.data)
  //   })
  // },
  // async fetch ({ store, params }) {
  //   let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   store.commit('users/setUsers', data)
  // },
  async fetch ({ store, params }) {
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
    removeUser (id) {
      this.$store.commit('users/removeUser', id)
    }
  }
}
</script>

<style lang="less" scoped>
/** empty */
</style>
