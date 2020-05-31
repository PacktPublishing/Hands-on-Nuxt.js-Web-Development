<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" v-bind:key="user.uuid">
        <nuxt-link :to="'/users/' + user.slug">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
    <nuxt-link to="/users/add">
      Add New
    </nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData ({ error, $axios }) {
    try {
      let { data } = await $axios.get('/api/users')
      return {
        users: data.data
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
      title: 'Users',
    }
  }
}
</script>

<style>
/** empty */
</style>
