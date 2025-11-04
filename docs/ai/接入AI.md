---
title: 接入AI
createTime: 2025/08/24 00:25:17
permalink: /article/1qzbnp55/
---


## Pom 配置

```
# Spring Boot Admin 配置项
spring:
   ai:
    ollama:
      chat:
        model: qwen3:1.7b
      base-url: http://localhost:11434

```

## 

## 官网链接 

https://doc.spring4all.com/spring-ai/reference/api/chatclient.html



## sse 长链接  单向数据传输 后端 -> 前端

## websorket 双向数据传输  



## ai 格式化输出



```diff
  Boolean aBoolean = chatclient.prompt()ChatClientRequestSpec// 用户提示词
  .user( text: message + "/no_think")
  .system(p -> p.param(k:"current_date", LocalDate.now().t
  .call()CallResponseSpec
+  entity(Boolean.class)
```





## 切换大模型教程

![image-20250703094738518](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250703094738518.png)
