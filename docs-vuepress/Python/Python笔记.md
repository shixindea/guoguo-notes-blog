---
title: Python笔记
createTime: 2025/08/24 00:25:17
permalink: /article/lmd5q2hk/
---
# Python 学习

## 一、选择合适的镜像

Python官网提供了全球多个镜像站点供开发者选择，但对于国内开发者来说，选择一个速度快、更新频率高的国内镜像站点非常重要。以下是一些常用的国内镜像站点：

```bash
1. 清华大学开源软件镜像站: https://mirrors.tuna.tsinghua.edu.cn/        【推荐】
2. 阿里云开源镜像站: https://mirrors.aliyun.com/
3. 中国科学技术大学镜像站: https://mirrors.ustc.edu.cn/
4. 华中科技大学镜像站: https://mirrors.hust.edu.cn/
```

以上镜像站点都提供了完整的Python包下载，用户可以根据自己的网络情况选择开发调试的镜像站点。

## 二、使用镜像站点  [国内源] 

使用Python国内下载镜像非常简单，只需要在pip命令中添加镜像站点的URL即可。例如，使用清华大学的镜像站进行pip包的安装：

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple [package_name]
```

这种方式可以使用所有基于pip的Python包管理工具，例如Anaconda、easy_install等。

## 正则读取

> finditer 读取出来是一个数组
>
> search 读取出来是一个对象

```Python
obj2 = re.compile(r" <li><a href='(?P<href>.*?)'.*?\">(?P<title>.*?)</a><span>.*?</li>", re.S)
result2 = obj2.finditer(resp.text)                  # finditer都取出来是一个数组
for ite in result2:
    theHref = ite.group("href")
    theTitle = ite.group("title")
```

```Python
obj3 = re.compile(r'◎片　　名(?P<title>.*?)</p>.*?<a href="(?P<downloadUrl>.*?)">', re.S)
result3 = obj3.search(theChildResp.text)
print(result3.group('title'),result3.group('downloadUrl'))
```