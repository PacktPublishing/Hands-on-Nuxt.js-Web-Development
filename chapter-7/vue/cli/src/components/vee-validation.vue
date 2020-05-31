<template>
  <div>
    <ValidationObserver v-slot="{ passes }">
    <h2>VeeValidate Validation</h2>
      <form v-on:submit.prevent="passes(processForm)" novalidate="true">

        <p>
          <ValidationProvider name="name" rules="required|min:3" v-slot="{ errors }">
            <label for="name">Name</label>
            <input v-model.lazy="name" type="text" name="name">
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>
        </p>

        <p>
          <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
            <label for="email">Email</label>
            <input v-model.trim="email" name="email" type="email">
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>
        </p>

        <p>
          <!-- <ValidationProvider name="message" :rules="{ required: true, regex: /^(?!.*<[^>]+>).*/ }" v-slot="{ errors }"> -->
          <ValidationProvider name="message" rules="required|regex|min:6" v-slot="{ errors }">
            <label class="label">Message</label>
            <textarea name="message" v-model.trim="message" cols="40" rows="8"></textarea>
            <span class="error">{{ errors[0] }}</span>
          </ValidationProvider>

        </p>

        <p>
          <input type="submit" value="Submit">
        </p>

      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider
} from 'vee-validate'

export default {
  data () {
    return {
      name: null,
      email: null,
      message: null
    }
  },
  components: {
    ValidationObserver,
    ValidationProvider
  },
  methods:{
    processForm () {
      alert('Processing!')
      // eslint-disable-next-line
      console.log('Posting to the server...')
    }
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
