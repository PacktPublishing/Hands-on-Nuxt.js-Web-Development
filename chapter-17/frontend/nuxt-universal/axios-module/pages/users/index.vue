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
// import io from 'socket.io-client'
// const socket = io('http://localhost:4000')

import socket from '~/plugins/socket.io'

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
    socket.on('user.changefeeds', data => {
      // console.log(this.users)

      // Make sure there are new_val & old_val in data.
      if (data.new_val === undefined && data.old_val === undefined) {
        return
      }

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

    })
  }
}
</script>
