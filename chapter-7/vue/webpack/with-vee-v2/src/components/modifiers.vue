<template>
  <div>
    <h2>Modifiers</h2>
    <form v-on:submit.prevent="checkForm" action="/" method="post">

      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="name">Name</label>
        <input v-model.lazy="form.name" type="text">
        {{ form.name }}
      </p>

      <p>
        <label for="name">Age</label>
        <input v-model.number="form.age" type="number">
        {{ form.age }}
      </p>

      <p>
        <label for="message">Message</label>
        <textarea v-model.lazy.trim="form.message"></textarea>
        {{ form.message }}
      </p>

      <p>
        <label class="label">Subscribe</label>
        <input
          type="checkbox"
          v-model="form.subscribe"
          true-value="yes"
          false-value="no"
        >
      </p>

      <p>
        <input type="checkbox" v-model="form.books" value="On the Origin of Species">
        <label for="On the Origin of Species">On the Origin of Species</label>

        <input type="checkbox" v-model="form.books" value="A Brief History of Time">
        <label for="A Brief History of Time">A Brief History of Time</label>

        <input type="checkbox" v-model="form.books" value="The Selfish Gene">
        <label for="The Selfish Gene">The Selfish Gene</label>

        {{ form.books }}
      </p>

      <p>
        <label for="Male">Male</label>
        <input type="radio" v-model="form.gender" value="male" v-bind:value="gender.male">

        <label for="Female">Female</label>
        <input type="radio" v-model="form.gender" value="female" v-bind:value="gender.female">

        <label for="Other">Other</label>
        <input type="radio" v-model="form.gender" value="other" v-bind:value="gender.other">

        {{ form.gender }}
      </p>

      <p>
        <select v-model="form.favourite">
          <option disabled value="">Please select one</option>
          <option v-bind:value="{ title: 'On the Origin of Species' }">On the Origin of Species</option>
          <option v-bind:value="{ title: 'A Brief History of Time' }">A Brief History of Time</option>
          <option v-bind:value="{ title: 'The Selfish Gene' }">The Selfish Gene</option>
        </select>
        {{ form.favourite }}
      </p>

      <p>
        <select v-model="form.favourites" name="favourites_array[]" multiple >
          <option v-for="book in options.books" v-bind:value="book.value">
            {{ book.text }}
          </option>
          <!-- <option value="On the Origin of Species">On the Origin of Species</option>
          <option value="A Brief History of Time">A Brief History of Time</option>
          <option value="The Selfish Gene">The Selfish Gene</option> -->
        </select>
        {{ form.favourites }}
      </p>

      <p>
        <input type="submit" value="Submit">
      </p>

    </form>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  data () {
    return {
      errors: [],
      gender: {
        male: 'm',
        female: 'f',
        other: 'o',
      },
      form: {
        name: null,
        age: null,
        message: null,
        subscribe: 'no',
        books: [],
        gender: null,
        favourite: null,
        favourites: []
      },
      options: {
        books: [
          { value: { title: 'On the Origin of Species' }, text: 'On the Origin of Species', label: 'on-the-origin-of-species'},
          { value: { title: 'A Brief History of Time' }, text: 'A Brief History of Time', label: 'a-brief-history-of-time'},
          { value: { title: 'The Selfish Gene' }, text: 'The Selfish Gene', label: 'the-selfish-gene'}
        ]
      }
    }
  },
  methods:{
    checkForm (e) {
      this.errors = []
      // if (!this.form.name) {
      //   this.errors.push('Name required')
      // }
      // if (!this.form.message) {
      //   this.errors.push('Message required')
      // }
      // if (this.form.subscribe !== 'yes') {
      //   this.errors.push('Subscription required')
      // }
      // if (this.form.books.length === 0) {
      //   this.errors.push('Books required')
      // }
      // if (!this.form.gender) {
      //   this.errors.push('Gender required')
      // }
      // if (!this.form.favourite) {
      //   this.errors.push('Favourite required')
      // }
      // if (this.form.favourites.length === 0) {
      //   this.errors.push('Favourites required')
      // }
      if (!this.errors.length) {
        this.processForm(e)
      }
    },
    processForm (e) {
      var formData = new FormData(e.target)
      // Or:
      var data = qs.stringify(this.form)

      console.log(typeof this.form.age)

      axios.post('../server.php', data)
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
