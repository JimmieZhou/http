/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 13:57:06
 * @LastEditTime: 2019-09-23 14:05:28
 * @LastEditors: Please set LastEditors
 */
const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  const html = fs.readFileSync('./index.html', 'utf-8')
  res.writeHead(200,{
    'Content-Type':'text/html'
  })
  res.end(html)
}).listen(3000)

console.log('server listenning on 3000')