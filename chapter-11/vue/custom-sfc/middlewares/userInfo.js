'use strict'

import store from '../store'

export default (to, from, next) => {
  console.log('store.state.user:')
  console.log(store.state.user)

  console.log('localStorage.getItem(user):')
  console.log(localStorage.getItem('user'))

  next()
}
