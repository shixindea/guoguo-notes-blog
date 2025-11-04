---
title: 公共API
date: 2022-12-29T00:00:00.000Z
tags:
  - 公共
  - API
categories:
  - 自学篇
createTime: 2025/08/24 00:25:16
permalink: /article/2bw3jbnq/
---

# 公共  API  接口

## 获取地理位置信息

```diff
http://whois.pconline.com.cn/ipJson.jsp?ip=121.29.9.239&json=true
```

```diff
{
  "ip": "121.29.9.239",
  "pro": "河北省",
  "proCode": "130000",
  "city": "石家庄市",
  "cityCode": "130100",
  "region": "",
  "regionCode": "0",
  "addr": "河北省石家庄市 联通ADSL",
  "regionNames": "",
  "err": ""
}
```

