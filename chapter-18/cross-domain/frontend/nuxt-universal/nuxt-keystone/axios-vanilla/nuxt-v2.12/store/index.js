'use strict'

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ commit }, { $axios, route }) {
    const GET_LINKS = `
      query {
        allNavLinks (orderBy: "order_ASC") {
          title
          link {
            _label_
          }
        }
      }
    `
    // route.path = '/menu'
    let { data } = await $axios.post('/admin/api', {
      query: GET_LINKS,
      staticPath: '/menu'
    })
    commit('setMenu', data.data.allNavLinks)
  }
}
