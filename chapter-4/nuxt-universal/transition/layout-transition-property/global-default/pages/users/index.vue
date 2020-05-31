<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" v-bind:key="user.id">
        <nuxt-link :to="'users/' + user.id">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ error }) {
    try {
      let { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      return {
        users: data
      }
    } catch (e) {
      return error({
        statusCode: 404,
        message: e.message
      })
    }
  },
  head () {
    return {
      title: 'Users',
    }
  },
  layout: 'user'
}
</script>

<style>
/** empty */
</style>
