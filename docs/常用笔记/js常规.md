---
title: Js 常规
date: 2022-12-29T00:00:00.000Z
tags:
  - Javascript
categories:
  - 居家篇
createTime: 2025/08/24 00:25:16
permalink: /article/rt5n870c/
---



## 1. js数组操作

#### 【删】

> pop() 方法用于删除数组的**最后一个元素并返回删除的元素**。
>
> **注意：**此方法改变数组的长度！
>
> **提示：** 移除数组第一个元素，请使用 [shift()](https://www.w3cschool.cn/jsref/jsref-shift.html) 方法

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();

*fruits* 结果输出：
Banana,Orange,Apple
```






> shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
>
> **注意：** 此方法改变数组的长度！
>
> **提示:** 移除数组末尾的元素可以使用 [pop()](https://www.w3cschool.cn/jsref/jsref-pop.html) 方法。



```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift()

*fruits*结果输出:
Orange,Apple,Mango
```

#### 【map】方法遍历数组

```js
  var map = [{  
             key : "百度",  
             value : "李彦宏"  },
            {
             key : "阿里巴巴",  
             value : "马云"  },
        ];  

for (var key in map) {  
            console.log(map[key]);  
        }
//输出结果
//Object {key : "百度", value : "李彦宏"}
//Object {key : "阿里巴巴", value : "马云"}

原文链接：https://blog.csdn.net/pang_da_xing/article/details/75676014
```

> ###  **1、数组的属性**

在Array对象中有3个属性，分别是length、constructor和prototype。在初学者阶段，我们仅仅掌握length这个属性就可以了。

> ###  2、数组的方法

| 方法       | 说明                     |
| :--------- | :----------------------- |
| slice()    | 获取数组中的某段数组元素 |
| unshift()  | 在数组开头添加元素       |
| push()     | 在数组末尾添加元素       |
| shift()    | 删除数组中第一个元素     |
| pop()      | 删除数组最后一个元素     |
| toString() | 将数组转换为字符串       |
| join()     | 将数组元素连接成字符串   |
| concat()   | 多个数组连接为字符串     |
| sort()     | 数组元素正向排序         |
| reverse()  | 数组元素反向排序         |

> ###  **数值对象**

下面都是这一章所讲解到的Math对象比较重要的方法：

| 方法     | 说明                       |
| :------- | :------------------------- |
| max(x,y) | 返回x和y中的最大值         |
| min(x,y) | 返回x和y中的最小值         |
| pow(x,y) | 返回x的y次幂               |
| abs(x)   | 返回数的绝对值             |
| round(x) | 把数四舍五入为最接近的整数 |
| random() | 返回0~1之间的随机数        |
| ceil(x)  | 对一个数进行上舍入         |
| floor(x) | 对一个数进行下舍入         |

## 2. 过滤扩展名

```js
let name = aaa.png
name.substring(0, name.lastIndexOf("."))
```

## 3. Object  转换为 JSON 数据     JSON.stringify(OBJ对象数组)

> ### JSON.stringify(this.sign_time)
>
> ### JSON.parse( JSON.stringify(OBJ对象数组))
>
> ## Vue __ob__: Observer
>
> 网上有很多解决的方案：
>
> **第一种**：__ob__: Observer 是 Vue 对数据监控添加的属性，如果想去掉可以用赋值的方式。例如Object.assign({},this.owner)。 用这种方式也是可以解决。
>
> **第二种：**假设list里面存放的就是那些带有__ob__: Observer的可以用JSON.parse(JSON.stringify(this.list)）完美解决
>
> 
>
> 作者：无枉少年
> 链接：https://www.jianshu.com/p/d9a8029356ef
> 来源：简书
> 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
>
> 

### 3.2 数组传值使用JSON解析出现错误

![  ](https://img-blog.csdnimg.cn/074749fca7f941a28b15f26d8915f5e1.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA6L6w5Lmd5Lmd,size_20,color_FFFFFF,t_70,g_se,x_16)



> **编码：** encodeURIComponent(JSON.stringify(item))

> **解码：** JSON.parse(decodeURIComponent(options.formData))

## 4. 强制刷新视图层  **this.$forceUpdate();**

​			**this.$forceUpdate();**

## 5. 四舍五入为指定小数位数 toFixed() 

> ## 定义和用法

toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。

> ## 语法

```js
NumberObject.toFixed(num)
```

| 参数 | 描述                                                         |
| :--- | :----------------------------------------------------------- |
| num  | 必需。规定小数的位数，是 0 ~ 20 之间的值，包括 0 和 20，有些实现可以支持更大的数值范围。如果省略了该参数，将用 0 代替。 |

## 6. 对象转数组 Object.keys

> 将对象的 键值 转换为  数组

**示例代码**

```js
// simple array
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
var myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

## 7.校验是否有违禁词

**yxd-常用**

```js
keyWords: [
    '装逼', '草泥马', '特么的', '撕逼', '玛拉戈壁', '爆菊', 'JB', '呆逼', '本屌', '齐B短裙', '法克鱿', '丢你老母', '达菲鸡', '装13', '逼格', '蛋疼',
    '傻逼', '绿茶婊', '你妈的', '表砸', '屌爆了', '买了个婊', '已撸', '吉跋猫', '妈蛋', '逗比', '我靠', '碧莲', '碧池', '然并卵', '日了狗', '屁民',
    '吃翔', 'XX狗', '淫家', '你妹', '浮尸国', '滚粗', '国家级', '世界级', '最高级', '唯一', '首个', '首选', '顶级', '国家级产品', '填补国内空白', '独家',
    '首家', '最新', '最先进', '第一品牌', '金牌', '名牌', '优秀', '顶级', '独家', '全网销量第一', '全国首家', '全网首发', '世界领先', '顶级工艺', '王牌',
    '销量冠军', '极致', '永久', '王牌', '掌门人', '领袖品牌', '独一无二', '绝无仅有', '史无前例', '万能', '习近平', '习大大', '七七事变', '垃圾', 'laji',
    '勾八'
],
```

```js
// 关键字校验
let value = this.myContent
const word = this.keyWords
if (value !== null) {
    for (const i in word) {
        var reg = new RegExp(word[i], 'g')
        if (value.indexOf(word[i]) != -1) {
            const _reg = reg.toString().substr(1, reg.toString().length - 3)
            console.log(_reg, 'reg.toString().substr(1, reg.length - 3)');
            const _title = "您输入的包含违禁词\"" + _reg + "\"，请重新输入"
            uni.showToast({
                title: _title,
                icon: "none",
                duration: 2000
            })
            return
        }
    }
}
```

**搜取**

```js

<script>
    export default {
data() {
    return {
        keyWords: [
          '装逼', '草泥马', '特么的', '撕逼', '玛拉戈壁', '爆菊', 'JB', '呆逼', '本屌', '齐B短裙', '法克鱿', '丢你老母', '达菲鸡', '装13', '逼格', '蛋疼',
          '傻逼', '绿茶婊', '你妈的', '表砸', '屌爆了', '买了个婊', '已撸', '吉跋猫', '妈蛋', '逗比', '我靠', '碧莲', '碧池', '然并卵', '日了狗', '屁民',
          '吃翔', 'XX狗', '淫家', '你妹', '浮尸国', '滚粗', '国家级', '世界级', '最高级', '唯一', '首个', '首选', '顶级', '国家级产品', '填补国内空白', '独家',
          '首家', '最新', '最先进', '第一品牌', '金牌', '名牌', '优秀', '顶级', '独家', '全网销量第一', '全国首家', '全网首发', '世界领先', '顶级工艺', '王牌',
          '销量冠军', '极致', '永久', '王牌', '掌门人', '领袖品牌', '独一无二', '绝无仅有', '史无前例', '万能', '习近平', '习大大', '七七事变', '垃圾', 'laji',
          '勾八'
        ],
    }
},
    methods: {
        dialogOpen(val) {
            this.afterCorrectWord = val
            const word = this.keyWords
            let value = val
            if (val !== null) {
                for (const i in word) {
                    /* 替换全部空格 */
                    const reg = new RegExp(word[i], 'g')
                    // 判断内容中是否包括敏感词
                    if (value.indexOf(word[i]) != -1) {
                        const _reg = reg.toString().substr(1, reg.toString().length-3)
                        const _title = "您输入的包含违禁词\"" + _reg+ "\"，请重新输入"
                        uni.showToast({
                            title: _title,
                            icon: "none",
                            duration: 2000
                        })

                        const result = value.replace(reg, `<span style="color:#f03b2c">${word[i]}</span>`)
                        value = result
                        // this.haveProhibitedWords = true
                    }
                }
            }
            this.validateWords = value
            this.dialogVisible = true
        }
    }
</script>

```

## 8.生成随机数

**上限  999999999  下限1**

```js
parseInt(Math.random()*(999999999-1+1)+1,10); 
```

## 9.去除字符串左右空格

> `str`为字符串

```js
str.replace(/^\s+|\s+$/g,"")
```

## 10.对象数组取异

> 设有两个数组，且一个数组包含着另外一个数组，取出多出的数组
>
> // var arr1 = [ {"id": "A"},{"id": "B"}];
> // var arr2 = [ {"id": "A"}, {"id": "B"},{"id": "C"}];
>
> //  getArrDifSameValue(少的数据, 多的数据)
> //  const data = getArrDifSameValue()   接收返回值

```js
// var arr1 = [ {"id": "A"},{"id": "B"}];
// var arr2 = [ {"id": "A"}, {"id": "B"},{"id": "C"}];
//  getArrDifSameValue(少的数据, 多的数据)
//  const data = getArrDifSameValue()   接收返回值
getArrDifSameValue(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr2.length; i++) {
        var obj = arr2[i];
        var id = obj.fileid;
        var isExist = false;
        for (var j = 0; j < arr1.length; j++) {
            var aj = arr1[j];
            var n = aj.fileid;
            if (n == id) {
                isExist = true;
                break;
            }
        }
        if (!isExist) {
            result.push(obj);
        }
    }
    return result;
},

```

## promise 延迟 

```js
     const prom = new Promise((resolve, reject) => {
        //执行函数体 1
        resolve()
      })

      prom.then(() => {
        //执行函数体 2
      })
```

## 强制跳出 forEach循环 throw new Error('error')

> 抛出异常错误  throw new Error('error')

```js
data() {
    return {
        tableData: Array.apply(null, { length: 10 }).map((item, index) => {
            return {
                id: index,
                value: index
            }
        }),
    }
},
    
    
---------------------------------------------------
    
    this.tableData.forEach(item => {
        console.log('item.id', item.id)
        if (item.id == '5') {
            throw new Error('error')
        }
    })
```

## this.nextTick 放到服务器环境不能使用了 本地环境可以 setImmediate(res=>{})

> `this.nextTick` 是 Vue.js 框架中的一个方法，用于在下次 DOM 更新循环结束之后执行延迟回调。但是需要注意的是，这个方法只能在浏览器环境中使用，而不能在服务器环境（如 Node.js 环境）中使用。
>
> 原因是 `nextTick` 方法依赖于浏览器的异步更新机制（即事件循环），而服务器环境通常没有类似的机制。
>
> 在服务器环境中，可以使用 `setImmediate` 或 `process.nextTick` 方法来代替 `nextTick` 方法。例如：
>
> ```js
> // 代替 this.nextTick 的方法
> process.nextTick(() => {
>   // 延迟回调处理逻辑
> });
> ```



> **最终解决方法**

```js
function callback() {
   console.log('延迟回调函数被执行');
}

setImmediate(callback);
console.log('立即执行');

```

> **process.nextTick和tihis.nexttick 的区别**
>
> 
>
> `process.nextTick` 和 `this.nextTick` 都是用于在下一个事件循环中执行回调函数的方法，但它们有一些区别：
>
> 1. 用途不同：`process.nextTick` 是 Node.js 中的方法，用于在当前操作系统进程的下一个事件循环中执行回调函数；而 `this.nextTick` 是 Vue.js 框架中的方法，用于在下次 DOM 更新循环结束之后执行延迟回调。
> 2. 执行时机不同：`process.nextTick` 的回调函数会被优先于其他微任务（如 Promise）执行，且不会被阻塞，因此可能会导致回调函数执行过程中的 I/O 操作和 CPU 密集型计算影响其他事件的处理。而 `this.nextTick` 的回调函数是在浏览器的任务队列中执行的，因此不会对其他任务产生影响。
> 3. 用法不同：`process.nextTick` 接受的参数是一个回调函数，回调函数会在当前事件循环退出时立即执行；而 `this.nextTick` 接受的参数也是回调函数，但它会被推入一个队列中，在下次 DOM 更新周期结束后执行。
>
> 需要注意的是，在浏览器环境中，是没有 `process` 对象的，因此 `process.nextTick` 方法无法使用，而在 Node.js 环境中，`this.nextTick` 方法也不能使用。

## 复制剪贴板

```js
// 复制文本
navigator.clipboard.writeText($slot.default()[0].children)
```

