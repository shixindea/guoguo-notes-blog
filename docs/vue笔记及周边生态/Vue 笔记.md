---
title: Vue 笔记
date: 2022-12-29T00:00:00.000Z
tags:
  - 笔记
  - Vue
categories:
  - 居家篇
createTime: 2025/08/24 00:25:17
permalink: /article/698kkuj0/
---

## 关闭eslint 使用

添加  **vue.config.js**

```js
module.exports = defineConfig({
  lintOnSave:false
})
```

## 请求调用 接口

**配置代理**

```js
devServer: {
    proxy: {
      "/api": {
        target:"http://gmall-h5-api.atguigu.cn"
      }
    }
  }
```

**api/requests.js**

```js
//对于axios进行二次封装
import axios from "axios";

//axios.create方法执行,其实返回一个axios和request一样的
let requests = axios.create({
    //基础路径,发请求URL携带api【发现:真实服务器接口都携带/api】
    baseURL: "/api",
    //超时的设置
    timeout: 5000
});

//请求拦截器:将来项目中【N个请求】，只要发请求,会触发请求拦截器!!!
requests.interceptors.request.use(config => {
    // config.headers.userTempId = SET_USERID();
    //不管那个模块发请求,请求拦截器，都可以触发。请求拦截器可以通过请求头每一次协大公共参数给服务器【用户未登录的临时身份】
    return config;
});

//响应拦截器：请求数据返回会执行
requests.interceptors.response.use((res) => {
    //res:实质就是项目中发请求、服务器返回的数据
    return res.data;
}, (err) => {
    //温馨提示:某一天发请求,请求失败,请求失败的信息打印出来
    // alert(err.message);
    //终止Promise链
    console.log('err-requests', err)
    return new Promise();
    // return Promise.reject(new Error('faile')) ;
});

//最后需要暴露:暴露的是添加新的功能的axios,即为requests
export default requests;
```

**api/index.js**

```js
import requests from "./requests";
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
```

**vue 页面调用**

```js
import { reqCategoryList} from '@/api'

reqCategoryList().then((res)=>console.log('res', res))
```



## 本地存储 获取和添加

```js
      localStorage.setItem("listSelect", val)
```

```js
mounted() {
    this.act = this.$route.name
    this.listSelect= localStorage.getItem('listSelect')
},
```

## **路由传参的三种基本方式**

下面我来说下vue自带的路由传参的三种基本方式

先有如下场景 点击当前页的某个按钮跳转到另外一个页面去，并将某个值带过去



```js
<div class="examine" @click="insurance(2)">查看详情</div>
```

第一种方法 页面刷新数据不会丢失

```jsp
methods：{
  insurance(id) {
       //直接调用$router.push 实现携带参数的跳转
        this.$router.push({
          path: `/particulars/${id}`,
        })
}
```

需要对应路由配置如下：

```css
{
     path: '/particulars/:id',
     name: 'particulars',
     component: particulars
   }
```

可以看出需要在path中添加/:id来对应 $router.push 中path携带的参数。在子组件中可以使用来获取传递的参数值
另外页面获取参数如下

```js
this.$route.params.id
```

第二种方法 **页面刷新数据会丢失**

通过路由属性中的name来确定匹配的路由，通过params来传递参数。

```js
methods：{
  insurance(id) {
       this.$router.push({
          name: 'particulars',
          params: {
            id: id
          }
        })
  }
```

对应路由配置: 注意这里不能使用:/id来传递参数了，因为组件中，已经使用params来携带参数了。

```css
 {
     path: '/particulars',
     name: 'particulars',
     component: particulars
   }
```

子组件中: 这样来获取参数

```js
this.$route.params.id
```

第三种方法
使用path来匹配路由，然后通过query来传递参数
这种情况下 query传递的参数会显示在url后面?id=？

```js
methods：{
  insurance(id) {
        this.$router.push({
          path: '/particulars',
          query: {
            id: 123456
          }
        })
  }
```

对应路由配置：

```css
{
     path: '/particulars',
     name: 'particulars',
     component: particulars
   }
```

对应子组件: 这样来获取参数

```js
this.$route.query.id
```

特别注意哦，
组件中 获取参数的时候是![route.params 而不是](https://math.jianshu.com/math?formula=route.params%20%E8%80%8C%E4%B8%8D%E6%98%AF)router 这很重要~~~

## 自定义指令用法实例

> ### **本节主要解决异常图片情况**

**`目标`**： 通过自定义指令的形式解决异常图片的处理

> ### **自定义指令**

首先定义第一个自定义指令  **`v-imagerror`**

```js
export const imagerror = {
  // 指令对象 会在当前的dom元素插入到节点之后执行
  inserted(dom, options) {
    // options是 指令中的变量的解释  其中有一个属性叫做 value
    // dom 表示当前指令作用的dom对象
    // dom认为此时就是图片
    // 当图片有地址 但是地址没有加载成功的时候 会报错 会触发图片的一个事件 => onerror
    dom.onerror = function() {
      // 当图片出现异常的时候 会将指令配置的默认图片设置为该图片的内容
      // dom可以注册error事件
      dom.src = options.value // 这里不能写死
    }
  }
}

```

> ### **在main.js完成自定义指令全局注册**

然后，在**`main.js`**中完成对于该文件中所有指令的全局注册 

```js
import * as directives from '@/directives'
// 注册自定义指令
// 遍历所有的导出的指令对象 完成自定义全局注册
Object.keys(directives).forEach(key => {
  // 注册自定义指令
  Vue.directive(key, directives[key])
})
```

针对上面的引入语法  **`import *  as  变量`**  得到的是一个对象**`{ 变量1：对象1，变量2： 对象2 ...   }`**, 所以可以采用对象遍历的方法进行处理

指令注册成功，可以在**`navbar.vue`**中直接使用了

```vue
<img v-imageerror="defaultImg" :src="staffPhoto" class="user-avatar">
```

```js
 data() {
    return {
      defaultImg: require('@/assets/common/head.jpg')
    }
  },
```

## vue声明一个全局的对象

**首先将所要声明的对象封装到一个`init.js`中,然后默认导出**

```js
const app = cloudbase.init({
    env: 'guoguo-6666-123555511444'
})
var db = app.database()
export default db
```

**在`main.js`中引入并挂载到原型链上**

```js
import _db from '@/tools/init.js'
Vue.prototype.$db = _db
```

**最后在文件中使用 `this.$db` 就可以访问了**

```js
  this.$db.collection('guoguoBox')
      .get()
      .then(function (res) {
        console.log(res, 'res')
      })
```

## 进度条插件

```js
import nprogress from 'nprogress'  //引入组件
import 'nprogress/nprogress.css'   //引入样式

nprogress.start()   //开始
nprogress.done()  //结束
```

## 路由的meta属性

可以自己定义同通过meta属性自定义一个变量用来进行状态的存储，如组件的显示和隐藏

```js
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/Home'),
    meta: { show: true }
  },
```

## 路由传参

前面的是 `'/search/' + this.keyword`  **params**传参   

后面的是`'?k=' + this.keyword.toUpperCase()`  query传参

```js
  {
    path: '/search/:keyword',
    name: 'search',
    component: () => import('@/pages/Search'),
    meta: { show: true }
  },
```

```js
// 字符串传参
this.$router.push('/search/' + this.keyword + '?k=' + this.keyword.toUpperCase())
// 对象传参
this.$router.push({ name: 'search',params:{keyword:this.keyword}, query: { k: this.keyword.toUpperCase() } })
//如果params传的值是空串 可以使用  undefined  解决
this.$router.push({ name: 'search', params: { keyword: '' || undefined }, query: { k: this.keyword.toUpperCase() } })
//解决编程式导航 多次点击同一个路由同一个参数， 出现NavigationDuplicated报错，直接在对象后面增加一个成功的回调和失败的回调即可
this.$router.push({ name: 'search', params: { keyword: '' || undefined } }, () => { }, () => { })
```

### 如何指定 `parms` 参数可传可不传

在`path: '/search/:keyword?'` 的最后加上 `?` 即可

```js
  {
    path: '/search/:keyword?',
    name: 'search',
    component: () => import('@/pages/Search'),
  },
```

## 节流和防抖

> **防抖：** 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

```js
//防抖
debounce
```



> **节流：** 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

```js
//节流
addAdmin2: throttle(function () {
	函数体...
}, 1000, { 'trailing': false }),
```

## Vue 中使用字典 

在vue里面，有很多不需要调用接口的固定下拉菜单内容，会把这个下拉菜单全部封装起来，叫做`字典`，再把字典放到vue原型上，在页面中通过调用，直接使用，这个也是我在练手公司项目中学到的.    [vue 字典 详细链接](https://www.jianshu.com/p/9a22fb63241c)

**1. 创建 @/config/dict.js`文件**

```js
export default {
    auditStatus: [
        { id: 0, name: '未提交' },
        { id: 1, name: '审核中' },
        { id: 3, name: '已完成' },
        { id: 2, name: '已驳回' }
    ],
    inboundType: [
        { id: 1, name: '采购入库' },
        { id: 2, name: '租赁入库' },
        { id: 3, name: '原始入库' },
        { id: 4, name: '盘盈入库' }
    ],
    restoreType: [
        { id: 1, name: '领用归还' },
        { id: 2, name: '借用归还' },
        { id: 3, name: '借出归还' }
    ],
}
```

**2. 在 main.js 中，引入并挂载到全局中  **

```js
import dict from '@/config/dict' //引入dict字典
Vue.prototype.$dict = dict在全局中使用
```

**3. 在组件中使用**

```html
<template>
  <el-select v-model="value" placeholder="请选择">
    <el-option v-for="item in $dict.auditStatus" 
    :key="item.id" :label="item.name" :value="item.name">
    </el-option>
  </el-select>
</template>
```

## vue导出excel

[(7条消息) vue导出excel表格（详细教程）_vue导出excel文件_前端小脑虎的博客-CSDN博客](https://blog.csdn.net/m0_59023970/article/details/123427008)

## vue 右键菜单

https://blog.csdn.net/weixin_43630831/article/details/123984195?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-3-123984195-blog-112016488.235%5Ev38%5Epc_relevant_anti_t3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-3-123984195-blog-112016488.235%5Ev38%5Epc_relevant_anti_t3&utm_relevant_index=6

## 路由跳转页面不重新执行created 

> 将 `created` 换成 `activated`

```js
   activated() {
        console.log('1234123 ===>',1234123);
    },
```

## 通过锚点跳转到位置 不影响路由

一.解决方案

第一种方案：传统的[锚点](https://so.csdn.net/so/search?q=锚点&spm=1001.2101.3001.7020)定位
但是这个方案有一个弊端，就是会影响url 的[hash](https://so.csdn.net/so/search?q=hash&spm=1001.2101.3001.7020)

```javascript
<div id="anchor">跳到这里来</div>
//html中定义一个锚点，这里可以用name或者id,即锚点的目的地
12
<a href="#anchor">点击这</a>
//这是锚点的入口，点击这，锚点激活，href属性绑定你想跳到的位置的div盒子的id或者name
12
```

第二种方案：使用scrollIntoView方法进行定位到某一位置
不会影响影响url 的hash，

```javascript
<div id="anchor">跳到这里来</div>
//还是需要先定义锚点的目的地
12
<span  @click="jumpClick()">点击这</span>
  //这是锚点的入口，绑定点击事件
12
jumpClick(){
 document.querySelector('#anchor').scrollIntoView(true)
 //如果为true，元素的顶端将和其所在滚动区的可视区域的顶端对齐
 //如果为false，元素的底端将和其所在滚动区的可视区域的底端对齐
}
12345
```

还可以配置参数定位的位置和动画效果

```javascript
document.querySelector('#anchor').scrollIntoView({
  behavior: "smooth", 
  // 定义动画过渡效果， "auto"或 "smooth" 之一。默认为 "auto"
  block: "center",
  // 定义垂直方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "start"
  inline: "nearest" 
  // 定义水平方向的对齐， "start", "center", "end", 或 "nearest"之一。默认为 "nearest"
})
```

## video 取消显示  画中画  倍速  和 下载按钮

>noplaybackrate ：隐藏倍速
>
>nodownload：隐藏下载
>
>disablePictureInPicture：隐藏画中画

```html
<video disablePictureInPicture noplaybackrate controlslist="noplaybackrate nodownload" width="100%" height="440px"
       controls ref="videoPlayer">
    <source type="video/mp4">
    您的浏览器不支持 video 标签。
</video>
```

## 文字转语音朗读

```js
  //使用这个命令来  播放语音
if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance("这里是朗读的内容");
        speech.lang = 'zh-CN'; // 设置语言为中文
        speechSynthesis.speak(speech);
      } else {
        console.log('不支持语音合成');
      }

// 关闭语音
      speechSynthesis.cancel()

```



## vue-router // 解决路由重复点击报错

```js
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
 return VueRouterPush.call(this, to).catch(err => err)
}
```

## 防止按钮重复点击  

```js
// yflag: false
setTimeout(res => {
    this.yflag = false
}, 3000)
if (this.yflag) return
this.yflag = true;

const yflag = ref(false);
setTimeout(() => {
    yflag.value = false;
}, 3000);
if (yflag.value) return;
yflag.value = true;

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
});
```

## input输入限制只能输入大写字母/数字/汉字等

```html
1. 限制只能输入大写字母

<el-input v-model="input" oninput="value=value.replace(/[^A-Z]/g,'');"></el-input>
2. 限制只能输入数字

<el-input v-model="input" oninput="this.value = this.value.replace(/[^0-9]/g, '');"></el-input>
限制只能输入数字的情况下还是用计数器比较好，，不会为负也不能输入e等

<el-input-number v-model="input" :min="0" :max="10" :precision="0" :step="1"></el-input-number>
3.限制只能输入汉字

<el-input v-model="input" oninput="value=value.replace(/[^\u4E00-\u9FA5]/g,'');"></el-input>
```

## websocket



https://blog.csdn.net/python_small_pan/article/details/122381533

## flex-shrink: 0;

**Flex-shrink** 属性定义了flex项目在必要时如何缩小以适应flex容器。当设置为 **0** 时，表示项目不会缩小，即使空间不足也不会压缩项目的大小[1](https://blog.csdn.net/liubangbo/article/details/117567640)。

示例

```css
item {
flex-shrink: 0;
}
```

在这个例子中，*.item* 类的元素在flex容器中不会缩小其大小，即使其他元素需要更多空间也不会被挤压。

## 处理路由加载失败的问题

```ts
// FIX 新版本上线导致路由模块获取不到 start
router.onError(() => {
  if (!theTokenStore.theAjaxIsError) {
    Modal.warning({
      title: "温馨提示",
      content: "请求异常请重新加载页面",
      okText: "重新加载页面",
      onOk: () => {
        window.location.reload();
      },
    });
  }
});
// FIX 新版本上线导致路由模块获取不到 end
```

