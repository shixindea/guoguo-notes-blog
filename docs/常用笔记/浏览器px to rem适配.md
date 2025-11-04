---
title: 浏览器适配 pxtorem
date: 2022-12-29T00:00:00.000Z
tags:
  - pxtorem
  - 笔记
  - 浏览器适配
categories:
  - 自学篇
createTime: 2025/08/24 00:25:16
permalink: /article/twh1ihjd/
---


## 使用`postcss-px2rem`适配已经做成功`1920*1080`适配为rem



要使`postcss-px2rem`生效，您需要确保已经在项目中安装了`postcss-loader`和`postcss-px2rem`。然后，您需要在`webpack.config.js`中配置它们。以下是修改后的示例：

1. 首先，确保已经安装了`postcss-loader`：

InsertCopy

```js
npm install postcss-loader --save-dev
```

1. 然后，在`webpack.config.js`中配置`postcss-loader`：

InsertCopy

```js
const path = require('path');

module.exports = {
 // ...
 module: {
   rules: [
     // ...
     {
       test: /\.css$/,
       use: [
         'vue-style-loader',
         'css-loader',
         'postcss-loader' // 添加此行
       ]
     },
     // ...
   ]
 },
 // ...
};
```

1. 接下来，确保已经安装了`postcss-px2rem`：

InsertCopy

```js
npm install postcss-px2rem --save-dev
```

1. 在`postcss.config.js`中配置`postcss-px2rem`：

InsertCopy

```js
module.exports = {
 plugins: {
   autoprefixer: {},
   'postcss-px2rem': {
     remUnit: 16, // 设置rem单位为16
     viewBox: false, // 关闭viewBox
     selectorBlackList: ['.ignore', '.hairlines'] // 排除特定选择器
   }
 }
};
```

1. 确保在`vue.config.js`中配置了`css.loaderOptions`：

InsertCopy

```js
module.exports = {
 css: {
   loaderOptions: {
     postcss: {
       plugins: [
         // ...
         require('postcss-px2rem')({
           remUnit: 16,
           viewBox: false,
           selectorBlackList: ['.ignore', '.hairlines']
         })
         // ...
       ]
     }
   }
 }
};
```

现在，`postcss-px2rem`应该已经生效了。







如果您已经按照上述步骤配置了`postcss-px2rem`，但仍然没有看到效果，那么可能是因为以下原因：

1. 确保您的`postcss.config.js`文件位于项目的根目录下。
2. 确保您的`webpack.config.js`文件也位于项目的根目录下。
3. 确保您的`vue.config.js`文件也位于项目的根目录下。
4. 确保您的`package.json`文件中包含了`postcss-loader`和`postcss-px2rem`的依赖。
5. 清除浏览器缓存，以便新的配置生效。

如果问题仍然存在，请检查控制台输出中是否有关于`postcss-px2rem`的错误信息。