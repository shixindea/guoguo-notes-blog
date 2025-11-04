---
title: React 项目配置流程
createTime: 2025/08/24 00:25:17
permalink: /article/nw4hc2p5/
---
## 设置@为Src目录

> 先安装一个包 `cnpm i - D @types/node`用来解决`path`报错

```tsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@':path.resolve(__dirname,'./src')
    }
  }
})

```

> ## 输入 @/ 不能自动识别路径
>
> 在`tsconfig.json` 中 添加如下代码

```js
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
}
```

## 路由配置流程（带懒加载)

> ### router.js

```js
import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
// import About from "../views/About";
import Home from "../views/Home";
const About = lazy(() => import("../views/About"))
// const Home = lazy(() => import("../views/Home"))
const routes = [
    {
        path: '/',
        element: <Navigate to='/home' />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    }
]
export default routes
```

> ### 在main里面创建路由模式

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'
import '@/assets/style/global.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>{/* 严格模式 */}
    <BrowserRouter> {/* 路由模式 */}
      <React.Suspense fallback={<div>Loading...</div>} > {/* 懒加载标签 */}
        <App />
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)

```



> ### App.tsx

```tsx
import React from 'react'
import Copm1 from './components/Comp1/inedx'
import Comp2 from './components/Comp2'
import { useRoutes, Link } from 'react-router-dom'
import router from './router'


export default function App() {
  const element = useRoutes(router)
  return (
    <div>
      <h1>  我是APP组件</h1>
      <Copm1 />
      <Comp2 />
      <Link to='/home'>Go home</Link>
      <Link to='/About'>Go home</Link>
      {element}
    </div>
  )
}
```

