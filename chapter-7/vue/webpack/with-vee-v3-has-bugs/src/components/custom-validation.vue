<template>
  <div>
    <h2>Custom Validation</h2>
    <form v-on:submit.prevent="checkForm" action="/" method="post" id="form" novalidate="true">

      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>

      <h3>Modifiers</h3>

      <p>
        <label for="name">Name</label>
        <input v-model.lazy="form.name" type="text" name="name">
        {{ form.name }}
      </p>

      <p>
        <label for="email">Email</label>
        <input v-model.trim="form.email" type="email" name="email">
      </p>

      <p>
        <label for="age">Age</label>
        <input v-model.number="form.age" type="number" name="age" min="0">
      </p>

      <p>
        <label class="label">Message</label>
        <textarea class="textarea" placeholder="Message" name="message" v-model.trim="form.message" cols="40" rows="8"></textarea>
      </p>

      <h3>Dynamic options</h3>

      <p>
        <label for="movie">Favorite Movie</label>
        <select v-model="form.movie" name="movie">
          <option v-for="option in options.movies" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
      </p>

      <h3>Multi Select</h3>

      <p>
        <label class="label">Multi Select</label>
        <select v-model="form.multiSelect" name="multiple[]" multiple>
          <option>one</option>
          <option>two</option>
          <option>three</option>
        </select>
      </p>

      <h3>Value Bindings</h3>

      <p>
        <label class="label">Subscribe</label>
        <input type="checkbox" name="subscribe" v-model="form.subscribe" true-value="yes" false-value="no"> {{ form.subscribe }}
      </p>

      <p>
        <label class="label">One</label>
        <input type="radio" name="picked" v-bind:value="one" v-model="form.picked">
        <label class="label">Two</label>
        <input type="radio" name="picked" v-bind:value="two" v-model="form.picked">
      </p>

      <p>
        <label class="label">Select Options</label>
        <select v-model="form.selected">
          <!-- inline object literal -->
          <option v-bind:value="{ number: 123 }">123</option>
        </select>
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
      errors: [],
      one: "ONE",
      two: "TWO",
      form: {
        name: null,
        age: null,
        email: null,
        movie: null,
        message: null,
        subscribe: 'no',
        picked: null,
        selected: null,
        multiSelect: ['one', 'three'],
      },
      options: {
        movies: [
          { value: 'Star Wars', text: "Star Wars"},
          { value: 'Vanilla Sky', text: "Vanilla Sky"},
          { value: 'Atomic Blonde', text: "Atomic Blonde"}
        ]
      }
    }
  },
  methods: {
    checkForm (e) {
      this.errors = []
      if (!this.form.name) {
        this.errors.push('Name required.')
      }
      if (!this.form.email) {
        this.errors.push('Email required.');
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push('Valid email required.');
      }
      if (!this.errors.length) {
        this.processForm()
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    processForm () {
      // alert('Processing!')
      var form = document.getElementById('form')
      var formData = new FormData(form)
      // formData.append('subscribe', this.form.subscribe)

      for (var key in this.form) {
        formData.append(key, this.form[key]);
      }

      axios.post('../server.php', formData)
      .then((response) => {
        // success callback
        console.log(response.data)
      }, (response) => {
        // error callback
      })
    }
  }
}
</script>

<style>
/** empty */
</style>
