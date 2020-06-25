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
import axios from '~/plugins/axios-api'

export default {
  // name: 'id',
  async asyncData ({ params, error }) {
    // return axios.get('/api/users/' + params.id)
    //   .then((res) => {
    //     return { user: res.data.data }
    //   })
    //   .catch((e) => {
    //     error({ statusCode: 404, message: 'User not found' })
    //   })

    try {
      let { data } = await axios.get('/api/users/' + params.id)
      return {
        user: data.data
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
