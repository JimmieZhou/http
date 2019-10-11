/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 13:57:06
 * @LastEditTime: 2019-09-23 17:15:09
 * @LastEditors: Please set LastEditors
 */
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('./index.html', 'utf-8')
    res.writeHead(200, {
      'Content-Type': 'text/html',
      // 设置cookie
      // 'Set-Cookie': 'id=123'
      // 多个cookie
      'Set-Cookie': ['id = 123;max-age=2', 'abc = 456;HttpOnly']
    })
    res.end(html)
  }

}).listen(3000)

console.log('server listenning on 3000')