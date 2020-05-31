'use strict'

const cookies = process.client ? require('js-cookie') : undefined
import queryString from 'query-string'

export default {
  async loginWithGoogle  (context, hash) {
    // Parse the hash string.
    const parsed = queryString.parse(hash)

    // Take the access_token only from the string.
    const { data } = await this.$axios.$get('http://localhost:3030/public/login/google/me', {
      params: {
        access_token: parsed.access_token
      }
    })

    // Redirect if signup is required.
    if (data.message === 'signup required') {
      // Put the object into storage.
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
      // https://stackoverflow.com/a/2010948/413225
      localStorage.setItem('user', JSON.stringify(data.user))
      this.$router.push({ name: 'signup'})
    } else {
      // this.$router.push({ name: 'about'})
      window.location.replace('http://localhost:3000/login')
    }
  }
}

