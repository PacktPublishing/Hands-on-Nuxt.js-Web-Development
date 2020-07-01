'use strict'

import queryString from 'query-string'

const cookies = process.client ? require('js-cookie') : undefined

export default {
  async login (context, { username, password }) {
    const { data } = await this.$axios.$post('/api/public/login/local', {
      username,
      password
    })

    // saving token in cookie for server rendering
    cookies.set('auth', data)

    // mutating to store for client rendering
    context.commit('setAuth', data)
  },

  async getGoogleUrl (context) {
    // Redirect the route.
    // this.$router.push('/about')

    const { data } = await this.$axios.$get('/api/public/login/google/url')
    window.location.replace(data)
  },

  async loginWithGoogle (context, query) {
    // Parse the query string.
    const parsed = queryString.parse(query)

    // Take the code only from the string.
    const { data } = await this.$axios.$get('/api/public/login/google/me', {
      params: {
        code: parsed.code
      }
    })

    // Redirect if signup is required.
    if (data.message === 'signup required') {
      // Put the object into storage.
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
      // https://stackoverflow.com/a/2010948/413225
      localStorage.setItem('user', JSON.stringify(data.user))
      this.$router.push({ name: 'signup' })
    } else {
      // saving token in cookie for server rendering
      cookies.set('auth', data)

      // mutating to store for client rendering
      context.commit('setAuth', data)
    }
  },

  logout ({ commit }) {
    // Delete the client side cookie: auth.
    cookies.remove('auth')

    // Remove data from the state.
    commit('setAuth', null)
  }
}
