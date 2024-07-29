---
title: 下载中心
sidebar: auto
sidebarDepth: 1
categories:
  - 下载中心
tags:
  - 下载中心
---

## NACOS 2.4.0下载
### 1. 安全性升级：管理员密码不再是默认的
   以前Nacos默认的管理员密码一直是个问题，这次终于干掉了默认密码，支持咱们自己设。听说你还可以禁用 Derby OPS API，避免了一些奇怪的误报。要用的话，得手动开，设置 nacos.config.derby.ops.enabled=true。

### 2. TLS Grpc 通信：双向加密更安全
   这次Nacos加了个狠活，集群节点间也可以用 TLS Grpc 通信了。之前只是客户端和服务器间有 TLS，现在连节点间的通信都能加密，安全性直接拉满。

### 3. 注册中心的骚操作：扩展 Selector 和差异事件支持
   在注册中心模块，Nacos 允许用户在回调 Subscriber 之前扩展 Selector，可以根据健康状态和集群选择服务实例，还支持更多自定义逻辑。客户端还支持新的事件回调服务差异，简化缓存和比较逻辑。

### 4. 控制台和插件：配置更方便，功能更强大
   Nacos 控制台增加了不少新配置，插件支持也提升了。例如现在可以将所有元数据添加到 Prometheus SD 协议中，还支持阿里云 RAM V4 签名，够酷吧？

### 5、适配国产数据库
   NACOS 2.4.0版本已适配达梦数据库

### 6、依赖更新
    Spring Security：升级到 5.7.12 版本。
    Spring Framework：升级到 5.3.34 版本。
    Grpc：升级到 1.64.2 版本。

::: tip NACOS 2.4.0下载
[nacos-server-2.4.0.tar.gz](blob:https://github.com/2da9faf6-5e6a-4da6-a429-8577e1108a7d "NACOS 2.4.0")
:::
