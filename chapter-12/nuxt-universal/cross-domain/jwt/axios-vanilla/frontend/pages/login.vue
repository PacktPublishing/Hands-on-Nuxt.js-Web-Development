<template>
  <!-- row -->
  <div class="row">
    <div class="grid-container">
      <div class="grid-x grid-padding-x">

        <!-- cell -->
        <div class="large-6 cell">

          <h1>Please login to see the secret content</h1>
          <form v-if="!$store.state.auth" v-on:submit.prevent="login">
            <p v-if="formError" class="error">{{ formError }}</p>
            <p>To login, use <b>demo</b> as username and <b>demo</b> as password.</p>
            <p>Username: <input v-model="formUsername" type="text" name="username"></p>
            <p>Password: <input v-model="formPassword" type="password" name="password"></p>
            <button class="button" type="submit">Login</button>
          </form>
          <div v-else>
            <h2>Hello {{ $store.state.auth.user.name }}!</h2>
            <p>I am the secret content, I am shown only when the user is connected.</p>
            <p>You can also refresh this page, you'll still be connected!</p>
            <button class="button" v-on:click="logout">Logout</button>
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
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (error) {
        let errorData = error.response.data
        this.formError = errorData.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (error) {
        let errorData = error.response.data
        this.formError = errorData.message
      }
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
