'use strict'

import Router from 'koa-router'
import axios from 'axios'
import pool from 'core/database/mysql'

const router = new Router()

// Add GET - /public/login/google/me
router.get('/google/me', async (ctx, next) => {
  // Get the code from url query.
  const token = ctx.query.access_token

  let email = null
  let userinfo = null
  try {
    // Verify a Google authentication API access token
    // https://stackoverflow.com/a/24646356/413225
    // https://www.googleapis.com/oauth2/v1/tokeninfo
    const { data } = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
      params: {
        access_token: token
      }
    })
    // Get the google email.
    email = data.email

    // Store user info.
    userinfo = data
  } catch (err) {
    ctx.throw(err.response.status, err.response.data.error_description)
  }

  // Find if there is a user with that email already.
  let users = []
  try {
    users = await pool.query('SELECT * FROM `users` WHERE email = ?', [email])
  } catch (err) {
    ctx.throw(400, err.sqlMessage)
  }

  // Sign up required with that email if no user found in the database.
  if (users.length === 0) {
    ctx.body = {
      user: userinfo,
      message: 'signup required'
    }
    return
  }
  let user = users[0]

  // Define payload.
  let payload = { name: user.name, email: user.email }

  ctx.body = {
    user: payload,
    message: 'ok'
  }
})

export default router
