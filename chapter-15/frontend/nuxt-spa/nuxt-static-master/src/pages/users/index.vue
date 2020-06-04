<template>
  <div>
    <h2>Users list</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        <nuxt-link :to="{ path: `/users/${user.id}` }">{{ user.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { api } from '~/plugins/axios'

export default {
  async asyncData() {
    const { data: users } = await api.get('/users')
    return { users }
  },

  head: {
    title: 'Users'
  }
}
</script>
