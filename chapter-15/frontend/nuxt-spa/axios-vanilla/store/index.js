'use strict'

import cookies from 'js-cookie'
// Since we are on SPA, no need to check like this below:
// const cookies = process.client ? require('js-cookie') : undefined
// SSR only
// const cookie = process.server ? require('cookie') : undefined

export const actions = {
  // SSR only
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  // nuxtServerInit({ commit }, { req }) {
  //   if (req && req.headers && req.headers.cookie && req.headers.cookie.indexOf('auth') > -1) {
  //     let auth = cookie.parse(req.headers.cookie)['auth']
  //     // console.log('auth =', JSON.parse(auth))
  //     commit('setAuth', JSON.parse(auth))
  //   }
  // }

  nuxtClientInit({ commit }, ctx) {
    let auth = cookies.get('auth')
    if (auth) {
      commit('setAuth', JSON.parse(auth))
      console.log('From nuxtClientInit =', auth)
    }
  }
}
