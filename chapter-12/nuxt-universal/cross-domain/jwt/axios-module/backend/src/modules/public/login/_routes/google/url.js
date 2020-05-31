'use strict'

import Router from 'koa-router'
import { google } from 'googleapis'
import googleConfig from 'config/google'

const router = new Router()

// Generate a url that asks permissions for Profile and Email scopes.
// Add POST - /api/public/users/google
router.get('/google/url', async (ctx, next) => {
  const oauth = new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  )

  // https://developers.google.com/+/scopes-shutdown
  // https://stackoverflow.com/questions/54512111/will-the-openid-scope-https-www-googleapis-com-auth-plus-me-be-affected-by-t
  // https://stackoverflow.com/questions/11606101/how-to-get-user-email-from-google-plus-oauth
  const scopes = [
    // 'https://www.googleapis.com/auth/plus.me', // deprecated
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ]

  const url = oauth.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'offline',

    prompt: 'consent',

    // If you only need one scope you can pass it as a string
    scope: scopes
  })

  ctx.body = url
})

export default router
