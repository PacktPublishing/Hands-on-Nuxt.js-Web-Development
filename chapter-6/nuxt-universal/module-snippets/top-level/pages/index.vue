<template>
  <div>
    <h1>Home page</h1>
    <p>Hello World!</p>
    <ul>
      <li v-for="user in users">
        {{ user.name }}
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const data = await context.$axios.$get('/api/users')
    return {
      users: data
    }
  }
}
</script>

<style>
/** empty */
</style>
