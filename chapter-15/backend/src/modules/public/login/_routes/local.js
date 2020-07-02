'use strict'

import Router from 'koa-router'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import pool from 'core/database/mysql'
import config from 'config'

const router = new Router()

// Add POST - /public/login/local
// You can login with:
// curl -X POST -H "Content-Type: application/json" --data '{"username":"xxx", "password":"xxx"}' http://localhost:9000/public/login/local
// curl -X POST -d "username=demo&password=123123" -H "Content-Type: application/x-www-form-urlencoded" http://localhost:4000/public/login/local
router.post('/local', async (ctx, next) => {
  // Get the parsed data.
  let request = ctx.request.body || {}

  // Throw the error.
  // 403 = Forbidden
  // 401 = Unauthorized
  // 400 = Bad Request Error
  if (request.username === undefined) {
    ctx.throw(400, 'username param is required.')
  }
  if (request.password === undefined) {
    ctx.throw(400, 'password param is required.')
  }
  if (request.username === '') {
    ctx.throw(400, 'username is required.')
  }
  if (request.password === '') {
    ctx.throw(400, 'password is required.')
  }

  let username = request.username
  let password = request.password
  let users = []

  try {
    users = await pool.query('SELECT * FROM `users` WHERE username = ?', [username])
  } catch (err) {
    ctx.throw(400, err.sqlMessage)
  }

  if (users.length === 0) {
    ctx.throw(404, 'no user found')
  }
  let user = users[0]
  let match = false

  try {
    match = await bcrypt.compareSync(password, user.password)
  } catch (err) {
    ctx.throw(401, err)
  }
  if (match === false) {
    ctx.throw(401, 'invalid password')
  }

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
