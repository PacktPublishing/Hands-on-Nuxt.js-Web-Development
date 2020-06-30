<template>
  <div>
    <h1>Sign Up</h1>
    <form>
      <p>Name: <input v-model="name" type="text" name="username"></p>
      <p>Email: <input v-model="email" type="email" name="email"></p>
      <p>Username: <input v-model="username" type="text" name="username"></p>
      <p>Password: <input v-model="password" type="password" name="password"></p>
      <button class="button" type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
export default {
  name:'signup',
  data () {
    return {
      name: '',
      username: '',
      password: '',
      email: ''
    }
  },
  mounted () {
    // Retrieve the object from storage.
    var object = localStorage.getItem('user')
    var user = JSON.parse(object)
    if (user) {
      this.name = user.name.givenName + user.name.familyName
      this.email = user.emails[0].value
    }

    // Remove the localStorage item after signup.
    // localStorage.removeItem('user')
    // Or, clear all items.
    // localStorage.clear()
  }
}
</script>

<style>
/**/
</style>
