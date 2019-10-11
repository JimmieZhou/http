/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 11:21:28
 * @LastEditTime: 2019-09-23 11:30:14
 * @LastEditors: Please set LastEditors
 */
const http = require('http')
http.createServer(function (req, res) {
  console.log(`url:${req.url}`)
  res.end('123')
}).listen(8888)
console.log('server is listenning on 8888')