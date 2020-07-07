<template>
  <!-- row -->
  <div class="row">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <!-- cell -->
        <div class="large-6 cell">

          <h1 v-if="!$store.state.auth">Please login to see the secured content</h1>
          <form v-if="!$store.state.auth" v-on:submit.prevent="login">
            <p v-if="error" class="error">{{ error }}</p>
            <p>To login, use <b>demo</b> as username and <b>demo</b> as password.</p>
            <p>Username: <input v-model="username" type="text" name="username"></p>
            <p>Password: <input v-model="password" type="password" name="password"></p>
            <button class="button" type="submit">Login</button>
          </form>
          <div v-else>
            <h1>Hello {{ $store.state.auth.user.username }}!</h1>
            <p>I am the secured content, I am shown only when the user is connected.</p>
            <p>You can also refresh this page, you'll still be connected!</p>
            <button class="button" v-on:click="logout">Logout</button>
          </div>
          <p>
            <NuxtLink to="/secured">
              Super secured page
            </NuxtLink>
          </p>

        </div>
        <!-- cell -->

        <div class="large-6 cell">
          {{ $store.state }}
        </div>

      </div>
    </div>

  </div>
  <!-- row -->
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
  },
  mounted () {
    // Use localstorage to set the takon back when the browser is refreshed.
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
    // if (localStorage.getItem('jwt')) {
    //   const jwt = localStorage.getItem('jwt')
    //   this.$store.dispatch('setToken', jwt)

    //   // Remove all saved data from localStorage
    //   // localStorage.clear()
    // }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
