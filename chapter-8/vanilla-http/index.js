// https://medium.com/@cainwatson/creating-a-vanilla-node-server-638cb62afaeb
// https://flaviocopes.com/node-request-data/
const http = require('http')

const PORT = 8080
const server = http.createServer((request, response) => {
  // we can access HTTP headers
  // request.on('data', chunk => {
  //   console.log(`Data chunk available: ${chunk}`)
  // });
  // request.on('end', () => {
  //   //end of data
  //   response.end('Hello!')
  // })

  let data = []
  request.on('data', chunk => {
    console.log(chunk)
    data.push(chunk)
  });
  request.on('end', () => {
    console.log(data)
  })
  response.end('Hello!')

})

server.listen(PORT, () => console.log("Server is listening on port %s", PORT))
