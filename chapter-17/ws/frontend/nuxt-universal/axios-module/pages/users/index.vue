<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" v-bind:key="user.uuid">
        <nuxt-link :to="'/users/' + user.slug">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul>
    <nuxt-link to="/users/add">
      Add New
    </nuxt-link>
  </div>
</template>

<script>

export default {
  async asyncData ({ error, $axios }) {
    try {
      let { data } = await $axios.get('/api/users')
      return {
        users: data.data
      }
    } catch (err) {
      let data = err.response.data
      return error({
        statusCode: data.status,
        message: data.message
      })
    }
  },
  head () {
    return {
      title: 'Users',
    }
  },
  mounted () {
    // You do not need to include the ws library in you html. Most modern
    // browsers have support for WebSockets built in so there is no need for a
    // client side library.

    // There is no library to include in your html with this module. Modern
    // browsers support web sockets out of the box so what you need to do is
    // write the javascript code which connects to your server and acts upon the
    // messages you send back and forth between the server and browser.
    const ws = new WebSocket('ws://localhost:3030')
    ws.onmessage = event => {
      // console.log(this.users)
      // console.log(JSON.parse(event.data))

      var data = JSON.parse(event.data)

      // Prepend the new user at the beginning of the array.
      if(data.old_val === null && data.new_val !== null) {
        this.users.unshift(data.new_val)
      }

      // Pop off the deleted user.
      if(data.new_val === null && data.old_val !== null) {
        var id = data.old_val.id
        // Find index of the deleted item.
        var index = this.users.map(el => {
          return el.id
        }).indexOf(id)
        this.users.splice(index, 1)
      }

      // Update the current user.
      if(data.new_val !== null && data.old_val !== null) {
        var id = data.new_val.id
        // Another method finding index of an item.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
        // var index = array.findIndex(function(item) {return item.id === id})
        var index = this.users.findIndex(item => item.id === id)
        this.users.splice(index, 1, data.new_val)
      }
    }
  }
}
</script>

<style>
/** empty */
</style>
