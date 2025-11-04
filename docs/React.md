---
title: React
createTime: 2025/08/24 00:25:17
permalink: /article/v1kjhg1b/
---
## 数据驱动视图  相当于  ==>   ref reactive

![image-20250806202821571](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250806202821571.png)

## 获取DOM 元素    Ref  

![image-20250806211406840](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250806211406840.png)



![image-20250806211642728](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250806211642728.png)





## 发布评论功能

![image-20250806212013056](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250806212013056.png)



## 发请求

![image-20250806214952225](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250806214952225.png)

## 监听 useEffect 函数 三个状态

![image-20250806215239921](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250806215239921.png)



## hooks 注意事项

![image-20250806221255863](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250806221255863.png)

## 路由穿参

![image-20250806223611028](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250806223611028.png)

![image-20250806223633045](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250806223633045.png)

## 路由嵌套 二级路由

![image-20250806223854847](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250806223854847.png)

## 穿梭组件 穿梭到body

```react
      {createPortal(<GlobalAudioElement ref={audioRef} />, document.body)}

```



## 类中的构造期 是否需要添加super

![image-20250809145753313](/Users/guoguo/Library/Application Support/typora-user-images/image-20250809145753313.png)

## 类式组件

![image-20250809160446729](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250809160446729.png)



## 函数式组件 props 基础使用

![image-20250809190851584](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250809190851584.png)



## 生命周期

![image-20250810094535016](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250810094535016.png)

![image-20250810095302613](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250810095302613.png)

## 新的生命周期钩子



![image-20250810100940405](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250810100940405.png)

## 路由的严格匹配

![image-20250810161021987](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250810161021987.png)



## 强制刷新组件 forceUpdate   

![image-20250810182537508](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250810182537508.png)

##  保存一个旧值

![image-20250810211105716](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250810211105716.png)



## forwardRef 和 useImperativeHandle 相当于 vue中的defineExport



![image-20250810213809732](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250810213809732.png)

## 终止fetch请求 使用useEffect 清理函数 AbortController  

![image-20250810220000019](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250810220000019.png)

## TS   typeof 自动获取类型 不用使用any了





![image-20250810222544462](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250810222544462.png)





## useState useEffect useReducer

usestate 相当于vue的 ref

useReducer 相当于vue的 reactive

useEffect 相当于vue的 watch + cumputed + const





## React.memo 缓存变化，只有props 发生变化才会重新渲染



![image-20250810223528759](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250810223528759.png)



## useMemo函数的返回值是一个计算好的值，而不是函数

![image-20250810224323429](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250810224323429.png)

## zustand 相当于 pinia

> store / price.jsx

```jsx
import { create } from 'zustand'

const usePriceStore = create((set) => ({
  price: 0,
  setPrice: (price) => set(() => ({ price })),
    addPrice: (price) => set((state) => ({ price: state.price + price })),
    
}))

export default usePriceStore;
```

> A 组件

```jsx
import usePriceStore from '../../store/price';

const A = () => {
  const { price, addPrice } = usePriceStore();
  console.log('price ===>', price);
  return (
    <div>
      <h1>A</h1>
      <h2>{price}</h2>
      <button onClick={() => addPrice(100)}>add</button>
    </div>
  );
};

export default A;
```



## Zustand 中间件网址https://zustand.nodejs.cn/docs/middlewares/persist





## Zustand + immer 案例 代码片段

```jsx
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

const usePriceStore = create()(
  immer((set) => ({
    price: 0,
    aaa: {
      bbb: {
        ccc: 0,
        ddd: 2,
        eee: 3
      },
    },
    setPrice: (price) => set(() => ({ price })),
    addPrice: (price) => set((state) => ({ price: state.price + price })),
    setBbb: () => set((state) => { state.aaa.bbb.ccc = state.aaa.bbb.ccc + 1 }
    ),
  }))
)

export default usePriceStore;
```

## zustand useShallow，避免重复渲染问题



zustand redux devtools 调试中间件

```diff
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
+ import { devtools } from 'zustand/middleware'

const usePriceStore = create()(
  immer(
+     devtools(
      (set) => ({
        price: 0,
        aaa: {
          bbb: {
            ccc: 0,
            ddd: 2,
            eee: 3
          },
        },
        setPrice: (price) => set(() => ({ price })),
        addPrice: (price) => set((state) => ({ price: state.price + price })),
        setBbb: () => set((state) => { state.aaa.bbb.ccc = state.aaa.bbb.ccc + 1 }
        ),
      }),
+      { name: 'priceStore' }
    )
+  )
)

export default usePriceStore;

```



## Zustand  持久化存储



```diff
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
+ import { devtools, persist, createJSONStorage } from 'zustand/middleware'

const usePriceStore = create()(
  immer(
+    persist(
      devtools(
        (set) => ({
          price: 0,
          aaa: {
            bbb: {
              ccc: 0,
              ddd: 2,
              eee: 3
            },
          },
          setPrice: (price) => set(() => ({ price })),
          addPrice: (price) => set((state) => ({ price: state.price + price })),
          setBbb: () => set((state) => { state.aaa.bbb.ccc = state.aaa.bbb.ccc + 1 }
          ),
        }),
        {
          name: 'priceStore',
        }
      ),
+     {
+        name: 'priceStore',
+        storage: createJSONStorage(() => sessionStorage),
+        // partialize 用的不多 可以自定义存储
+     }
+    )
  )
)

export default usePriceStore;

```

## 性能优化 独立监听某一个 避免hooks 持续调用

```diff
+import React, { useEffect, useRef } from 'react';
import A from '../A/index';
import B from '../B/index';
+import usePriceStore from '../../store/price';
function HelloWorld(props) {

+    useEffect(() => {
+        usePriceStore.subscribe((state) => state.price, (price, prevPrice) => {
+            console.log('price change ===>', price, prevPrice);
+        })
+        return () => {
+            usePriceStore.unsubscribe()
+        }, {
+            fireImmediately: true,
+            equalityFn: (a, b) => a === b,
+        }
+    }, []);

    return (
        <div>
            <A />
            <hr />
            <B />
        </div>
    );
}



export default HelloWorld;
```

## tailwind 封装到独立的文件中

![image-20250811224821132](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250811224821132.png)



## 将 useSearchParams 转换为对象, 并附上类型

```ts
'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

/**
 * 将 useSearchParams 转换为对象, 并附上类型
 * @example
 * const searchParams = useSearchParamsObject<{ mode: string }>()
 * const mode = searchParams.mode
 * mode 的类型为 string | undefined
 */
export function useSearchParamsObject<T>() {
  const searchParams = useSearchParams()
  const searchParamsObject = useMemo(() => {
    return Object.fromEntries(searchParams.entries()) as Partial<T>
  }, [searchParams])
  return searchParamsObject
}

```





## Mobx-react 函数式组件

![image-20250813075452454](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250813075452454.png)

![image-20250813075351599](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250813075351599.png)

## MobX 类组件

![image-20250813075528968](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250813075528968.png)

![image-20250813075604296](https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250813075604296.png)
