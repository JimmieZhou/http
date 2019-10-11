/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 13:57:06
 * @LastEditTime: 2019-09-23 14:42:53
 * @LastEditors: Please set LastEditors
 */
const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
    // 进行预请求验证
    'Access-Control-Allow-Headers': 'X-Test-Cors',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
    // 意思就是在第一次预请求后在1000s内就不需要预请求了
    'Access-Control-Max-Age': '1000'
  })
  res.end('port 3001')
}).listen(3001)

console.log('server listenning on 3001')