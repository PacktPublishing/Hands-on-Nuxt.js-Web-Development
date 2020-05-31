import express from 'express'
import cookie from 'cookie'

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()

// Add GET - /
app.get('/', (req, res) => res.send('Hello World!'))

// Add GET - /api/session-counter
app.get('/session-counter', (req, res) => {

  console.log('session =', req.session)
  console.log('req.headers =', req.headers)
  console.log('req.headers.cookie =', req.headers.cookie)
  console.log('express:sess =', req.headers.cookie && req.headers.cookie.indexOf('express:sess') > -1)

  let cookieParsed = null
  let authUser = null
  if (req.headers.cookie && req.headers.cookie.indexOf('express:sess') > -1) {
    cookieParsed = cookie.parse(req.headers.cookie)['express:sess']
    console.log('cookieParsed =', cookieParsed)
  }
  if (req.headers.cookie && req.headers.cookie.indexOf('express:sess') > -1) {
    authUser = JSON.parse(Buffer.from(cookieParsed, 'base64')).authUser
    console.log(authUser)
  }

  // https://github.com/expressjs/cookie-session#simple-view-counter-example
  // https://github.com/expressjs/cookie-session#per-user-sticky-max-age
  if (req.session.views) {
    req.session.views ++
    return res.json({
      message: 'Simple session view counter example',
      views: req.session.views,
      maxAge: (req.sessionOptions.maxAge / 1000)
    })
  } else {
    req.session.views = 1
    return res.json({
      message: 'Session ends. Please log in again'
    })
  }
})

// Add POST - /api/login
app.post('/login', (req, res) => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ message: 'Bad credentials' })
})

// Add POST - /api/logout
app.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})

// Export the server middleware
export default {
  path: '/api',
  handler: app
}
