---
title: vue 下载
date: 2024-5-21
tags:
  - vue
  - 下载
  - Excel下载
categories:
  - 自学篇
createTime: 2025/08/24 00:25:17
permalink: /article/gcx869uc/
---

# 下载

## 下载blob文件流

> ### 前端下载后台返回的文件流 ，诸如以下：
>
> g����^�6�p��U���r΀%�좃����/�I�|�Rˤ��:f����~��mF�v����ׯ������p9HB�SyݵK~�����PK �;��

```js
const binaryData = []
binaryData.push(res.data)

// 指定文件编码方式为 utf-8
const blob = new Blob(binaryData, { type: 'application/vnd.ms-excel;charset=utf-8' })

// 获取blob链接
this.Url = window.URL.createObjectURL(blob)
window.open(this.Url)
```

## 下载XML文件

```js
import axios from 'axios'

axios({
    url: '/dev-api/standarInterface/archives/' + row.id,
    method: 'GET',
    responseType: 'blob', // important
}).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.xml');
    document.body.appendChild(link);
    link.click();
});
```

## 下载excel

> 一定要加这个不然会乱码  `responseType:'blob',`

```js
// 导出文件
export function exportTemplate(params) {
    return request({
        url: '/statistics/completion/exportTemplate',
        method: 'get',
        responseType:'blob',
        params
    })
}

```

```js
   const url = window.URL.createObjectURL(new Blob([res]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', '非投资与建设项目招标完成情况表.xlsx');
      document.body.appendChild(link);
      link.click();

```

## 或者使用这种方式

```js
const blob = new Blob([res.data], { type: 'application/vnd.ms-excel;charset=utf-8' });

// 获取临时URL
this.Url = window.URL.createObjectURL(blob);

// 下载文件
const link = document.createElement('a');
link.href = this.Url;
link.download = 'data.xlsx';
link.click();

// 清理临时资源
window.URL.revokeObjectURL(this.Url);
```

## 导出PDF

```js
const res = await exportPdf({ settleNumber: this.resultData.settleNumber })
// 获取blob链接
const blob = new Blob([res], { type: 'application/pdf;charset=UTF-8' });
// 获取临时URL
this.Url = window.URL.createObjectURL(blob);
// 下载文件
const link = document.createElement('a');
link.href = this.Url;
link.download = '结算单商品明细(' + this.resultData.inTime + ').xlsx';
link.click();
// 清理临时资源
window.URL.revokeObjectURL(this.Url);
```

