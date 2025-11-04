<template><div><h1 id="_1-理解react-router" tabindex="-1"><a class="header-anchor" href="#_1-理解react-router"><span>1. 理解react-router</span></a></h1>
<pre><code>react的一个插件库
专门用来实现一个SPA应用
基于react的项目基本都会用到此库
</code></pre>
<h1 id="_2-几个重要问题" tabindex="-1"><a class="header-anchor" href="#_2-几个重要问题"><span>2. 几个重要问题</span></a></h1>
<h2 id="_1-spa应用" tabindex="-1"><a class="header-anchor" href="#_1-spa应用"><span>1). SPA应用</span></a></h2>
<pre><code>单页Web应用（single page web application，SPA）
整个应用只有一个完整的页面
点击页面中的链接不会刷新页面, 本身也不会向服务器发请求
当点击链接时, 只会做页面的局部更新
数据都需要通过ajax请求获取, 并在前端异步展现
</code></pre>
<h2 id="_2-路由" tabindex="-1"><a class="header-anchor" href="#_2-路由"><span>2). 路由</span></a></h2>
<pre><code>1. 什么是路由?
	一个路由就是一个映射关系(key:value)
	key为路由路径, value可能是function/component
2. 路由分类
	后台路由: node服务器端路由, value是function, 用来处理客户端提交的请求并返回一个响应数据
	前台路由: 浏览器端路由, value是component, 当请求的是路由path时, 浏览器端前没有发送http请求, 但界面会更新显示对应的组件 
3. 后台路由
	* 注册路由: router.get(path, function(req, res))
	* 当node接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据
* 前端路由
	* 注册路由: &lt;Route path=&quot;/about&quot; component={About}&gt;
	* 当浏览器的hash变为#about时, 当前路由组件就会变为About组件
</code></pre>
<h2 id="_3-关于url中的" tabindex="-1"><a class="header-anchor" href="#_3-关于url中的"><span>3). 关于url中的#</span></a></h2>
<pre><code>1. 理解#
	'#'代表网页中的一个位置。其右面的字符，就是该位置的标识符
	改变#不触发网页重载
	改变#会改变浏览器的访问历史
2. 操作#
	window.location.hash读取#值
	window.onhashchange = func 监听hash改变
3. 学习资源: 
	阮一峰教程: http://www.ruanyifeng.com/blog/2011/03/url_hash.html
</code></pre>
<h1 id="_3-react-router的学习资源" tabindex="-1"><a class="header-anchor" href="#_3-react-router的学习资源"><span>3. react-router的学习资源</span></a></h1>
<pre><code>github主页: https://github.com/ReactTraining/react-router
官网教程: https://github.com/reactjs/react-router-tutorial
阮一峰教程: http://www.ruanyifeng.com/blog/2016/05/react_router.html
</code></pre>
<h1 id="_4-相关api" tabindex="-1"><a class="header-anchor" href="#_4-相关api"><span>4. 相关API</span></a></h1>
<h2 id="_1-react-router中的相关组件" tabindex="-1"><a class="header-anchor" href="#_1-react-router中的相关组件"><span>1). react-router中的相关组件:</span></a></h2>
<pre><code>Router: 路由器组件, 用来包含各个路由组件
Route: 路由组件, 注册路由 
IndexRoute: 默认子路由组件
hashHistory: 路由的切换由URL的hash变化决定，即URL的#部分发生变化
Link: 路由链接组件
</code></pre>
<h2 id="_2-router-路由器组件" tabindex="-1"><a class="header-anchor" href="#_2-router-路由器组件"><span>2). Router: 路由器组件</span></a></h2>
<pre><code>属性:  history={hashHistory} 用来监听浏览器地址栏的变化, 并将URL解析成一个地址对象，供React Router匹配
子组件: Route
</code></pre>
<h2 id="_3-route-路由组件" tabindex="-1"><a class="header-anchor" href="#_3-route-路由组件"><span>3). Route: 路由组件</span></a></h2>
<pre><code>属性1: path=&quot;/xxx&quot;  
属性2: component={Xxx}
根路由组件: path=&quot;/&quot;的组件, 一般为App
子路由组件: 子&lt;Route&gt;配置的组件
</code></pre>
<h2 id="_4-indexroute-默认路由" tabindex="-1"><a class="header-anchor" href="#_4-indexroute-默认路由"><span>4). IndexRoute: 默认路由</span></a></h2>
<pre><code>当父路由被请求时, 默认就会请求此路由组件
</code></pre>
<h2 id="_5-hashhistory" tabindex="-1"><a class="header-anchor" href="#_5-hashhistory"><span>5). hashHistory</span></a></h2>
<pre><code>用于Router组件的history属性
作用: 为地址url生成?_k=hash, 用于内部保存对应的state
</code></pre>
<h2 id="_6-link-路由链接" tabindex="-1"><a class="header-anchor" href="#_6-link-路由链接"><span>6). Link: 路由链接</span></a></h2>
<pre><code>属性1: to=&quot;/xxx&quot;
属性2: activeClassName=&quot;active&quot;
</code></pre>
<h1 id="_5-react-router的基本使用" tabindex="-1"><a class="header-anchor" href="#_5-react-router的基本使用"><span>5. react-router的基本使用</span></a></h1>
<h2 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载"><span>1). 下载</span></a></h2>
<pre><code>npm install react-router --save
</code></pre>
<h2 id="_2-定义各个路由组件" tabindex="-1"><a class="header-anchor" href="#_2-定义各个路由组件"><span>2). 定义各个路由组件</span></a></h2>
<pre><code>1. About.js
  import React from 'react'
  function About() {
    return &lt;div&gt;About组件内容&lt;/div&gt;
  }
  export default About
2. Home.js
  import React from 'react'
  function Home() {
    return &lt;div&gt;Home组件内容2&lt;/div&gt;
  }
  export default Home
3. Repos.js
  import React, {Component} from 'react'
  export default class Repos extends Component {
    render() {
      return (
        &lt;div&gt;Repos组件&lt;/div&gt;
      )
    }
  }
4. App.js
import React, {Component} from 'react'
import {Link} from 'react-router'

export default class App extends Component {
  render() {
    return (
      &lt;div&gt;
        &lt;h2&gt;Hello, React Router!&lt;/h2&gt;
        &lt;ul&gt;
          &lt;li&gt;&lt;Link to=&quot;/about&quot; activeClassName=&quot;active&quot;&gt;About2&lt;/Link&gt;&lt;/li&gt;
          &lt;li&gt;&lt;Link to=&quot;/repos&quot; activeClassName=&quot;active&quot;&gt;Repos2&lt;/Link&gt;&lt;/li&gt;
        &lt;/ul&gt;
        {this.props.children}
      &lt;/div&gt;
    )
  }
}
</code></pre>
<h2 id="_3-index-js-注册路由-渲染路由器标签" tabindex="-1"><a class="header-anchor" href="#_3-index-js-注册路由-渲染路由器标签"><span>3). index.js: 注册路由, 渲染路由器标签</span></a></h2>
<pre><code>import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Home from './modules/Home'

render((
  &lt;Router history={hashHistory}&gt;
    &lt;Route path=&quot;/&quot; component={App}&gt;
      &lt;IndexRoute component={Home}/&gt;
      &lt;Route path=&quot;/about&quot; component={About}&gt;&lt;/Route&gt;
      &lt;Route path=&quot;/repos&quot; component={Repos}&gt;&lt;/Route&gt;
    &lt;/Route&gt;
  &lt;/Router&gt;
), document.getElementById('app'))
</code></pre>
<h2 id="_3-主页面-index-html" tabindex="-1"><a class="header-anchor" href="#_3-主页面-index-html"><span>3). 主页面: index.html</span></a></h2>
<pre><code>&lt;style&gt;
  .active {
    color: red;
  }
&lt;/style&gt;
</code></pre>
<h1 id="_6-向路由组件传递请求参数" tabindex="-1"><a class="header-anchor" href="#_6-向路由组件传递请求参数"><span>6. 向路由组件传递请求参数</span></a></h1>
<h2 id="_1-repo-js-repos组件下的分路由组件" tabindex="-1"><a class="header-anchor" href="#_1-repo-js-repos组件下的分路由组件"><span>1). repo.js: repos组件下的分路由组件</span></a></h2>
<pre><code>import React from 'react'
export default function ({params}) {
  let {username, repoName} = params
  return (
    &lt;div&gt;用户名:{username}, 仓库名:{repoName}&lt;/div&gt;
  )
}
</code></pre>
<h2 id="_2-repos-js" tabindex="-1"><a class="header-anchor" href="#_2-repos-js"><span>2). repos.js</span></a></h2>
<pre><code>import React from 'react'
import NavLink from './NavLink'

export default class Repos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      repos: [
        {username: 'faceback', repoName: 'react'},
        {username: 'faceback', repoName: 'react-router'},
        {username: 'Angular', repoName: 'angular'},
        {username: 'Angular', repoName: 'angular-cli'}
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit () {

    const repos = this.state.repos
    repos.push({
      username: this.refs.username.value,
      repoName: this.refs.repoName.value
    })
    this.setState({repos})
    this.refs.username.value = ''
    this.refs.repoName.value = ''
  }

  render() {
    return (
      &lt;div&gt;
        &lt;h2&gt;Repos&lt;/h2&gt;
        &lt;ul&gt;
          {
            this.state.repos.map((repo, index) =&gt; {
              const to = `/repos/${repo.username}/${repo.repoName}`
              return (
                &lt;li key={index}&gt;
                  &lt;Link to={to} activeClassName='active'&gt;{repo.repoName}&lt;/Link&gt;
                &lt;/li&gt;
              )
            })
          }
          &lt;li&gt;
            &lt;form onSubmit={this.handleSubmit}&gt;
              &lt;input type=&quot;text&quot; placeholder=&quot;用户名&quot; ref='username'/&gt; / {' '}
              &lt;input type=&quot;text&quot; placeholder=&quot;仓库名&quot; ref='repoName'/&gt;{' '}
              &lt;button type=&quot;submit&quot;&gt;添加&lt;/button&gt;
            &lt;/form&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
        {this.props.children}
      &lt;/div&gt;
    );
  }
}
</code></pre>
<h2 id="_3-index-js-配置路由" tabindex="-1"><a class="header-anchor" href="#_3-index-js-配置路由"><span>3). index.js: 配置路由</span></a></h2>
<pre><code>&lt;Route path=&quot;/repos&quot; component={Repos}&gt;
  &lt;Route path=&quot;/repos/:username/:repoName&quot; component={Repo}/&gt;
&lt;/Route&gt;
</code></pre>
<h1 id="_7-优化link组件" tabindex="-1"><a class="header-anchor" href="#_7-优化link组件"><span>7. 优化Link组件</span></a></h1>
<h2 id="_1-navlink-js" tabindex="-1"><a class="header-anchor" href="#_1-navlink-js"><span>1). NavLink.js</span></a></h2>
<pre><code>import React from 'react'
import {Link} from 'react-router'
export default function NavLink(props) {
  return &lt;Link {...props} activeClassName=&quot;active&quot;/&gt;
}
</code></pre>
<h2 id="_2-repos-js-1" tabindex="-1"><a class="header-anchor" href="#_2-repos-js-1"><span>2). Repos.js</span></a></h2>
<pre><code>&lt;NavLink to={to}&gt;{repo.repoName}&lt;/NavLink&gt;
</code></pre>
</div></template>


