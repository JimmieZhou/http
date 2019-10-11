/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 10:10:57
 * @LastEditTime: 2019-09-24 10:22:24
 * @LastEditors: Please set LastEditors
 */
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {

  if (req.url === '/') {
    const html = fs.readFileSync('./index.html', 'utf-8')
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Connection': 'close' // 关闭http并发连接，长连接
      // 默认是：Connection:keep-alive
    })
    res.end(html)
  } else {
    const img = fs.readFileSync('./1.jpg')
    res.writeHead(200, {
      'Content-Type': 'image/jpg',
      'Connection': 'close'
    })
    res.end(img)
  }

}).listen(3000)
console.log('listen on port 3000')