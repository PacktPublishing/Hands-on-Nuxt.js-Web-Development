<template>

  <div>

    <h1>
      Delete User
    </h1>

    <p v-if="error">{{ error }}</p>
    <p>Name: {{ name }}</p>
    <p>Slug: {{ slug }}</p>
    <button v-on:click="remove">Delete</button>
    <button v-on:click="cancel">Cancel</button>

    <nuxt-link :to="{ path: '/users/' + this.id }">
      Back
    </nuxt-link>

    <nuxt-link to="/users">
      Users
    </nuxt-link>

  </div>

</template>

<script>
import axios from '~/plugins/axios-api'

export default {
  data() {
    return {
      error: null,
      id: '',
      name: '',
      slug: ''
    }
  },
  async asyncData ({ params, error }) {
    try {
      let { data } = await axios.get('/api/users/' + params.id)
      let user = data.data
      return {
        id: user._id,
        name: user.name,
        slug: user.slug
      }
    } catch (err) {
      let data = err.response.data
      return error({
        statusCode: data.status,
        message: data.message
      })
    }
  },
  methods: {
    async remove () {
      this.error = null
      console.log('this.id =', this.id)
      try {
        let payload = {
          id: this.id
        }
        let { data } = await axios.delete('/api/user/', {
          data: payload
        })
        let result = data.data
        if (result.ok === 1) {
           this.$router.push('/users/')
        }
      } catch (error) {
        let errorData = error.response.data
        this.error = errorData.message
      }
    },
    cancel () {
      this.$router.push('/users/' + this.id)
    }
  }
}
</script>

<style scoped>
/** empty */
</style>
