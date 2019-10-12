## 1、CORS预请求

### 1.1 CORS预请求的限制
> CORS请求默认允许的Method是：```GET、POST、HEAD```；默认允许的Content-Type是：```text/plain、multipart/fomdata、application/x-www-form-urlencoded```；默认是不允许自定义请求头的。否则都需要一个预请求的验证的。

### 1.2 如何实现预请求
> 浏览器在发送跨域请求的时候，浏览器会首先发送一个*Method：OPTIONS*的预请求，获得服务端许可之后，再发送实际的请求。

  ```javascript
  const http = require('http')
    http.createServer((req, res) => {
    res.writeHead(200, {
        // 设置跨域
        'Access-Control-Allow-Origin': 'http://127.0.0.1:3000',
        // 进行预请求验证的相关设置
        // 设置自定义头
        'Access-Control-Allow-Headers': 'X-Test-Cors',
        // 设置允许的方法
        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
        // 设置预请求有效时长（意思就是在第一次预请求后在1000s内就不需要预请求了）
        'Access-Control-Max-Age': '1000'
    })
    res.end('port 3001')
    }).listen(3001)
    console.log('server listenning on 3001')
  ```


