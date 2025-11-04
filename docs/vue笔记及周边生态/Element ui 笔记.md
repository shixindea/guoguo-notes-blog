---
title: Element Plus --vue3.0
date: 2022-12-29T00:00:00.000Z
tags:
  - vue3.0
  - Element Plus
categories:
  - 居家篇
createTime: 2025/08/24 00:25:17
permalink: /article/il2mpyew/
---

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

## 代码式显示 dialog 弹框

```js
this.$confirm("确定删除该信息吗？", "警告信息", { type: "warning" })
    .then(async () => {
      //结构体
    });
```

## 代码式显示 dialog 输入框

```js
this.$prompt('请输入内容', '提示', {  
  inputAttrs: {  
    maxlength: 10, // 设置最大长度为10  
    // 其他输入属性  
  },  
  // 其他配置选项  
}).then(({value}) => {  
  // 处理输入值  
}).catch(() => {  
  // 取消操作  
});


inputType：设置输入框的类型，如 'text'、'password' 等。
inputValue：设置输入框的初始值。
inputName：设置输入框的名称。
inputLimit：设置输入的最大长度。
inputPattern：设置输入的验证模式，用于验证输入是否符合特定的格式或模式。
inputErrorMessage：设置输入错误时的错误消息。
confirmButtonColor：设置确定按钮的颜色。
confirmButtonText：设置确定按钮的文本。
cancelButtonColor：设置取消按钮的颜色。
cancelButtonText：设置取消按钮的文本。
inputEvent：设置输入框的事件类型，如 'input'、'change' 等。
inputReadOnly：设置输入框是否只读，即用户不能修改其内容。
inputDisabled：设置输入框是否禁用，即用户不能进行任何操作。
```

