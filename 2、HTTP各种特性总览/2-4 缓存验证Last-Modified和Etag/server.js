/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 13:57:06
 * @LastEditTime: 2019-09-23 16:53:29
 * @LastEditors: Please set LastEditors
 */
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('./index.html', 'utf-8')
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end(html)
  }
  const etag = req.headers['if-none-match']
  if (req.url === '/script.js') {
    if (etag === '321') {
      // 304，notModified，直接读缓存里的数据
      res.writeHead(304, {
        'Content-Type': 'text-javascript',
        'Cache-Control': 'max-age=2000000,no-cache',
        'Last-Modified': 123,
        'Etag': 321
      })
      res.end('')
    } else {
      res.writeHead(200, {
        'Content-Type': 'text-javascript',
        'Cache-Control': 'max-age=2000000,no-cache',
        'Last-Modified': 123,
        'Etag': 321
      })
      res.end('console.log("js loaded")')
    }
  }

}).listen(3000)

console.log('server listenning on 3000')