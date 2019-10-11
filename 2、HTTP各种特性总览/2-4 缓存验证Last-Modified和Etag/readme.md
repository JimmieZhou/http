<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-23 15:22:57
 * @LastEditTime: 2019-09-23 16:38:29
 * @LastEditors: Please set LastEditors
 -->
# Cache-Control:no-cahe条件下

## Last-Modified
* 上次修改时间
* 配合If-Modified-Since（常用）和If-Unmodified-Since使用
* 对比上次资源修改时间来验证资源是否要更新

## Etag
* 数据签名（只要有任何的数据修改都会更改Etag，比如对内容进行计算得到hash）
* 配合If-Match和If-No-Match使用
* 对比资源签名判断是否使用缓存