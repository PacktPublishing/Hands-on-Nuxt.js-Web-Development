<template>
  <div>
    <div id="demo">
      First Name: <input :value="user.firstname" @input="updateField('firstname', $event.target.value)"/> <br/>
      Last Name: <input :value="user.lastname" @input="updateField('lastname', $event.target.value)" /> <br/>
      Message: <input :value="user.message" @input="updateMessage">

      <p>
        v-model (error): <br/>
        <input v-model="user.message" />
      </p>

      <p>
        v-model (getter & setter): <br/>
        <input v-model="message" />
      </p>

      <p>
        Firstname: {{ user.firstname }}<br/>
        Lastname: {{ user.lastname }}<br />
        Message: {{ user.message }}
      </p>
      <p>
        User object: {{ user }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    user () {
      return this.$store.state.user
    },
    message: {
      get () {
        return this.$store.state.user.message
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    }
  },
  methods: {
    updateMessage (e) {
      this.$store.commit('updateMessage', e.target.value)
    },

    updateField(field, value) {
      this.$store.commit('updateUser', {
        [field]: value
      })
    },
  }
}
</script>

<style>
/** empty */
</style>
