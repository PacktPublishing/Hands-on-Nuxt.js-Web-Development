import axios from 'axios'

const cookieparser = process.server ? require('cookie') : undefined

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit },  { req }) {
    // console.log('nuxtServerInit')
    // console.log(req.headers)
    // console.log(req.headers.cookie)
    // console.log((req.headers.cookie && req.headers.cookie.indexOf('koa:sess') > -1))
    var cookieParsed = null
    var authUser = null
    if (req.headers.cookie && req.headers.cookie.indexOf('koa:sess') > -1) {
      cookieParsed = cookieparser.parse(req.headers.cookie)['koa:sess']
      console.log(cookieParsed)
    }
    if (cookieParsed) {
      authUser = JSON.parse(Buffer.from(cookieParsed, 'base64')).authUser
      console.log(authUser)
      commit('setUser', authUser)
    }
  }
}
