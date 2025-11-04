<template><div><h1 id="_1-使用react脚手架创建一个react应用" tabindex="-1"><a class="header-anchor" href="#_1-使用react脚手架创建一个react应用"><span>1. 使用React脚手架创建一个React应用</span></a></h1>
<h2 id="_1-react脚手架" tabindex="-1"><a class="header-anchor" href="#_1-react脚手架"><span>1). react脚手架</span></a></h2>
<pre><code>1. xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目
	* 包含了所有需要的配置
	* 指定好了所有的依赖
	* 可以直接安装/编译/运行一个简单效果
2. react提供了一个专门用于创建react项目的脚手架库: create-react-app
3. 项目的整体技术架构为: react + webpack + es6  + babel + eslint
</code></pre>
<h2 id="_2-创建项目并启动" tabindex="-1"><a class="header-anchor" href="#_2-创建项目并启动"><span>2). 创建项目并启动</span></a></h2>
<pre><code>npm install -g create-react-app
create-react-app react-app
cd react-app
npm start
</code></pre>
<h2 id="_3-使用脚手架开发的项目的特点" tabindex="-1"><a class="header-anchor" href="#_3-使用脚手架开发的项目的特点"><span>3). 使用脚手架开发的项目的特点</span></a></h2>
<pre><code>模块化: js是一个一个模块编写的
组件化: 界面是由多个组件组合编写实现的
工程化: 实现了自动构建/运行/打包的项目
</code></pre>
<h2 id="_4-组件化编写项目的流程" tabindex="-1"><a class="header-anchor" href="#_4-组件化编写项目的流程"><span>4). 组件化编写项目的流程</span></a></h2>
<pre><code>拆分组件
实现静态组件---&gt;静态页面
实现动态组件
	动态显示初始化数据
	交互
</code></pre>
<h1 id="_2-app1-实现一个评论管理功能" tabindex="-1"><a class="header-anchor" href="#_2-app1-实现一个评论管理功能"><span>2. app1: 实现一个评论管理功能</span></a></h1>
<h2 id="_1-拆分组件" tabindex="-1"><a class="header-anchor" href="#_1-拆分组件"><span>1). 拆分组件:</span></a></h2>
<pre><code>应用组件: App
添加评论组件: CommentAdd
评论项组件: CommentItem
评论列表组件: CommentList
</code></pre>
<h2 id="_2-确定组件的state和props" tabindex="-1"><a class="header-anchor" href="#_2-确定组件的state和props"><span>2). 确定组件的state和props:</span></a></h2>
<pre><code>App: 
	* state: comments/array
CommentAdd
	* state: username/string, content/string
	* props: add/func
commentList
  	* props: comments/array, delete/func
CommentItem
	* props: comment/object, delete/func, index/number
</code></pre>
<h2 id="_3-编写静态组件" tabindex="-1"><a class="header-anchor" href="#_3-编写静态组件"><span>3). 编写静态组件</span></a></h2>
<pre><code>拆分页面
拆分css
</code></pre>
<h2 id="_4-实现动态组件" tabindex="-1"><a class="header-anchor" href="#_4-实现动态组件"><span>4). 实现动态组件</span></a></h2>
<pre><code>1. 动态展示初始化数据
  * 初始化状态数据
  * 传递属性数据
2. 响应用户操作, 更新组件界面
  * 绑定事件监听, 并处理
  * 更新state
</code></pre>
<h1 id="_3-app2-实现github用户搜索功能" tabindex="-1"><a class="header-anchor" href="#_3-app2-实现github用户搜索功能"><span>3. app2: 实现github用户搜索功能</span></a></h1>
<h2 id="_1-react应用中的ajax请求" tabindex="-1"><a class="header-anchor" href="#_1-react应用中的ajax请求"><span>1). react应用中的ajax请求</span></a></h2>
<pre><code>axios: 包装XMLHttpRequest对象, promise风格, 支持浏览端/node服务器端
fetch: 浏览器内置语法, promise风格, 老浏览器不支持, 可以引入fetch.js兼容包
</code></pre>
<h2 id="_2-拆分组件" tabindex="-1"><a class="header-anchor" href="#_2-拆分组件"><span>2). 拆分组件</span></a></h2>
<pre><code>App
	* state: searchName/string
Search
  	* props: setSearchName/func
List
  	* props: searchName/string
  	* state: firstView/bool, loading/bool, users/array, errMsg/string
</code></pre>
<h2 id="_3-编写组件" tabindex="-1"><a class="header-anchor" href="#_3-编写组件"><span>3). 编写组件</span></a></h2>
<pre><code>编写静态组件
编写动态组件
	componentWillReceiveProps(nextProps): 监视接收到新的props, 发送ajax
	使用axios库发送ajax请求
</code></pre>
<h1 id="_4-组件间通信总结" tabindex="-1"><a class="header-anchor" href="#_4-组件间通信总结"><span>4. 组件间通信总结</span></a></h1>
<h2 id="_1-方式一-通过props传递" tabindex="-1"><a class="header-anchor" href="#_1-方式一-通过props传递"><span>1). 方式一: 通过props传递</span></a></h2>
<pre><code>共同的数据放在父组件上, 特有的数据放在自己组件内部(state)
一般数据--&gt;父组件传递数据给子组件--&gt;子组件读取数据
函数数据--&gt;子组件传递数据给父组件--&gt;子组件调用函数
问题: 多层传递属性麻烦, 兄弟组件通信不方便
</code></pre>
<h2 id="_2-方式二-使用消息订阅-subscribe-发布-publish-机制-自定义事件机制" tabindex="-1"><a class="header-anchor" href="#_2-方式二-使用消息订阅-subscribe-发布-publish-机制-自定义事件机制"><span>2). 方式二: 使用消息订阅(subscribe)-发布(publish)机制: 自定义事件机制</span></a></h2>
<pre><code>工具库: PubSubJS
下载: npm install pubsub-js --save
使用: 
  import PubSub from 'pubsub-js' //引入
  PubSub.subscribe('delete', function(msg, data){ }); //订阅
  PubSub.publish('delete', data) //发布消息
优点: 可以支持任意关系组件之间的通信
</code></pre>
<h2 id="_3-事件监听理解" tabindex="-1"><a class="header-anchor" href="#_3-事件监听理解"><span>3). 事件监听理解</span></a></h2>
<pre><code>1. DOM事件
	* 绑定事件监听
		* 事件名(类型): 只有有限的几个, 不能随便写
		* 回调函数
	* 用户操作触发事件(event)
		* 事件名(类型)
		* 数据
2. 自定义事件
	* 绑定事件监听
		* 事件名(类型): 任意
		* 回调函数: 通过形参接收数据, 在函数体处理事件
	* 触发事件(编码)
		* 事件名(类型): 与绑定的事件监听的事件名一致
		* 数据: 会自动传递给回调函数
</code></pre>
<h1 id="_5-es6新语法总结" tabindex="-1"><a class="header-anchor" href="#_5-es6新语法总结"><span>5. ES6新语法总结</span></a></h1>
<pre><code>定义变量/常量: const/let
解构赋值: let {a, b} = this.props   import {aa} from 'xxx'
对象的简洁表达: {a, b}
箭头函数: 
	组件的自定义方法: xxx = () =&gt; {}
	map/filter的回调方法: (item, index) =&gt; {}
	优点:
		* 简洁
		* 没有自己的this,使用引用this查找的是外部this
扩展运算符: ...
	拆解对象:  const MyProps = {}, &lt;Xxx {...MyProps}&gt;
类: class/extends/constructor/super
ES6模块化: export default | import
</code></pre>
<h1 id="_6-项目打包运行" tabindex="-1"><a class="header-anchor" href="#_6-项目打包运行"><span>6. 项目打包运行</span></a></h1>
<pre><code>npm run build  //生成打包文件
npm install -g serve  //全局下载服务器包
serve build  //通过服务器命令运行打包项目
访问: http://localhost:5000  //浏览器访问
</code></pre>
</div></template>


