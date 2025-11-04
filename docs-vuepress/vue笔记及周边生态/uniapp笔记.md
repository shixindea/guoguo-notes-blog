---
title: uniapp笔记
createTime: 2025/08/24 00:25:17
permalink: /article/s2aqqq0l/
---
# uni-app 笔记

## 官网：[uni-app官网](https://uniapp.dcloud.net.cn/quickstart-cli.html#创建uni-app)

## 环境安装

全局安装 vue-cli

```shell
npm install -g @vue/cli
```

## [#](https://uniapp.dcloud.net.cn/quickstart-cli.html#创建uni-app)创建uni-app

- 使用正式版（对应HBuilderX最新正式版）

  ```shell
  vue create -p dcloudio/uni-preset-vue my-project
  ```

  复制代码

- 使用alpha版（对应HBuilderX最新alpha版）

  ```shell
  vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
  ```

此时，会提示选择项目模板（使用Vue3/Vite版不会提示，目前只支持创建默认模板），初次体验建议选择 `hello uni-app` 项目模板，如下所示：

![img](https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/h5-cli-01.png)