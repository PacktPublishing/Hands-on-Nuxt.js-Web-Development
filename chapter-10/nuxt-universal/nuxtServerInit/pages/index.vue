<template>
      <div>

        <div v-if="!$store.state.authUser">

          <h1>Please login to see the secret content</h1>
          <form  v-on:submit.prevent="login">
            <p v-if="error" class="error">{{ error }}</p>
            <p>To login, use <b>demo</b> as username and <b>demo</b> as password.</p>
            <p>Username: <input v-model="username" type="text" name="username"></p>
            <p>Password: <input v-model="password" type="password" name="password"></p>
            <button class="button" type="submit">Login</button>
          </form>

       </div>

        <div v-else>
          <h2>Hello {{ $store.state.authUser.username }}!</h2>
          <p>I am the secret content, I am shown only when the user is connected.</p>
          <p>You can also refresh this page, you'll still be connected!</p>
          <button class="button" v-on:click="logout">Logout</button>

          <p>
            <NuxtLink to="/secret">
              Super secret page
            </NuxtLink>
          </p>
        </div>

        <div>
          {{ $store.state }}
        </div>
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
