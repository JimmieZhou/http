/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 13:57:06
 * @LastEditTime: 2019-09-23 16:22:30
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
  if (req.url === '/script.js') {
    res.writeHead(200, {
      'Content-Type': 'text-javascript',
      'Cache-Control': 'max-age=2,private'
    })
    res.end('console.log("js loaded")')
  }

}).listen(3000)

console.log('server listenning on 3000')