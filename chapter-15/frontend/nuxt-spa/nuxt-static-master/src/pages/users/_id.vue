<template>
  <div>
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
    <p>{{ user.phone }}</p>
    <router-link to="/users">&larr; go back</router-link>
  </div>
</template>

<script>
import { api } from '~/plugins/axios'

export default {
  async asyncData({ params }) {
    const { data: user } = await api.get(`/users/${params.id}`)
    return { user }
  },

  head() {
    return {
      title: `${this.user.name}`
    }
  }
}
</script>
