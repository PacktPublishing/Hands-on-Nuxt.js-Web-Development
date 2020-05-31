<template>
  <div v-if="user">
    <h1>
      {{ user.name }}
    </h1>
    <p>tel: {{ user.phone }}</p>
    <p>www: {{ user.website }}</p>
    <nuxt-link to="/users">
      Users
    </nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'id',
  async asyncData ({ params, error }) {
    try {
      let { data } = await axios.get('https://jsonplaceholder.typicode.com/users/' + params.id)
      return {
        user: data
      }
    } catch (e) {
      return error({
        statusCode: 404,
        message: 'User not found'
      })
    }
  },
  head () {
    return {
      title: `User: ${this.user.name}`
    }
  }
}
</script>

<style scoped>
/** empty */
</style>
