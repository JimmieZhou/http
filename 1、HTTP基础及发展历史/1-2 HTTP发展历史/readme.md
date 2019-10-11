<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 10:17:25
 * @LastEditTime: 2019-09-23 10:32:20
 * @LastEditors: Please set LastEditors
 -->
## HTTP/0.9
* 只有一个命令GET
* 没有header等描述数据的信息
* 服务器发送完毕，就关闭TCP连接

## HTTP/1.0
* 增加了很多命令
* 增加了status code和header
* 增加了多字符集的支持，权限和缓存等

## HTTP/1.1（目前）
* 增加了持久连接
* 增加了pipeline（串行）
* 增加了host和其他一些命令

## HTTP2
* 所有数据是以二进制传输
* 同一个连接里面发送多个请求不再需要按照顺序来（并行）
* 头信息压缩以及推送等提高效率的功能

