import express from 'express'
import cookie from 'cookie'
import cookieParser from 'cookie-parser'

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()

app.use(cookieParser())

// This middleware will check if user's cookie is still saved in browser and
// user is not set, then automatically log the user out. This usually happens
// when you stop your express server after login, your cookie still remains
// saved in the browser.
app.use((req, res, next) => {
  if (req.cookies.express_sid && !req.session.user) {
    res.clearCookie('express_sid');
  }
  next()
})

// Add GET - /
app.get('/', (req, res) => res.send('Hello World!'))

// Add GET - /api/session-counter
app.get('/session-counter', (req, res) => {

  console.log('session =', req.session)
  console.log('session id =', req.sessionID)
  console.log('req.headers =', req.headers)
  console.log('req.headers.cookie =', req.headers.cookie)
  console.log('express_sid =', cookie.parse(req.headers.cookie)['express_sid'])

  // Cookies that have not been signed
  console.log('req.cookies = ', req.cookies)

  // https://github.com/expressjs/cookie-session#simple-view-counter-example
  // https://github.com/expressjs/cookie-session#per-user-sticky-max-age
  if (req.session.views) {
    req.session.views ++
    return res.json({
      message: 'Simple session view counter example',
      views: req.session.views,
      maxAge: (req.session.cookie.maxAge / 1000)
    })
  } else {
    req.session.views = 1
    return res.json({
      message: 'Session ends. Please log in again'
    })
  }
})

// middleware function to check for logged-in users
var authenticate = (req, res, next) => {
  if (req.session.auth && req.cookies.express_sid) {
    next()
  } else {
    res.status(401).json({ message: 'Not authorized' })
  }
}

// Add POST - /api/login
app.post('/login', (req, res) => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.auth = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ message: 'Bad credentials' })
})

// Add POST - /api/logout
app.post('/logout', (req, res) => {
  delete req.session.auth
  res.json({ ok: true })
})

// API that requires authentication - - /api/secret
app.get('/secret', authenticate, (req, res) => {
  return res.json({ message: 'secret message' })
})

// Export the server middleware
export default {
  path: '/api',
  handler: app
}
