/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 11:02:40
 * @LastEditTime: 2019-09-24 14:12:28
 * @LastEditors: Please set LastEditors
 */
const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {

  if (req.url === '/') {
    const html = fs.readFileSync('./index.html')
    res.writeHead(200, {
      'Content-Type': 'text/html',
      // 限制全局
      // 'Content-Security-Policy': 'default-src http: https:'
      // 只能加载本站的js
      // 'Content-Security-Policy': 'default-src \'self\';form-action \'self\''
      
      // 内容安全策略汇报
      // 'Content-Security-Policy': 'default-src \'self\';form-action \'self\'; report'

      // Content-Security-Policy-Report-Only
    })
    res.end(html)
  } else {
    res.writeHead(200, {
      'Content-Type': 'application/javascript'
    })
    res.end('console.log("js loaded")')
  }


}).listen(3000)
console.log('server listen on port 3000')