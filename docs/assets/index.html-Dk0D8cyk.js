import{_ as t,c as r,a,o as n}from"./app-xRlI9cPS.js";const d={};function c(s,e){return n(),r("div",null,[...e[0]||(e[0]=[a(`<h1 id="_0-redux要点" tabindex="-1"><a class="header-anchor" href="#_0-redux要点"><span>0. redux要点</span></a></h1><pre><code>1. redux理解
2. redux相关API
3. redux核心概念(3个)
4. redux工作流程
5. 使用redux及相关库编码
</code></pre><p>#1. redux理解 什么?: redux是专门做状态管理的独立第3方库, 不是react插件 作用?: 对应用中状态进行集中式的管理(写/读) 开发: 与react-redux, redux-thunk等插件配合使用</p><h1 id="_2-redux相关api" tabindex="-1"><a class="header-anchor" href="#_2-redux相关api"><span>2. redux相关API</span></a></h1><pre><code>redux中包含: createStore(), applyMiddleware(), combineReducers()
store对象: getState(), dispatch(), subscribe()
react-redux: &lt;Provider&gt;, connect()()
</code></pre><h1 id="_3-redux核心概念-3个" tabindex="-1"><a class="header-anchor" href="#_3-redux核心概念-3个"><span>3. redux核心概念(3个)</span></a></h1><pre><code>action: 
	默认是对象(同步action), {type: &#39;xxx&#39;, data: value}, 需要通过对应的actionCreator产生, 
	它的值也可以是函数(异步action), 需要引入redux-thunk才可以
reducer
	根据老的state和指定的action, 返回一个新的state
	不能修改老的state
store
	redux最核心的管理对象
	内部管理着: state和reducer
	提供方法: getState(), dispatch(action), subscribe(listener)
</code></pre><h1 id="_4-redux工作流程" tabindex="-1"><a class="header-anchor" href="#_4-redux工作流程"><span>4. redux工作流程</span></a></h1><p><img src="http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg" alt=""><img src="https://i.imgur.com/2R5G8bG.png" alt=""></p><h1 id="_5-使用redux及相关库编码" tabindex="-1"><a class="header-anchor" href="#_5-使用redux及相关库编码"><span>5. 使用redux及相关库编码</span></a></h1><pre><code>需要引入的库: 
	redux
	react-redux
	redux-thunk
	redux-devtools-extension(这个只在开发时需要)
redux文件夹: 
	action-types.js
	actions.js
	reducers.js
	store.js
组件分2类: 
	ui组件(components): 不使用redux相关PAI
	容器组件(containers): 使用redux相关API
</code></pre>`,11)])])}const o=t(d,[["render",c]]),u=JSON.parse('{"path":"/article/4q78nkap/","title":"redux笔记","lang":"zh-CN","frontmatter":{"title":"redux笔记","date":"2022-08-04T00:00:00.000Z","tags":["React","redux"],"categories":["自学篇"],"createTime":"2025/08/24 00:25:17","permalink":"/article/4q78nkap/"},"readingTime":{"minutes":1.09,"words":326},"git":{"createdTime":1762223206000,"updatedTime":1762223792000,"contributors":[{"name":"袁果锅","username":"","email":"2914310412@qq.com","commits":2,"avatar":"https://gravatar.com/avatar/ebb36e92893d0bad96657e83c4e1e8be47c5ebe9e1f87275acd48573e4759004?d=retro"}]},"filePathRelative":"React笔记/05_redux笔记.md","headers":[],"categoryList":[{"id":"5782db","sort":10010,"name":"React笔记"}]}');export{o as comp,u as data};
