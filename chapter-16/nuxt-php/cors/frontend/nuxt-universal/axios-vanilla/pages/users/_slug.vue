<template>

  <div v-if="user">

    <h1>
      User
    </h1>

    <h2>
      {{ user.name }}
    </h2>

    <nuxt-link :to="'/users/update/' + user.slug">
       [ udpate ]
    </nuxt-link>
    <nuxt-link :to="'/users/delete/' + user.slug">
     [ Delete ]
    </nuxt-link>

    <br/>

    <nuxt-link to="/users">
      Users
    </nuxt-link>

  </div>

</template>

<script>
// import axios from '~/plugins/axios-api'

export default {
  async asyncData ({ params, error, $axios }) {
    try {
      let { data } = await $axios.get('/users/' + params.slug)
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
