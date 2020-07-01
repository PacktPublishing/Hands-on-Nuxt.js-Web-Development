'use strict'

import jwt from 'jsonwebtoken'
import config from 'config'

export default async (ctx, next) => {
  if (!ctx.headers.authorization) {
    ctx.throw(401, 'Protected resource, use Authorization header to get access')
  }

  // Get `Bearer: [token]`, so split it by the single empty space.
  const token = ctx.headers.authorization.split(' ')[1]

  try {
    ctx.state.jwtPayload = jwt.verify(token, config.JWT_SECRET)
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      ctx.throw(401, err.message)
    }
    ctx.throw(403, err.message)
  }

  await next()
}
