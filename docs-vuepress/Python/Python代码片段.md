---
title: Python代码片段
createTime: 2025/08/24 00:25:17
permalink: /article/i6l3crf2/
---
# Python代码片段

## 发起一个Get请求

> 行内式

```python
import requests

url = 'https://www.sogou.com/web?query=周杰伦'

headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0'
}

resp = requests.get(url,  headers=headers)

print(resp.text)

resp.close()  # 关掉请求
```

> 参数

```python
import requests

url = 'https://www.sogou.com/web'

param = {
    "query": "周杰伦"
}

headers = {
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0'
}

resp = requests.get(url,params=param, headers=headers)

print(resp.text)

resp.close()  # 关掉请求
```



## 发起一个Post请求

```python
import requests

url = 'https://fanyi.baidu.com/sug'

theData = {
    'kw': 'dog'
}

resp = requests.post(url, data=theData)

print(resp.json())

resp.close()  # 关掉请求
```

