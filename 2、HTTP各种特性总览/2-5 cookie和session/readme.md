## 1、cookie

### 1.1、什么是cookie
>服务端返回数据的时候，通过```Set-Cookie```这个```header```，设置到浏览器里面，浏览器保存这个```cookies```后，浏览器在同域的请求中就会带上这个```cookie```，实现这次访问网站的会话中保证这个数据是同一个用户的。

### 1.2、cookie属性
- ```max-age```（单位是秒）和```expires```（GMT时间格式，是过期的日期）设置过期时间
- 默认失效时间是浏览器关闭
- ```secure```：只能在```https```中使用
- ```httpOnly```：无法在客户端通过```document.cookie```访问

### 1.3、cookie共享
>在二级域名和主域名下的```cookie```是可以共享的，通过设置```domain```来实现，比如：```test.com```和```a.test.com```下的```cookie```是可以共享的