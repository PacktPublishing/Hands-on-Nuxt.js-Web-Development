<template>
  <div>
    <h2>VeeValidate Validation</h2>
    <form v-on:submit.prevent="processForm" action="/" method="post" id="form" novalidate="true">

      <p>
        <label for="name">Name</label>
        <input v-model.lazy="name" type="text" name="name" v-validate="'required|min:3'" >
        <span v-show="vErrors.has('name')" class="error">{{ vErrors.first('name') }}</span>
      </p>

      <p>
        <label for="email">Email</label>
        <input v-validate="'required|email'" v-model.trim="email" name="email" type="text">
        <span v-show="vErrors.has('email')" class="error">{{ vErrors.first('email') }}</span>
      </p>

      <p>
        <label class="label">Message</label>
        <!-- https://stackoverflow.com/questions/28265381/regex-that-does-not-match-any-html-tag -->
        <textarea v-validate="{ required: true, regex: /^(?!.*<[^>]+>).*/ }" name="message" v-model.trim="message" cols="40" rows="8"></textarea>
        <span v-show="vErrors.has('message')" class="error">{{ vErrors.first('message') }}</span>
      </p>

      <p>
        <input type="submit" value="Submit">
      </p>

    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      name: null,
      email: null,
      message: null
    }
  },
  methods:{
    processForm (e) {
      // https://baianat.github.io/vee-validate/guide/events.html#changing-events-per-field
      // https://baianat.github.io/vee-validate/api/errorbag.html#api
      // https://qiita.com/nickhall/items/d1043f3f9874c90b6f8e
      this.$validator.validate().then(valid => {
        console.log(this.vErrors.count())
        if (!valid) {
          // do stuff if not valid.
          alert('Error!')
          return
        }

        alert('Processing!')
        var form = document.getElementById('form')
        var formData = new FormData(form)
        axios.post('../server.php', formData)
        .then((response) => {
          // success callback
          console.log(response.data)
        }, (response) => {
          // error callback
        })
      })
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
