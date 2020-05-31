'use strict'

const cookie = process.server ? require('cookie') : undefined

export const actions = {
   // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    // if (req.ctx.session && req.ctx.session.user) {
    //   commit('setUser', req.ctx.session.authUser)
    // }

    var session = null
    var auth = null
    if (req.headers.cookie && req.headers.cookie.indexOf('koa:sess') > -1) {
      session = cookie.parse(req.headers.cookie)['koa:sess']
    }
    if (session) {
      auth = JSON.parse(Buffer.from(session, 'base64'))
      console.log('auth =', auth)
      commit('setAuth', auth)
    }
  }
}
