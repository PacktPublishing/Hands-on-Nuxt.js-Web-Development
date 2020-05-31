'use strict'

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({ commit }, { $axios }) {
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
    let { data } = await $axios.post('/admin/api', {
      query: GET_LINKS
    })
    commit('setMenu', data.data.allNavLinks)
  }
}
