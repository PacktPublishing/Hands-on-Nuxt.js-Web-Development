'use strict'

const cookieparser = process.server ? require('cookie') : undefined

export const actions = {
   // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    // if (req.ctx.session && req.ctx.session.authUser) {
    //   commit('setUser', req.ctx.session.authUser)
    // }
    var cookieParsed = null
    var authUser = null
    var jwt = null
    if (req.headers.cookie && req.headers.cookie.indexOf('koa:sess') > -1) {
      cookieParsed = cookieparser.parse(req.headers.cookie)['koa:sess']
      console.log(cookieParsed)
    }
    if (cookieParsed) {
      authUser = JSON.parse(Buffer.from(cookieParsed, 'base64')).authUser
      jwt = JSON.parse(Buffer.from(cookieParsed, 'base64')).jwt
      console.log(authUser)
      console.log(jwt)
      commit('setUser', authUser)
      commit('setJWT', jwt)
    }
  }
}
