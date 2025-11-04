---
title: Taro
createTime: 2025/08/24 00:25:17
permalink: /article/ny97kc6i/
---
## 小程序触底刷新下一页



### useReachBottom[](https://taro-docs.jd.com/docs/composition-api#usereachbottom)

监听用户上拉触底事件。等同于 `onReachBottom` 页面生命周期钩子。

```

  onReachBottom() {
    if (this.theListCurrentPage < this.theListPagination.lastPage) {
      this.theListCurrentPage++
      this.onGetList()
    }
  },
  
  
  
  
```

