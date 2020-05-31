export const state = () => ({
  xNumber: 1,
  yNumber: 3
})

export const mutations = {
  changeNumbers (state, newValue) {
    state.xNumber = this.$multiply(3, 8)
    state.yNumber = newValue
  }
}

export const actions = {
  nuxtServerInit ({ commit }, context) {
    console.log('nuxtServerInit () : ', context.app.$subtract(10, 4))
  },
  setNumbers ({ commit }) {
    const newValue = this.$multiply(9, 6)
    commit('changeNumbers', newValue)
  }
}
