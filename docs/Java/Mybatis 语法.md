---
title: Mybatis 语法
date: 2023-5-21
tags:
  - Java
  - Mybatis
  - 语法
categories:
  - 自学篇
createTime: 2025/08/24 00:25:17
permalink: /article/j7tanioh/
---
## 模糊查询

```xml
<if test="username!=null">
    username like  CONCAT('%',#{username},'%')
</if>
```

## 控制台打印sql

在 `application.yml` 增加 

```yml
mybatis:
    configuration:
        log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

