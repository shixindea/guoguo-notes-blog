---
title: npm 笔记
date: 2024-5-21
tags:
  - npm
  - 笔记
  - 上传自己的npm包
categories:
  - 自学篇
createTime: 2025/08/24 00:25:16
permalink: /article/1i9z9poa/
---



## 上传包 [如何上传自己的npm包_npm上传-CSDN博客](https://blog.csdn.net/Her_smile/article/details/80519597)

```bash
npm login
npm publish  //上传


npm unpublish --force  //撤销上传
```

## 淘宝镜像  切换至淘宝镜像

```bash
#最新地址 淘宝 NPM 镜像站喊你切换新域名啦!
npm config set registry https://registry.npmmirror.com
```

## 恢复官方镜像源

```bash
npm config set registry https://registry.npmjs.org
```

