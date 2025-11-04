---
title: vueuse笔记
createTime: 2025/08/24 00:25:17
permalink: /article/p3zqba7j/
---
# vueuse    -->   @vueuse/core

## 安装

```bash
npm i @vueuse/core
```



## useDebounceFn（防抖）

防抖是指当一个事件被触发后，在一定时间内如果该事件再次被触发，那么就会取消前一次的操作，重新开始计时。（防止在短时间内频繁触发事件导致页面性能下降）

```vue
<template>
  <div>
    <div>{{ counter }}</div>
    <button @click="addNum">add</button>
  </div>
</template>
<script lang="ts" setup>
import { useDebounceFn } from "@vueuse/core";
const counter = ref(0);
const handleAddFun = () => {
  counter.value += 1;
};
const addNum = useDebounceFn(handleAddFun, 300, { maxWait: 5000 });
</script>
```

## useFullscreen（全屏）

```vue
<template>
  <button @click="toggle">全屏</button>
</template>
<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'
const { isFullscreen, toggle } = useFullscreen()
console.log('isFullscreen ===>', isFullscreen)
</script>

```

## useClipboard （剪切板功能）

```vue
<template>
 <div>
   <input v-model="input" type="text" />
   <button @click="copy(input)">Copy</button>
 </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useClipboard } from "@vueuse/core";
const input = ref("");
const { text, copy, isSupported } = useClipboard();
// text: 复制的内容; copy: 复制函数; isSupported: 当前的浏览器是否支持这个api
</script>

```

## useColorMode（切换主题颜色）

```vue
<template>
	<div>
	  <div :class="mode" style="width: 40px; height: 40px"></div>
      <button @click="btn">切换主题色</button>
	</div>
</template>
<script lang="ts" setup>
import { useColorMode } from "@vueuse/core";
const mode = useColorMode();
const btn = () => {
  mode.value = mode.value === "light" ? "dark" : "light";
};
</script>
<style>
.light {
  background-color: #ccc;
}
.dark {
  background-color: #333;
}
</style>

```

## useWindowSize（响应式获取窗口尺寸）

```vue
<template>
	<div>
	  <div>{{ width }}-{{ height }}</div>
	</div>
</template>
<script lang="ts" setup>
import { useWindowSize } from "@vueuse/core";
const { width, height } = useWindowSize();
</script>
```

## onClickOutside 检测区域之外的的点击事件

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb5f8c82970946f8a53186019797bf4d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)



```vue
<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const container = ref(null)
onClickOutside(container, () => alert('Good. Better to click outside.'))
</script>

<template>
  <div>
   <p>Hey there, here's some text.</p>
    <div style="background-color: pink;;" ref="container">
      <p>Please don't click in here.</p>
    </div>
  </div>
</template>
```



## useStorage 自动同步到 localstorage

> `useStorage`真的很酷，因为它会自动将 `ref` 同步到 localstorage，事例如下：

```vue
<script setup>
import { useStorage } from '@vueuse/core'
const input = useStorage('unique-key', 'Hello, world!')
</script>

<template>
  <div>
    <input v-model="input" />
  </div>
</template>
```

