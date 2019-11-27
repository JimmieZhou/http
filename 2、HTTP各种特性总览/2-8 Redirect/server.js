/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 11:02:40
 * @LastEditTime: 2019-11-05 16:38:47
 * @LastEditors: jimmiezhou
 */
const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === '/') {
    // 想要跳转，一定要设置302表示跳转
    res.writeHead(301, {
      'Content-Type': 'text/html',
      'Location': '/new'
    })
    res.end('111')
  }
  if (req.url === '/new') {
    const html = fs.readFileSync('./index.html')
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end(html)
  }
}).listen(3000)
console.log('server listen on port 3000')