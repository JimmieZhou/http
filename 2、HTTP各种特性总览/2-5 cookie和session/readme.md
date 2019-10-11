<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 16:56:18
 * @LastEditTime: 2019-09-24 09:48:40
 * @LastEditors: Please set LastEditors
 -->
# cookie
## 服务端返回数据的时候，通过Set-Cookies这个header，设置到浏览器里面，浏览器保存这个cookies后，浏览器在同域的请求中就会带上这个cookie，实现这次访问网站的回话中保证这个数据是同一个用户的。

## cookie属性
- max-age（单位是秒）和expire（GMT时间格式，是过期的日期）设置过期时间
- 默认失效时间是浏览器关闭
- secure：只能在https中使用
- httpOnly：无法在客户端通过document.cookie访问

## cookie共享
- 在二级域名和主域名下的cookie是可以共享的，通过设置domain来实现，比如：test.com和a.test.com下的cookie是可以共享的