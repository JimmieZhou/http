/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 11:00:57
 * @LastEditTime: 2019-09-25 13:46:17
 * @LastEditors: Please set LastEditors
 */
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  console.log('request:' + req.url)
  const html = fs.readFileSync('./index.html', 'utf-8')
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.end(html)
}).listen(8888)
console.log('server listen on port 8888')