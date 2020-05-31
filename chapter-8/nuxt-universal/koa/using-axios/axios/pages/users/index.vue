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
import axios from '~/plugins/axios-api'
// console.log('this runs on server side only axios.defaults.baseURL =', axios.defaults.baseURL)

export default {
  async asyncData ({ error }) {
    // console.log('server once and client side axios.defaults.baseURL =', axios.defaults.baseURL)
    try {
      let { data } = await axios.get('/api/users')
      return {
        users: data.data
      }
    } catch (err) {
      let data = err.response.data
      return error({
        statusCode: data.status,
        message: data.message
      })
    }
  },
  head () {
    return {
      title: 'Users',
    }
  }
}
</script>

<style>
/** empty */
</style>
