'use strict'

const cookie = process.server ? require('cookie') : undefined

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {
    if (
      req &&
      req.headers &&
      req.headers.cookie &&
      req.headers.cookie.indexOf('auth') > -1
    ) {
      const auth = cookie.parse(req.headers.cookie).auth
      // console.log('auth =', JSON.parse(auth))
      commit('setAuth', JSON.parse(auth))
    }
  }
}
