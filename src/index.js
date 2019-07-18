import "@babel/polyfill"
import http from "http"

const requestHandler = function (req, res) {

  res.writeHead(200, {
    'Content-Type': 'Text/plain'
  })
  res.end('Hello Raphael')
}

const server = http.createServer(requestHandler)

server.listen(8980)