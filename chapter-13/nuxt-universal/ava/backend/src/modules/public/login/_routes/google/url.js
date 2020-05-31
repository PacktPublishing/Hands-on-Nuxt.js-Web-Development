'use strict'

import Router from 'koa-router'
import { google } from 'googleapis'
import googleConfig from 'config/google'

const router = new Router()

// Generate a url that asks permissions for Me and Email scopes.
// Add POST - /api/public/users/google
router.get('/google/url', async (ctx, next) => {
  const oauth = new google.auth.OAuth2(
    googleConfig.clientId,
    googleConfig.clientSecret,
    googleConfig.redirect
  )

  const scopes = [
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/userinfo.email'
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
