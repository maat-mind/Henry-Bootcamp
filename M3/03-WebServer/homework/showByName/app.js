var fs = require("fs")
var http = require("http")

// Escribí acá tu servidor
/* http.createServer((req, res) => {
  if (req.url === '/arcoiris_doge') {
    fs.readFile('./images/arcoiris_doge.jpg', (err, data) => {
      if (data) {
        res.writeHead(200, { 'Content-type': 'image/jpeg' })
        res.write(data)
        res.end()
      } else {
        res.writeHead(404, { 'Content-type': 'plain/text' })
        res.end('ERROR 404')
      }
    })
  }
}).listen(1337) */

http.createServer((req, res) => {
  fs.readFile(`./images${ req.url }.jpg`, (err, data) => {

    if (data) {
      res.writeHead(200, { 'Content-type': 'image/jpeg' })
      res.end(data)
    } else {
      res.writeHead(404, { 'Content-type': 'plain/text' })
      res.end('ERROR 404')
    }

  })
}).listen(1337)