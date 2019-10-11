/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 15:17:32
 * @LastEditTime: 2019-09-25 15:28:26
 * @LastEditors: Please set LastEditors
 */
const http = require('http')
const fs = require('fs')

const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000)
  })
}
http.createServer(function (request, response) {
  console.log('request come', request.url)

  if (request.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8')
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.end(html)
  }

  if (request.url === '/data') {
    response.writeHead(200, {
      'Cache-Control': 'max-age=2, s-maxage=20, private',
      // 只有当头X-Test-Cache的值相同的时候才会缓存
      'Vary': 'X-Test-Cache'
    })
    wait(2).then(() => response.end('success'))
  }
}).listen(8888)

console.log('server listening on 8888')