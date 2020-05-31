<template>
  <div class="container">
    <h1>Please login to see the secret content</h1>
    <form v-if="!$store.state.authUser" @submit.prevent="login">
      <p v-if="error" class="error">
        {{ error }}
      </p>
      <p><i>To login, use <b>demo</b> as username and <b>demo</b> as password.</i></p>
      <p>Username: <input v-model="username" type="text" name="username"></p>
      <p>Password: <input v-model="password" type="password" name="password"></p>
      <button type="submit">
        Login
      </button>
    </form>
    <div v-else>
      Hello {{ $store.state.authUser.username }}!
      <pre>I am the secret content, I am shown only when the user is connected.</pre>
      <p><i>You can also refresh this page, you'll still be connected!</i></p>
      <button @click="logout">
        Logout
      </button>
    </div>
    <p>
      <NuxtLink to="/secret">
        Super secret page
      </NuxtLink>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        })
        this.username = ''
        this.password = ''
        this.error = null
      } catch (e) {
        this.error = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.error = e.message
      }
    }
  }
}
</script>

<style>
.container {
  padding: 100px;
}
.error {
  color: red;
}
</style>
