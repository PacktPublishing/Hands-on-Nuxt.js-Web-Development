'use strict'

export const actions = {
   // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ commit, state }, { req, redirect }) {

    // If you want to make sure there is a match in the google user data with the user in the databae
    // Send the google user email to the local server from here. If no match, then send back a message
    // and redirect the user to a signup page from here.
    // console.log(state.auth.strategy)
    // console.log(state.auth.user)

    // try {
    //   const { token } = await this.$axios.$get('http://localhost:3030/public/login/remote', {
    //     params: {
    //       email: state.auth.user.email
    //     }
    //   })

    // redirect('/signup')

    //   // this.$auth.setToken('google',  `Bearer ${data}`)
    //   // console.log('google token = ', this.$auth.getToken('google'))
    // } catch (err) {
    //   console.log(err.message)
    // }
  }
}
