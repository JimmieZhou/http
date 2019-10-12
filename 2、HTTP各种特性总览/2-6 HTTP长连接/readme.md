
## http并发限制
- 对于```http/1.1```，在chrome中，一个tcp连接默认支持6个http的并发请求
- 通过设置```connection:close```,可以关闭并发请求，默认是```connecion:keep-alive```
- 对于```http2```，只需创建一个tcp连接就能支持http并发请求，速度会得到质的提升