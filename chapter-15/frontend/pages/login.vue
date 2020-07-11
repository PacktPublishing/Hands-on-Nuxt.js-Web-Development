<template>
  <div>

    <div>
      <h1>Please login to see the secured content</h1>
      <form v-if="!$store.state.auth" v-on:submit.prevent="login">
        <p v-if="formError" class="error">{{ formError }}</p>
        <p>To login, use <b>demo</b> as username and <b>123123</b> as password.</p>
        <p>Username: <input v-model="formUsername" type="text" name="username"></p>
        <p>Password: <input v-model="formPassword" type="password" name="password"></p>
        <button type="submit">Login</button>
      </form>
      <div v-else>
        <h2>Hello {{ $store.state.auth.user.name }}!</h2>
        <p>I am the secured content, I am shown only when the user is connected.</p>
        <p>You can also refresh this page, you'll still be connected!</p>
        <button v-on:click="logout">Logout</button>
      </div>
      <p>
        <NuxtLink to="/secured">
          Super secured page
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
      formError: null,
      formUsername: '',
      formPassword: ''
    }
  },

  head () {
    return {
      title: 'Login',
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
