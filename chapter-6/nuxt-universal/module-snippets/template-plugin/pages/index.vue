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
    const getUsers = await context.app.$getUsers()
    return {
      users: getUsers.data
    }
  },
  async mounted () {
    const getUsers = await this.$getUsers()
    console.log(getUsers.data)
  }
}
</script>

<style>
/** empty */
</style>
