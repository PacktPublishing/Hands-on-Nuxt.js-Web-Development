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
export default {
  async asyncData ({ $axios, error }) {
    console.log('server once and client side $axios.defaults.baseURL =', $axios.defaults.baseURL)
    try {
      let { data } = await $axios.$get('/api/users')
      return {
        users: data
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
