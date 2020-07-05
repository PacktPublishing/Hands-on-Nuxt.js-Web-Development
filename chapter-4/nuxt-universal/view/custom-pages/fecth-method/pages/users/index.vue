<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" v-bind:key="user.id">
        <nuxt-link :to="`users/${user.id}`">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return { users: [] }
  },
  async fetch () {
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.users = data
  }
}
</script>
