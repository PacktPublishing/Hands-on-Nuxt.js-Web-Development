'use strict'

import store from '../store'

export default (to, from, next) => {
  // eslint-disable-next-line
  console.log('store.state.user:')
  // eslint-disable-next-line
  console.log(store.state.user)

  // eslint-disable-next-line
  console.log('localStorage.getItem(user):')
  // eslint-disable-next-line
  console.log(localStorage.getItem('user'))

  next()
}
