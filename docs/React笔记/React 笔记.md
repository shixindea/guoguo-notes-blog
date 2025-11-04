---
title: React 笔记
date: 2022-12-29T00:00:00.000Z
tags:
  - React
  - 笔记
categories:
  - 居家篇
createTime: 2025/08/24 00:25:17
permalink: /article/3dgrnd57/
---

## 初始化包

```node
cnpm i react-redux react-router-dom redux
cnpm i reset-css    //初始化样式  安装这个包以后在 main.js中最上方引入即可清除样式
cnpm i sass -D -S
cnpm i react react-redux --save
```



## 项目中一般使用  PureComponent 而不是用 Component

## 调用接口  配置代理

> #### 方法一、只能配置一个   3000==>5000端口数据 

1.在page.json中添加    这个地址 是 请求路径

```js
  "proxy": "http://localhost:5000"
```

2.调用接口  注意，这个地址 是  该为当前路径

```js
  getStudentData = () => {
    axios.get('http://localhost:3000/students').then(
      response => { console.log('成功', response.data); },
      error => { console.log('失败了', error); }
    )
  }
```

说明：

1. 优点：配置简单，前端请求资源时可以不加任何前缀。
2. 缺点：不能配置多个代理。
3. 工作方式：上述方式配置代理，当请求了3000不存在的资源时，那么该请求会转发给5000 （优先匹配前端资源）

> 方法二，高级配置

在src目录下创建文件 `setupProxy.js`,  并写入以下代码

```js

const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api1", {
            target: "http://localhost:5000", //配置转发目标地址(能返回数据的服务器地址)
            changeOrigin: true, //控制服务器接收到的请求头中host字段的值
            pathRewrite: { "^/api1": "" },//去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        }),
           /*
      	changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      	changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      	changeOrigin默认值为false，但我们一般将changeOrigin值设为true
      */
        createProxyMiddleware("/api2", {
            target: "http://localhost:5001", //配置转发目标地址(能返回数据的服务器地址)
            changeOrigin: true, //控制服务器接收到的请求头中host字段的值
            pathRewrite: { "^/api2": "" },
        })
    )
}
```

说明：

1. 优点：可以配置多个代理，可以灵活的控制请求是否走代理。
2. 缺点：配置繁琐，前端请求资源时必须加前缀。

## 组件沟通，消息订阅与发布

```js
import PubSub from 'pubsub-js'
```

> ##### search 组件订阅消息 -- PubSub.publish('订阅名字', 订阅数据)

```js
PubSub.publish('atguigu', response.data.items)
```

> ##### List 组件 接收消息，

```js
componentDidMount() {  //挂载时 接收订阅的消息
    const token = PubSub.subscribe('atguigu', (_, data) => {
        this.setState({ users: data })
    })
}
componentWillUnmount() {  //组件将要卸载时 取消订阅组件消息
    PubSub.unsubscribe(this.token)
}
```

## 路由  调用组件，动态样式

```js
import React, { Component } from 'react'
import './App.css'
import { NavLink, Route，BrowserRouter } from 'react-router-dom'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <NavLink activeClassName='demo' to='/list'> list</NavLink>
          <NavLink activeClassName='demo' to='/search'> search</NavLink> <hr />
          <Route path='/list' component={List} />
          <Route path='/search' component={Search} />
        </BrowserRouter>
      </div>
    )
  }
}

```

## 路由 多标签截至  Switch

```js
import { Switch } from 'react-router-dom'
<Switch></Switch>

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path='/list' component={List} />
          <Route path='/search' component={Search} />
        </Switch>
      </div>
    )
  }
}
```

## 解决样式丢失

> ##### 1.   更改引入样式表的

```js
<link rel="stylesheet" href="./css/bootstrap.css">   //原有路径
    // 改为下面这种写法
<link rel="stylesheet" href="%PUBLIC_URL%/css/bootstrap.css"> 
```

> #### 2.   更改当前路径

```js
<link rel="stylesheet" href="./bootstrap.css">   //原有路径
    // 改为下面这种写法
<link rel="icon" href="/css/bootstrap.css" />
```

> ##### 3.  更改路由模式： 地址从 history路由  转为  hash路由

## 路由重定向

> 再所有组件的最下方，写  ` <Redirect to='/路径名' />`

```js
  render() {
    return (
      <div className="container">
        <NavLink activeClassName='demo' to='/list'> list</NavLink>
        <NavLink activeClassName='demo' to='/search/a/a/'> search</NavLink> <hr />
        <Route exact path='/list' component={List} />
        <Route path='/search' component={Search} />
        <Redirect to='/list' />
      </div>
    )
  }
```

## 二级路由--一定不要严格匹配

> ### 父组件

```react
import React, { Component } from 'react'
import './App.css'
import { NavLink, Route, Redirect } from 'react-router-dom'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavLink activeClassName='demo' to='/list'> list</NavLink>
        <NavLink activeClassName='demo' to='/search'> search</NavLink> <hr />
        <Route  path='/list' component={List} />
        <Route path='/search' component={Search} />
        <Redirect to='/list' />
      </div>
    )
  }
}
```

> 二级路由地址

```react
import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import About from './About';
import Message from './Message';
export default class List extends Component {
  render() {
    return (
      <div>
        <NavLink activeClassName='demo' to='/list/message'>goMessage</NavLink>
        <NavLink activeClassName='demo' to='/list/about'>goAbout</NavLink>
        <hr />

        <Switch>
          <Route path='/list/message' component={Message} />
          <Route path='/list/about' component={About} />
        </Switch>

      </div>
    )
  }
}

```

## 路由传递参数

```vb
		1.params参数
					路由链接(携带参数)：<Link to='/demo/test/tom/18'}>详情</Link>
					注册路由(声明接收)：<Route path="/demo/test/:name/:age" component={Test}/>
					接收参数：this.props.match.params
		2.search参数
					路由链接(携带参数)：<Link to='/demo/test?name=tom&age=18'}>详情</Link>
					注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
					接收参数：this.props.location.search
					备注：获取到的search是urlencoded编码字符串，需要借助querystring解析
		3.state参数
					路由链接(携带参数)：<Link to={{pathname:'/demo/test',state:{name:'tom',age:18}}}>详情</Link>
					注册路由(无需声明，正常注册即可)：<Route path="/demo/test" component={Test}/>
					接收参数：this.props.location.state
					备注：刷新也可以保留住参数
```
### 路由带参数传值 --- params参数

> 父集路由

```react
<Link to={`/list/message/${Obj.id}`}>跳转</Link>
<Route path='/list/message/:id' component={Message} />
```

> 子集路由

```react
 const { id } = this.props.match.params
```

### 路由带参数传值 --- search参数

> 父集路由
```react
<Link to={`/list/message/?id=${Obj.id}&title=${obj.title}`}>跳转</Link>
```


> 子集路由
```js
import qs from 'querystring-es3'

const { search } = this.props.location
const { id,title } = qs.parse(search.slice(1))
```

### 路由带参数传值 --- state参数

> #### 缺点： 如果浏览器清除浏览器历史记录以后，有可能空置

```react
<NavLink to={{ pathname:'/list/message',state:{id:Obj.id}}}>跳转</NavLink>

const { id } = this.props.location.state || {}
```

## 编程式导航 

### 类式组件 history-API

> 两种模式：
>
> ​		replace跳转、push跳转
>
> 三种形式：
>
> ​		params传参、query传参、search传参

​	

```js
// 携带 params 参数
this.props.history.replace(`/list/message/${id}`)
this.props.history.push(`/list/message/${id}`)

// 携带 query 参数
this.props.history.replace(`/list/message?id=${id}`)
this.props.history.push(`/list/message?id=${id}`)

// 携带 state 参数
this.props.history.replace(`/list/message`,{id:id})
this.props.history.push(`/list/message`,{id:id})

//前进、后退、指定
this.props.history.goBack()
this.props.history.goForward()
this.props.history.go(-2)
this.props.history.go(2)
```

###  函数式组件  `<Navigate/>`跳转路由

```react
{ path: '/', element: <Navigate to='/about' /> },
```

```react
import { useOutlet, useNavigate } from 'react-router-dom';
const navigate = useNavigate()
const element =useOutlet()

function goDetail(id) {
    navigate(`detail?id=${id}`)
    
}

<button onClick={() => goDetail(Obj.id)}>跳转详情</button>

//最后使用{element} 来进行页面占位
{element}
```

## 函数式组件调用路由

> ### 传统写法

```react
import React from 'react'
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
export default function App() {
  return (
    <div>
      <h1> 我是App组件</h1>
      <Link to='/home'>goHome</Link>
      <Link to='/about'>goAbout</Link>
      {/* 注册路由 */}
      <Routes>
        <Route path=`/home/${Obj.id}/${Obj.name}` element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/' element={<Navigate to='/about'/>}></Route>
      </Routes>
    </div>
  )
}
```

> ### 外部调用的写法



**routes/index.js**

```js
import About from "../pages/about"
import Home from "../pages/home"
import { Navigate } from "react-router-dom"

 const  element = [
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/home/:id/:name',
        element: <Home />
    }, {
        path: '/',
        element: <Navigate to='/about' />
    },
]
export default element
```

**App.js**

```react
import React from 'react'
import { Link,useRoutes } from 'react-router-dom'
import routes from './routes'
export default function App() {
  const element=useRoutes(routes)
  return (
    <div>
      <h1> 我是App组件</h1>
      <Link to='/home'>goHome</Link>
      <Link to='/about'>goAbout</Link>
      {element}
    </div>
  )
}
```

### 调用子集路由

**routes/index.js**

```js
import About from "../pages/about"
import Home from "../pages/home"
import { Navigate } from "react-router-dom"
import News from '../pages/components/News'
import Message from '../pages/components/Message'

const element = [
    {
        path: '/about',
        element: <About />,
        children: [{ path: 'news', element: <News /> },
        { path: 'message', element: <Message /> }
        ]
    },
    { path: '/home', element: <Home /> },
    { path: '/', element: <Navigate to='/about' /> },
]
export default element
```

> ### 使用 ` <Outlet/>` 组件进行占位，站在哪里，组件就先是在哪里
>
> ### to两中写法     `/about/news`  或者 `news`

**about.jsx**

```react
import React, { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function About() {
    return (
        <Fragment>
            <hr/>
            <Link to='message'> goMessage</Link>
            <Link to='news'> goNews</Link>
            <Outlet/>   //占位插槽
        </Fragment>
    )
}
```

## 一般组件想使用 路由组件的API参数 -- withRouter

> 在导出这个组件的时候 包裹一层 withRouter函数即可

```js
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Header extends Component {
    render() {
        console.log('this.props一般组件', this.props)
        return (
            <div>这个是一个一般组件</div>
        );
    }
}
export default withRouter(Header);
```

## Redux 基本使用  

### 类式组件

> ###   精简版   102集异步



> #### (1).去除Count组件自身的状态
>
> #### (2).src下建立:
>
> ​				-redux
> ​					-store.js
> ​					-count_reducer.js
>
> #### (3).store.js：
>
> ​			1).引入redux中的createStore函数，创建一个store
> ​			2).createStore调用时要传入一个为其服务的reducer
> ​			3).记得暴露store对象
>
> #### (4).count_reducer.js：
>
> ​			1).reducer的本质是一个函数，接收：preState,action，返回加工后的状态
> ​			2).reducer有两个作用：初始化状态，加工状态
> ​			3).reducer被第一次调用时，是store自动触发的，
> ​							传递的preState是undefined,
> ​							传递的action是:{type:'@@REDUX/INIT_a.2.b.4}
>
> #### (5).在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
>
> ​		备注：redux只负责管理状态，至于状态的改变驱动着页面的展示，要靠我们自己写。



**store.js**

```js
import { legacy_createStore as createStore } from 'redux'
import countReducer from './count_reducer'

export default createStore(countReducer)
```



**count_reducer.js 文件**

```js
const initState=0    //初始化状态值
export default function countReducer(preState = initState, action) {
    console.log('preState, action', preState, action)
    const { type, data } = action
    switch (type) {
        case 'increment':   //如果是加
            return preState + data
        case 'dncrement':   //如果是减
            return preState - data
        default:
            return preState
    }
}
```



**Count.jsx      组件中的代码**

```react
import React, { Component } from 'react'
import { Select, Button } from 'antd';
// 用于获取Redux中获取的状态
import store from '../../redux/store';

export default class Count extends Component {
  selectNumber = 1
  // 加法
  increment = () => {
    store.dispatch({ type: 'increment', data: this.selectNumber * 1 })
  }
  // 减法
  dncrement = () => {
    store.dispatch({ type: 'dncrement', data: this.selectNumber * 1 })
  }
  // 奇数加
  incrementIfOdd = () => {
    if (store.getState() % 2 !== 0) {
      store.dispatch({ type: 'increment', data: this.selectNumber * 1 })
    }
  }
  // 异步加法
  incrementAsync = () => {
    setTimeout(() => {
      store.dispatch({ type: 'increment', data: this.selectNumber * 1 })
    }, 100);
  }

  render() {
    return (
      <div>
        <h1>Count的值为 {store.getState()}</h1>
        <Select defaultValue='1 ' style={{ width: 120, }} onChange={c => { this.selectNumber = c }}
          options={[{ value: 1, label: 1, }, { value: 2, label: 2, }, { value: 3, label: 3, }]} />
        <Button type='primary' onClick={this.increment} >加</Button>
        <Button type='primary' onClick={this.dncrement} >减</Button>
        <Button type='primary' onClick={this.incrementIfOdd} >奇数加</Button>
        <Button type='primary' onClick={this.incrementAsync} >异步加</Button>
      </div>
    )
  }
}

```

**根目录下的index.js**

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// redux 的简洁写法，调用subscrib，不会引起大面积的页面重新刷新，因为有react的diff算法
store.subscribe(() => {
      root.render(<App />);
})


reportWebVitals();

```

> ### 类式组件-完整版

**用于定义名字的 constant.js 文件 **

```js
/**
 * 该模块用于定义action 对象中的type变量名
 */

export const INCREMENT = 'increment'
export const DECREMENT ='decrement'
```

**用于为组件生成action对象  count_action.js 文件 **

```js
/**
 * 该文件专门为Count组件生成action对象
 */
import { INCREMENT, DECREMENT } from "./constant"

export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

```

**用于书写count方法的文件 count_reducer.js**

```js

import {INCREMENT,DECREMENT} from './constant.js'

const initState = 0

export default function countReducer(preState = initState, action) {
    console.log('preState, action', preState, action)
    const { type, data } = action
    switch (type) {
        case INCREMENT:   //如果是加
            return preState + data
        case DECREMENT:   //如果是减
            return preState - data
        default:
            return preState
    }
}
```

**用于创建 Redux 实例 store.js**

```js
import { legacy_createStore as createStore } from 'redux'
import countReducer from './count_reducer'

export default createStore(countReducer)
```

**组件调用**

```react
import React, { Component } from 'react'
import { Select, Button } from 'antd';
// 用于获取Redux中获取的状态
import store from '../../redux/store';
import { createDecrementAction, createIncrementAction } from '../../redux/count_action'

export default class Count extends Component {
  selectNumber = 1
  // 加法
  increment = () => {
    store.dispatch(createIncrementAction(this.selectNumber*1))
  }
  // 减法
  dncrement = () => {
    store.dispatch(createDecrementAction(this.selectNumber * 1))
  }
  // 奇数加
  incrementIfOdd = () => {
    if (store.getState() % 2 !== 0) {
      store.dispatch(createIncrementAction(this.selectNumber * 1))
    }
  }
  // 异步加法
  incrementAsync = () => {
    setTimeout(() => {
      store.dispatch(createIncrementAction(this.selectNumber * 1))
    }, 100);
  }

  render() {
    return (
      <div>
        <h1>Count的值为 {store.getState()}</h1>
        <Select defaultValue='1 ' style={{ width: 120, }} onChange={c => { this.selectNumber = c }}
          options={[{ value: 1, label: 1, }, { value: 2, label: 2, }, { value: 3, label: 3, }]} />
        <Button type='primary' onClick={this.increment} >加</Button>
        <Button type='primary' onClick={this.dncrement} >减</Button>
        <Button type='primary' onClick={this.incrementIfOdd} >奇数加</Button>
        <Button type='primary' onClick={this.incrementAsync} >异步加</Button>
      </div>
    )
  }
}

```

**最后在index.js 中包裹起来**

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// redux 的简洁写法，不会引起大面积的页面重新刷新，因为有react的diff算法
store.subscribe(() => {
      root.render(<App />);
})

```

> ### 类式组件-合并父子组件 简写形式

```js
import { connect } from "react-redux"
import { createDecrementAction, createIncrementAction } from '../../redux/count_action'
import React, { Component } from 'react'
import { Select, Button } from 'antd';
class Count extends Component {
    selectNumber = 1
    // 加法
    increment = () => {
        this.props.jia(this.selectNumber)
    }
    // 减法
    dncrement = () => {
        this.props.jian(this.selectNumber)

    }
    render() {
        return (
            <div>
                <h1>Count的值为{this.props.count} </h1>
                <Select defaultValue='1 ' style={{ width: 120, }} onChange={c => { this.selectNumber = c }}
                    options={[{ value: 1, label: 1, }, { value: 2, label: 2, }, { value: 3, label: 3, }]} />
                <Button type='primary' onClick={this.increment} >加</Button>
                <Button type='primary' onClick={this.dncrement} >减</Button>
            </div>
        )
    }
}

export default connect(
    state => ({ count: state }),
    {
        jia: createIncrementAction,
        jian: createDecrementAction
    }
)(Count)

```

### 函数式组件

**index.ts页面**

```js
import { legacy_createStore } from "redux";
import reducer from "./reducer";

export default legacy_createStore(reducer)
```

**reducer.ts**

```js
const initialState = {name:20}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case type=='123':
    return { ...state, ...payload }

  default:
    return state
  }
}

```

**main.js**   外侧包裹一个 `<Provider store={store}>` 标签    让每个页面都可以获取store的值

```react
import { Provider } from 'react-redux'
import store from './store/index'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter> {/* 路由模式 */}
      <React.Suspense fallback={<div>Loading...</div>} > {/* 懒加载标签 */}
        <App />
      </React.Suspense>
    </BrowserRouter>
  </Provider >
```

**home.tsx**  调用数据

```tsx
import { useSelector } from 'react-redux';
const {num111} = useSelector(state => ({
        num111:state.name
    }))
//-------------------------------------
(<div> {num111} </div>)
```



## 外侧如果不想包一个标签，可以直接使用 Fragment 或者使用<>

> Fragment 可以接收 key值，可以用来进行循环的渲染
>
> <> </>  空标签只能进行包裹但是没有任何作用

```react
import React, { Fragment } from 'react'

render() {
    return (
        <Fragment key={1}>
            <Count />
            <hr />
            <Person/>
        </Fragment>
    )
}
```

## 错误边界

> ### 理解：

错误边界：用来捕获后代组件错误，渲染出备用页面

> ### 特点：

只能捕获后代组件生命周期产生的错误，不能捕获自己组件产生的错误和其他组件在合成事件、定时器中产生的错误

> ### 使用方式：

getDerivedStateFromError配合componentDidCatch

```js
// 生命周期函数，一旦后台组件报错，就会触发
static getDerivedStateFromError(error) {
    console.log(error);
    // 在render之前触发
    // 返回新的state
    return {
        hasError: true,
    };
}

componentDidCatch(error, info) {
    // 统计页面的错误。发送请求发送到后台去
    console.log(error, info);
}
```

## 组件通信方式总结

> ## 方式：

```js
	props：
		(1).children props
		(2).render props
	消息订阅-发布：
		pubs-sub、event等等
	集中式管理：
		redux、dva等等
	conText:
		生产者-消费者模式
```

> ## 组件间的关系

```txt
	父子组件：props
	兄弟组件(非嵌套组件)：消息订阅-发布、集中式管理
	祖孙组件(跨级组件)：消息订阅-发布、集中式管理、conText(用的少)
```



## Function过程传参

> #### Params 传参





> #### Search 传参

```js
import {  useSearchParams } from 'react-router-dom'
const [search, setsearch] = useSearchParams()
console.log( search.get('id') )
```



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

## Hook

> #####  useLocation()    可以查看路由表信息 

```react
const currentRoute = useLocation()  
console.log(currentRoute)
 // 结果 {pathname: '/comp2', search: '', hash: '', state: null, key: 'xnmozq4r'}   

```


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

