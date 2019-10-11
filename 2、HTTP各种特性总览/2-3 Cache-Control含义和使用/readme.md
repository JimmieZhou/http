<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 14:44:02
 * @LastEditTime: 2019-09-23 16:06:57
 * @LastEditors: Please set LastEditors
 -->

## 可缓存性

- public : http 经过的任何地方都可以缓存
- private : 发起请求的浏览器才能进行缓存
- no-chahe : 可以在本地缓存，但是经过服务器端验证后才能使用本地缓存

## 过期

- max-age<seconds> : 缓存过期的时间多少秒
- s-maxage<seconds> : 在代理服务器中生效，浏览器端的过期时间
- max-stale<seconds> : 在 max-age 过期之后，只要在 max-stale 的时间内还能使用过期的缓存，只有在服务端设置有用

## no-store

- 本地和服务器都不能缓存

- 文件打包好之后，文件名的 hash 原因，如果静态文件内容不变，hash就不变，相当于url就不变，发起的请求就相当于是静态资源的请求
- 如果，内容变了，文件名就变了，url就变了，就会发起新的请求（主要设置cache-control的max-age，浏览器长缓存）
