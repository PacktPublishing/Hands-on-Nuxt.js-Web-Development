<template>

  <div>

    <h1>
      Update User
    </h1>

    <form v-on:submit.prevent="update">
      <p v-if="error">{{ error }}</p>
      <p v-if="message">{{ message }}</p>
      <p>Name: <input v-model="name" type="text" name="name"></p>
      <p>Slug: <input v-model="slug" type="text" name="slug"></p>
      <button type="submit">Update</button>
      <button v-on:click="cancel">Cancel</button>
    </form>

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
      message: null,
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
    async update () {
      this.error = null
      this.message = null
      try {
        let { data } = await axios.put('/api/user/', {
          name: this.name,
          slug: this.slug,
          id: this.id
        })
        let result = data.data
        if (result.ok === 1) {
           this.message = 'Update OK'
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
