---
title: ecahrts 笔记
date: 2023-9-23
tags:
  - ecahrts
  - 笔记
categories:
  - 居家篇
createTime: 2025/08/24 00:25:16
permalink: /article/ikkamr5v/
---

## 柱状体 文字太长 导值底部文字不显示  省略号做法

> **通过tootip展示文字**


```js
xAxis: [
  {
    type: 'category',
    data: this.allData.traineesNumberList.map(res => res.workTypeName),
    axisPointer: {
      type: 'shadow',
    },
    axisLabel: { // 设置底部文字的样式
      formatter: function (value) {
        if (value.length > 5) { // 如果文字长度超过5个字符，则使用省略号
          return value.substr(0, 5) + '...';
        } else {
          return value;
        }
      },
      textStyle: {
        color: '#ffffff',
      },
      rotate: 45 // 将底部文字旋转45度
    }
  }
],
```

