<template>
  <div>
    <h1 class="text-center">Users</h1>
    <ul class="align-center menu vertical">
      <li v-for="user in users" v-bind:key="user.slug">
        <nuxt-link :to="'users-query?slug=' + user.slug">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
    <p>{{ user }}</p>

  </div>
</template>

<script>
// import axios from '~/plugins/axios-api'

export default {
  async asyncData ({ query, error, $axios }) {
    console.log('query =', query)
    var user = null
    if (Object.keys(query).length > 0) {
      try {
        let { data } = await $axios.get('/users/' + query.slug)
        user = data.data
      } catch (err) {
        let data = err.response.data
        return error({
          statusCode: data.status,
          message: data.message
        })
      }
    }

    // console.log('server once and client side axios.defaults.baseURL =', axios.defaults.baseURL)
    try {
      let { data } = await $axios.get('/users')
      return {
        users: data.data,
        user: user
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
  },
  watchQuery: ['slug'] // or 'true' for all queries.
}
</script>

<style>
/** empty */
</style>
