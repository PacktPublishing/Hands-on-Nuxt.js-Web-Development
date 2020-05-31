<template>

  <div v-if="user">

    <h1>
      User
    </h1>

    <h2>
      {{ user.name }}
    </h2>
    <nuxt-link to="/users">
      Users
    </nuxt-link>

  </div>

</template>

<script>
export default {
  // name: 'id',
  async asyncData ({ $axios, params, error }) {
    try {
      let result = await $axios.$get('/api/users/' + params.id)
      return {
        user: result.data
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
      title: `User: ${this.user.name}`
    }
  }
}
</script>

<style scoped>
/** empty */
</style>
