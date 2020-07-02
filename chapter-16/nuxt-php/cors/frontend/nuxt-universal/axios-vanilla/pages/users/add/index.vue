<template>

  <div>

    <h1>
      Create User
    </h1>

    <form v-on:submit.prevent="add">
      <p v-if="error">{{ error }}</p>
      <p v-if="message">{{ message }}</p>
      <p>Name: <input v-model="name" type="text" name="name"></p>
      <p>Slug: <input v-model="slug" type="text" name="slug"></p>
      <button type="submit">Add</button>
      <button v-on:click="cancel">Cancel</button>
    </form>

    <nuxt-link to="/users">
      Users
    </nuxt-link>

  </div>

</template>

<script>
import qs from 'qs'
// import axios from '~/plugins/axios-api'

export default {
  data () {
    return {
      error: null,
      message: null,
      uuid: '',
      name: '',
      slug: ''
    }
  },
  methods: {
    async add () {
      this.error = null
      this.message = null
      try {
        let { data } = await this.$axios.post('/user', qs.stringify({
          name: this.name,
          slug: this.slug
        }))
        let result = data.data
        if (result) {
           this.$router.push('/users/')
        }
      } catch (error) {
        let errorData = error.response.data
        this.error = errorData.message
      }
    },
    cancel () {
      this.$router.push('/users/')
    }
  }
}
</script>

<style scoped>
/** empty */
</style>
