---
title: Element Plus --vue3.0
date: 2022-12-29T00:00:00.000Z
tags:
  - vue3.0
  - Element Plus
categories:
  - 居家篇
createTime: 2025/08/24 00:25:17
permalink: /article/2zpi30mg/
---

## 1.解决图标不显示的问题

> 1.安装这个

```js
npm install --save @element-plus/icons
```

> 2.引入这个

```js
import { Search, ChatRound } from '@element-plus/icons'
```

> 3.注册这个

```js
import { Options, Vue } from 'vue-class-component'

import { Search, ChatRound } from '@element-plus/icons'
@Options({
  components: {
    Search,
    ChatRound
  }
})
```

