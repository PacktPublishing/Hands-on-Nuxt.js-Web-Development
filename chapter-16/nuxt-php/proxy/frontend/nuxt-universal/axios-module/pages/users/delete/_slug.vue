<template>

  <div>

    <h1>
      Delete User
    </h1>

    <p>Name: {{ name }}</p>
    <p>Slug: {{ slug }}</p>

    <button v-on:click="remove">Delete</button>
    <button v-on:click="cancel">Cancel</button>

    <nuxt-link :to="{ path: '/users/' + this.slug }">
      Back
    </nuxt-link>

    <nuxt-link to="/users">
      Users
    </nuxt-link>

  </div>

</template>

<script>
import qs from 'qs'

export default {
  data() {
    return {
      error: null,
      uuid: '',
      name: '',
      slug: ''
    }
  },
  async asyncData ({ params, error, $axios }) {
    try {
      let { data } = await $axios.get('/api/users/' + params.slug)
      let user = data.data
      return {
        uuid: user.uuid,
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
      console.log('this.uuid =', this.uuid)
      try {
        let payload = {
          uuid: this.uuid
        }
        // Must use data key to send the delete data.
        // https://github.com/axios/axios/issues/736
        let { data } = await this.$axios.delete('/api/user', {
          data: qs.stringify(payload)
        })
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
      this.$router.push('/users/' + this.slug)
    }
  }
}
</script>

<style scoped>
/** empty */
</style>
