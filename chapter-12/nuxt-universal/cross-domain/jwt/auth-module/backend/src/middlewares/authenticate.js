'use strict'

import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import axios from 'axios'
import config from 'config'

export default async (ctx, next) => {
  if (!ctx.headers.authorization) {
    ctx.throw(401, 'Protected resource, use Authorization header to get access')
  }

  // Get `Bearer: [token]`, so split it by the single empty space.
  const token = ctx.headers.authorization.split(' ')[1]

  // Parse the cookies in the headers.
  const cookies = cookie.parse(ctx.headers.cookie)

  // If it is Google then call Google API instead.
  // Do the same for GitHub too but here is the basic idea.
  if (cookies['auth.strategy'] === 'google') {
    try {
      // Verify a Google authentication API access token
      // https://stackoverflow.com/a/24646356/413225
      // https://www.googleapis.com/oauth2/v1/tokeninfo
      const { data } = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
        params: {
          access_token: token
        }
      })
      ctx.state.jwtPayload = data
    } catch (err) {
      ctx.throw(err.response.status, err.response.data.error_description)
    }
  } else {
    try {
      ctx.state.jwtPayload = jwt.verify(token, config.JWT_SECRET)
    } catch (err) {
      if (err.name === 'TokenExpiredError') {
        ctx.throw(401, err.message)
      }
      ctx.throw(403, err.message)
    }
  }
  await next()
}
