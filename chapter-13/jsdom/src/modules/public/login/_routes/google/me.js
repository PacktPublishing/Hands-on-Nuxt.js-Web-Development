'use strict'

import Router from 'koa-router'
import { google } from 'googleapis'
import jwt from 'jsonwebtoken'
import pool from 'core/database/mysql'
import config from 'config'
import googleConfig from 'config/google'

const router = new Router()

// Add GET - /api/public/login/google/me?code=<code>
// Extract the email of the google account from the "code" parameter.
// Sign a JWT if the email matches the email in the database.
// Signup required if no email found in the database.
router.get('/google/me', async (ctx, next) => {

  // Get the code from url query.
  const code = ctx.query.code

  // Create a new google oauth2 client instance.
  const oauth = new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  )

  let me = null
  try {
    // get the auth "tokens" from the request
    const data = await auth.getToken(code)
    const tokens = data.tokens

    // add the tokens to the google api so we have access to the account
    oauth.setCredentials(tokens)

    // connect to google plus - to get the user's email
    const plus = google.plus({ version: 'v1', oauth })
    me = await plus.people.get({ userId: 'me' })

  } catch (err) {
    ctx.throw(500, err.message)
  }

  // Throw the error if no Me data.
  if (!me.data) {
    ctx.throw(404, 'no me data found')
  }

  // Get the google email.
  let email = me.data.emails[0].value
  let users = []

  // Find if there is a user with that email already
  try {
    users = await pool.query('SELECT * FROM `users` WHERE email = ?', [email])
  } catch(err) {
    ctx.throw(400, err.sqlMessage)
  }

  // Sign up required with that email if no user found in the database.
  if (users.length === 0) {
    ctx.body = {
      user: me.data,
      message: 'signup required'
    }
    return
  }
  let user = users[0]

  // Define payload.
  let payload = { name: user.name, email: user.email }
  // Signing a token with 1 min of expiration.
  // 1 minute => 60
  // 5 minutes => 60 * 5
  let token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: 1 * 60 })

  ctx.body = {
    user: payload,
    message: 'logged in ok',
    token: token
  }
})

export default router
