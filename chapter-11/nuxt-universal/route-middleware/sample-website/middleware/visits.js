export default ({ store, route, redirect }) => {
  store.commit('addVisit', route.path)
}
