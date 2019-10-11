<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 10:01:32
 * @LastEditTime: 2019-09-24 10:09:00
 * @LastEditors: Please set LastEditors
 -->
## http并发限制
- 对于http/1.1，在chrome中，一个tcp连接默认支持6个http的并发请求
- 通过设置connection:close,可以关闭并发请求，默认是connecion:keep-alive
- 对于http2，只需创建一个tcp连接就能支持http并发请求，速度会得到质的提升