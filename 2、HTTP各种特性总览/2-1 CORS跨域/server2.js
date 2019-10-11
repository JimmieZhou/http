/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 13:57:06
 * @LastEditTime: 2019-09-23 14:12:00
 * @LastEditors: Please set LastEditors
 */
const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200,{
    'Access-Control-Allow-Origin' : 'http://127.0.0.1:3000'
  })
  res.end('port 3001')
}).listen(3001)

console.log('server listenning on 3001')