export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.auth) {
      commit('setAuth', req.session.auth)
    }
  }
}
