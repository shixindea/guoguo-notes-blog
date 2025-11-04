---
title: jsx tsx 代码片段
createTime: 2025/08/24 00:25:17
permalink: /article/13poxd05/
---
## 使用手册

### vitejs/plugin-vue-jsx 插件

#### 第一步：安装插件

>npm install @vitejs/plugin-vue-jsx -D

#### 第二步： 在vite.config.ts中进行引入插件和注册插件

```tsx
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx' // 引入插件

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(), // 注册插件
  ],
})
```

### @vue/babel-plugin-jsx 插件

#### 第一步：安装插件

> pnpm i  @vue/babel-plugin-jsx 

#### 第二步：创建一个文件  babel.config.js  并且导出

```ts
module.exports = {
    "plugins": ["@vue/babel-plugin-jsx"]
}
```



### 第三步：

## 使用 jsx 写页面

>使用
>
>```vue
><template>
> 	 <CustomP />
></template>
>
><script setup lang="ts">
>  import CustomP from '@/randers/Index'
></script>
>```

`Index.jsx` 文件如下

```jsx
import { defineComponent, ref } from "vue";

function getMsg() {
    return "我是·函数·类型的字符串，用{getMsg()}来读取字符"
}

function getComponent() {
    return <div>我是组件</div>
}

const theMsg = ref("我是·变量·类型的字符串，用{theMsg}来读取字符")
export default defineComponent({
    setup() {
        return () => {
            return (
                <div>
                    <el-space direction="vertical" alignment="left" size={24}>
                        <div>静态字符 - 参考文档 [https://www.npmjs.com/package/@vue/babel-plugin-jsx]</div>
                        <div>{theMsg.value}</div>
                        <div>{getMsg()}</div>
                        <el-input v-model={theMsg.value}></el-input>
                        <el-space>  [组件写法1]： {getComponent()}  -- (建议使用写法1)</el-space>
                        <el-space>  [组件写法2]： <getComponent /></el-space>
                    </el-space>
                </div>
            )
        }
    }
})
```



## jsx 调用页面组件

> **TIP：**
>
> 如果被引用的页面中引用了其他组件  一定要重新导入下 import { ElButton, ElDialog } from 'element-plus';
>
> 不然会当作标签解析，而不是组件

> 调用方法

```ts
  onOpenDialog({
      title: 'Dialog Title',
      content: 'Dialog Content',
    });
```



> jsx 文件 --> **写法1**

```jsx
import { createApp } from 'vue';
import JsxDialog from './jsx-dialog.vue';
export const onOpenDialog = (props: any) => {
    const theDiv = document.createElement('div');
    document.body.appendChild(theDiv);
    return createApp(JsxDialog, props).mount(theDiv);
};
```

>jsx 文件 --> **写法2**

```tsx
import { createApp } from "vue";
import JsxDialog from "./jsx-dialog.vue";

export const onOpenDialog = (props: any, vIf = true) => {
    const theDiv = document.createElement('div');
    document.body.appendChild(theDiv);
    let theDialogProps ={}
    function render(props: any) {
        theDialogProps = props;
        return createApp({
            data() {
                return { theDialogProps, vIf: true };
            },
            render() {
                // 先解构，避免报错，原因不详
                const cdProps = { ...this.theDialogProps };
                return this.vIf ? <JsxDialog {...cdProps} /> : null;
            },
        }).mount(theDiv);
    }
    return render(props)
}
```



> vue 文件如下

```vue
<template>
  <el-dialog v-model="dialogVisible" :title="theProps.title" width="500">
    <span>{{ theProps.content }}</span>
  </el-dialog>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { ElButton, ElDialog } from 'element-plus';
  const theProps = defineProps<{
    title: string;
    content: string;
  }>();
  const dialogVisible = ref(true);
</script>

```







```jsx
 const handleClose = (done: () => void) => {
    ElMessageBox.confirm('Are you sure to close this dialog?')
      .then(() => {
        done();
      })
      .catch(() => {
        // catch error
      });
  };
```

## [重要！]通过一个页面 tsx 文件 完成整个页面的绘制并且实现方法形式调用



> 调用

```vue
<template>
    <el-button type="primary" @click="onOpenUseJsxDialog">点击我调用jsx弹框</el-button >
</template>

<script setup lang="ts">
  import { onOpenDialog } from '@/randers/use-jsx-dialog'

  const onOpenUseJsxDialog = () => {
    onOpenDialog({
      title: '我是标题',
      content: '我是内容',
      onConfirm: () => { console.log('点击了确定')},
      onCancel: function() { console.log('点击了取消')},
    })
  }
</script>

```



> **tsx代码如下**

```tsx
import { defineComponent, createApp } from "vue";
import { ElDialog, ElButton } from 'element-plus';

const theComp = defineComponent({
    props: {
        visible: { type: Boolean },
        title: { type: String },
        content: { type: String },
        onConfirm: { type: Function, required: true },
        onCancel: { type: Function, required: true }
    },
    setup(props) {
        const theDialogVisible = true
        const onPageCancel = () => {
            props.onCancel!()
        }
        const onPageClose = () => {
            // 当关闭弹框的时候销毁组件
            document.querySelector('#use-jsx-dialog-wrapper')?.remove()
        }

        return () => (
            <ElDialog
                v-if={props.visible}
                v-model={theDialogVisible}
                title={props.title}
                width="500"
                destroy-on-close
                onClose={onPageClose}
            >
                <span> {props.content}</span>
                <slot name="footer" >
                    <div class="dialog-footer">
                        <ElButton onClick={() => onPageCancel}>取消</ElButton>
                        <ElButton type="primary" onClick={() => props.onConfirm!()}>
                            确定
                        </ElButton>
                    </div>
                </slot >
            </ElDialog >
        )
    }
})

export const onOpenDialog = (props: any) => {
    const theDiv = document.createElement('div');
    theDiv.setAttribute('id', 'use-jsx-dialog-wrapper');   // 创建的时候创建一个Id  方便当关闭弹框的时候销毁
    document.body.appendChild(theDiv);
    return createApp(theComp, props).mount(theDiv);
};
```

> **笔记**

### 插槽的使用 

```tsx
    <slot name="footer" >
```

### props使用

props中使用到的所有的变量和方法一定要在props中定义

```tsx
onOpenDialog({
  title: '我是标题',
  content: '我是内容',
  onConfirm: () => {
    console.log('点击了确定')
  },
  onCancel: function() {
    console.log('点击了取消')
  },
})
    
const theComp = defineComponent({
    props: {
        title: { type: String },
        content: { type: String },
        onConfirm: { type: Function, required: true },
        onCancel: { type: Function, required: true }
    },
})
```

### 方法使用

> 调用子组件方法的时候 会提示报错   `不能调用可能是“未定义”的对象。ts(2722)`
>
> 使用`ts`中的 类型断言  !()  在括号前面加一个 !            ==>        onClick={() => props.onCancel!()

```html
  <ElButton onClick={() => props.onCancel!()}>取消</ElButton>
```

