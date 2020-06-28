'use strict'

import store from '../store'

export default (to, from, next) => {
  // if (!store.state.user) {
  //   next({
  //     path: '/login'
  //   })
  // } else if (store.state.user.age < 18) {
  //   next({
  //     path: '/login'
  //   })
  // } else {
  //   console.log('is adult ok!')
  //   next()
  // }

  if (store.state.user.age < 18) {
    // Pass on the error message.
    const err = new Error('You must be over 18')
    err.statusCode = 403
    next(err)

    // Or redirect:
    // next({
    //   path: '/login'
    // })
  } else {
    console.log('is adult ok!')
    next()
  }
}
