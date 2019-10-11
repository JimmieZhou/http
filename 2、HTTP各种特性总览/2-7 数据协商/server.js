/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 10:10:57
 * @LastEditTime: 2019-09-24 10:53:33
 * @LastEditors: Please set LastEditors
 */
const http = require('http')
const fs = require('fs')
const zlib = require('zlib')

http.createServer((req, res) => {

  if (req.url === '/') {
    const html = fs.readFileSync('./index.html', 'utf-8')
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Encoding': 'gzip'
    })
    res.end(zlib.gzipSync(html))
  }

}).listen(3000)
console.log('listen on port 3000')