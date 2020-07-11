<template>
  <div class="container">
    <div v-if="!$store.state.user">
      <h1>Please login to see the secured content</h1>
      <form @submit.prevent="login">
        <p v-if="error" class="error">
          {{ error }}
        </p>
        <p><b>Note that the age must be over 18.</b></p>
        <p>Name: <input v-model="name" type="text" name="name"></p>
        <p>Age: <input v-model="age" type="number" name="age"></p>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
    <div v-else>
      <h1>Hello {{ $store.state.user.name }}!</h1>
      <p>I am the secured content, I am shown only when the user is connected.</p>
      <p>You can also refresh this page, you'll still be connected!</p>
      <button @click="logout">
        Logout
      </button>
    </div>
    <p>
      <router-link to="/secured">secured page</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      name: '',
      age: ''
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          name: this.name,
          age: this.age
        })
        this.name = ''
        this.age = ''
        this.error = null
        // this.$router.push({ name: `bar` })
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
  mounted() {
    // Keep this for dev.
    // localStorage.removeItem('user')
  },
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
