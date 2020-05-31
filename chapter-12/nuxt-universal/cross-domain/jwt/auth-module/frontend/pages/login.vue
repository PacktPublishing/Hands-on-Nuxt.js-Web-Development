<template>
  <!-- row -->
  <div class="row">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <!-- cell -->
        <div class="large-6 cell">

          <div v-if="!$store.state.auth.user">
            <h1>Please login to see the secret content</h1>
            <form v-on:submit.prevent="login">
              <p v-if="formError" class="error">{{ formError }}</p>
              <p>To login, use <b>demo</b> as username and <b>123123</b> as password.</p>
              <p>Username: <input v-model="formUsername" type="text" name="username"></p>
              <p>Password: <input v-model="formPassword" type="password" name="password"></p>
              <button class="button" type="submit">Login</button>
            </form>

            <button v-on:click="loginWithGoogle">Google Login</button>
            <button v-on:click="loginWithGitHub">GitHub Login</button>
          </div>

          <div v-else>
            <h1>Hello {{ $store.state.auth.user.name }}!</h1>
            <p>I am the secret content, I am shown only when the user is connected.</p>
            <p>You can also refresh this page, you'll still be connected!</p>
            <button v-on:click="logout">Logout</button>
          </div>
          <p>
            <NuxtLink to="/secret">
              Super secret page
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
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },
  methods: {
    async login() {
      try {
        // To do a password based login by sending credentials in request body as a JSON object:
        // https://auth.nuxtjs.org/schemes/local.html#usage
        await this.$auth.loginWith('local', {
          data: {
            username: this.formUsername,
            password: this.formPassword
          }
        })
      } catch (error) {
        let errorData = error.response.data
        this.formError = errorData.message
      }
    },
    async loginWithGoogle() {
      try {
        //https://auth.nuxtjs.org/providers/google.html#google
        await this.$auth.loginWith('google')
      } catch (error) {
        let errorData = error.response.data
        this.formError = errorData.message
      }
    },
    async loginWithGitHub() {
      try {
        // https://auth.nuxtjs.org/providers/github.html#usage
        await this.$auth.loginWith('github')
      } catch (error) {
        let errorData = error.response.data
        this.formError = errorData.message
      }
    },
    async logout() {
      this.$auth.logout()
    }
  },
  async mounted () {
    // Handle hash when google sends back bunch of stuff.
    let href = window.location.href
    let hash = window.location.hash

    // Log in the server with google code.
    if (hash) {
      try {
        await this.$store.dispatch('loginWithGoogle', hash)
      } catch (error) {
        let errorData = error.response.data
        this.formError = errorData.message
      }
    }

    // Remove query string value from address bar.
    // https://stackoverflow.com/a/54998973/413225
    // https://stackoverflow.com/a/22753103/413225
    let uri = window.location.toString()
    if (uri.indexOf("#") > 0) {
      let clean_uri = uri.substring(0, uri.indexOf("#"))
      window.history.replaceState({}, document.title, clean_uri)
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
