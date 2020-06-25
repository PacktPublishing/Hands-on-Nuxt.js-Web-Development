<template>
  <div>
    <h1>Users</h1>
    <p>{{ id }}</p>
    <ul>
      <li>
        <nuxt-link :to="'users?id=1'">1</nuxt-link>
        <nuxt-link :to="'users?id=2'">2</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData ({ query }) {
    return { id: query.id }
  },
  watchQuery: ['id']
}
</script>
