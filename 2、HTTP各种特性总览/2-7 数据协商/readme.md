<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 10:23:04
 * @LastEditTime: 2019-09-24 10:45:28
 * @LastEditors: Please set LastEditors
 -->
## 数据协商
> 客户端向服务端发送请求，客户端会声明希望拿到的数据格式和相关限制是怎样的，服务端根据头信息进行判断，到底返回怎么样的数据

## Accept
- Accept：指定的是想要的数据类型，根据Mime-Types的声明
- Accept-Encoding：编码方式
- Accept-Language：希望这是的语言
- User-Agent：浏览器的信息

## Content
- Content-Type：返回的数据格式
- Content-Encoding：编码方式
- Content-Language：返回的语言

## 注意
> 虽然客户端要求服务端要返回什么数据，但是服务端不一定会按照请求返回