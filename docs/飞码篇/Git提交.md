---
title: Git提交
date: 2022-08-04T00:00:00.000Z
tags:
  - git
  - 笔记
categories:
  - 飞码篇
createTime: 2025/08/24 00:25:16
permalink: /article/8teujh98/
---

# 第一次需要指定用户名

```
git config --global user.name "name"
git config --global user.email "291XXXXX@qq.com"
```

## 1. git init 初始化文档

## 2. git add . 添加到暂存区

## 3. git commit -m "first commit"  提交并写名字

## 4. git remote add origin https://gitee.com/XXX  地址

## 5. git push -u origin "master"  合并主分支

# 二次提交

## 1. git add .   添加到暂存区

## 2. git commit -m "first commit"   提交并写名字

## 3. git push  提交


## git remote -v  查看当前git 指向哪里



# 其他

## git status 查看暂存区状态

## git log 查看版本日志

## git remote -v 查看本地仓库的远程仓库地址

## git remote remove origin  取消与远程仓库的连接

# Bug

## 在不慎多次提交后出现 (master|[REBASE](https://so.csdn.net/so/search?q=REBASE&spm=1001.2101.3001.7020) 1/2)，

**解决办法：**

回退提交，`git rebase --abort` ，解决





## git cz   【 git commit 的提交命令的加强版】



git cz 是 Git 中的一个命令，它相当于是一个对 git commit 的提交命令的加强版。它通过安装 Commitizen 和 conventional-changelog 等工具，使得提交代码时更加规范，例如写上提交的代码写了哪些功能、修改了哪些文件等等信息，也可以方便自己日后查看。