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
  async asyncData({ app }) {
    const { data: users } = await app.$getUsers()
    return {
      users
    }
  },
  async mounted () {
    const getUsers = await this.$getUsers()
    console.log(getUsers.data)
  }
}
</script>
