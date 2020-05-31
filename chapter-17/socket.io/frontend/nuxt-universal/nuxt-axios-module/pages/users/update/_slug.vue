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

    <nuxt-link :to="{ path: '/users/' + this.slug }">
      Back
    </nuxt-link>

    <nuxt-link to="/users">
      Users
    </nuxt-link>

  </div>

</template>

<script>
export default {
  data () {
    return {
      error: null,
      message: null,
      id: '',
      name: '',
      slug: ''
    }
  },
  async asyncData ({ params, error, $axios }) {
    try {
      let { data } = await $axios.get('/api/users/' + params.slug)
      let user = data.data
      return {
        id: user.id,
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
        const payload = {
          name: this.name,
          slug: this.slug,
          id: this.id
        }
        let { data } = await this.$axios.put('/api/users/user', payload)
        let result = data.data
        if (result) {
           this.message = 'Update OK'
        }
      } catch (error) {
        let errorData = error.response.data
        this.error = errorData.message
      }
    },
    cancel () {
      this.$router.push('/users/' + this.slug)
    }
  }
}
</script>

<style scoped>
/** empty */
</style>
