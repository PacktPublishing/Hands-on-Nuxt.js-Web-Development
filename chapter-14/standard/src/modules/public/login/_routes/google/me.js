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
// @refs:
// https://www.npmjs.com/package/googleapis
// https://github.com/googleapis/google-api-nodejs-client/blob/master/samples/people/me.js
// https://googleapis.dev/nodejs/googleapis/latest/script/
router.get('/google/me', async (ctx, next) => {
  // Get the code from url query.
  const code = ctx.query.code

  // Create a new google oauth2 client instance.
  const oauth2 = new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  )

  let me = null
  try {
    // Get the auth "tokens" from the request
    // This will provide an object with the access_token and refresh_token.
    // Save these somewhere safe so they can be used at a later time.
    const { tokens } = await oauth2.getToken(code)

    // Add the tokens to the google api so we have access to the account
    oauth2.setCredentials(tokens)

    // Connect to google people api
    // https://developers.google.com/people/api/rest/v1/people/get
    const people = google.people({
      version: 'v1',
      auth: oauth2
    })

    // If successful, the response body contains an instance of
    // Person (https://developers.google.com/people/api/rest/v1/people#Person).
    // https://developers.google.com/people/api/rest/v1/people/get
    me = await people.people.get({
      resourceName: 'people/me',
      personFields: 'names,emailAddresses'
    })
  } catch (err) {
    ctx.throw(500, err.message)
  }

  // Throw the error if no Me data.
  if (!me.data) {
    ctx.throw(404, 'no me data found')
  }

  // Get the google email.
  // Sample res from emailAddresses field:
  // {
  //   resourceName: 'people/101582935785376338560',
  //   etag: '%EgcBAj0JPjcuGgQBAgUHIgxBRmlVQ2RWOVNvaz0=',
  //   names: [
  //     {
  //       metadata: [Object],
  //       displayName: 'Thiam Kok Lau',
  //       familyName: 'Lau',
  //       givenName: 'Thiam Kok',
  //       displayNameLastFirst: 'Lau, Thiam Kok'
  //     }
  //   ],
  //   emailAddresses: [
  //     { metadata: [Object], value: 'thiamkok.lau@gmail.com' },
  //     { metadata: [Object], value: 'lau.thiamkok@yahoo.co.uk' },
  //     { metadata: [Object], value: 'lau@lauthiamkok.net' }
  //   ]
  // }
  const email = me.data.emailAddresses[0].value
  let users = []

  // Find if there is a user with that email already
  try {
    users = await pool.query('SELECT * FROM `users` WHERE email = ?', [email])
  } catch (err) {
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
  const user = users[0]

  // Define payload.
  const payload = { name: user.name, email: user.email }
  // Signing a token with 1 min of expiration.
  // 1 minute => 60
  // 5 minutes => 60 * 5
  const token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: 1 * 60 })

  ctx.body = {
    user: payload,
    message: 'logged in ok',
    token
  }
})

export default router
