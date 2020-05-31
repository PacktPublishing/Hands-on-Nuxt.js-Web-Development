<template>

  <div v-if="user">

    <h1>
      User
    </h1>

    <h2>
      {{ user.name }}
    </h2>

    <nuxt-link :to="'/users/update/' + user._id">
       [ udpate ]
    </nuxt-link>
    <nuxt-link :to="'/users/delete/' + user._id">
     [ Delete ]
    </nuxt-link>

    <br/>

    <nuxt-link to="/users">
      Users
    </nuxt-link>

  </div>

</template>

<script>
import axios from '~/plugins/axios-api'

export default {
  async asyncData ({ params, error }) {
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
