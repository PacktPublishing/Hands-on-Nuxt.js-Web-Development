<template>
  <ul>
    <li v-for="user in users" v-bind:key="user.id">
      <nuxt-link :to="`users/${user.id}`">
        {{ user.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData () {
    let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    return { users: data }
  }
}
</script>
