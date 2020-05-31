'use strict'

import store from '../store'

export default (to, from, next) => {
  if (!store.state.user) {
    // Pass on the error message.
    const err = new Error('You are not connected')
    err.statusCode = 403
    next(err)

    // Or redirect:
    // next({
    //   path: '/login'
    // })
  } else {
    // eslint-disable-next-line
    console.log('is logged in ok!')
    next()
  }
}
