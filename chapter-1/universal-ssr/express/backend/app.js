const express = require('express')
const cors = require('cors')
const app = express()

const port = 4000

// Enable All CORS Requests
// https://expressjs.com/en/resources/middleware/cors.html
app.use(cors())

app.get('/', (req, res) => res.json({ message: 'Hello World' }))

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))
