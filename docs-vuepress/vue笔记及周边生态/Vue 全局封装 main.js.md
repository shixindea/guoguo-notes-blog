---
title: vue 全局封装
date: 2024-5-21
tags:
  - vue
  - 笔记
  - 全局封装
  - 全局
  - 封装
categories:
  - 自学篇
createTime: 2025/08/24 00:25:17
permalink: /article/yg2ely2a/
---

## 防止多次点击，做节流处理

> 默认间隔时间 `3000`

```html
<button v-preventReClick="1000" @click="count++">点我加一</button>
```

```js
//防多次点击，重复提交
Vue.directive('preventReClick', {
  inserted(el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 3000)
      }
    })
  }
})
```
