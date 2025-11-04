import{_ as a,c as t,a as n,o as r}from"./app-C9GN3QXF.js";const s={};function c(i,e){return r(),t("div",null,[...e[0]||(e[0]=[n(`<h1 id="_1-最流行的开源react-ui组件库" tabindex="-1"><a class="header-anchor" href="#_1-最流行的开源react-ui组件库"><span>1. 最流行的开源React UI组件库</span></a></h1><h2 id="_1-material-ui-国外" tabindex="-1"><a class="header-anchor" href="#_1-material-ui-国外"><span>1). material-ui(国外)</span></a></h2><pre><code>官网: http://www.material-ui.com/#/
github: https://github.com/callemall/material-ui
</code></pre><h2 id="_2-ant-design-国内蚂蚁金服" tabindex="-1"><a class="header-anchor" href="#_2-ant-design-国内蚂蚁金服"><span>2). ant-design(国内蚂蚁金服)</span></a></h2><pre><code>官网: https://ant.design/
github: https://github.com/ant-design/ant-design/
</code></pre><h1 id="_2-ant-design使用入门" tabindex="-1"><a class="header-anchor" href="#_2-ant-design使用入门"><span>2. ant-design使用入门</span></a></h1><h2 id="_1-使用create-react-app搭建react开发环境" tabindex="-1"><a class="header-anchor" href="#_1-使用create-react-app搭建react开发环境"><span>1). 使用create-react-app搭建react开发环境</span></a></h2><pre><code>npm install create-react-app -g
create-react-app antd-demo
cd antd-demo
npm start
</code></pre><h2 id="_2-搭建antd的基本开发环境" tabindex="-1"><a class="header-anchor" href="#_2-搭建antd的基本开发环境"><span>2). 搭建antd的基本开发环境</span></a></h2><pre><code>1. 下载
	npm install antd@2.7.4 --save
2. src/App.js
    import React, { Component } from &#39;react&#39;;
    import { Button } from &#39;antd&#39;;
    import &#39;./App.css&#39;;
    
    class App extends Component {
      render() {
        return (
          &lt;div className=&quot;app&quot;&gt;
            &lt;Button type=&quot;primary&quot;&gt;Button&lt;/Button&gt;
          &lt;/div&gt;
        );
      }
    }
	export default App;
3. src/App.css
    @import &#39;~antd/dist/antd.css&#39;;
    
    .app {
      text-align: center;
    }
</code></pre><h2 id="_3-实现按需加载-组件js-组件css" tabindex="-1"><a class="header-anchor" href="#_3-实现按需加载-组件js-组件css"><span>3). 实现按需加载(组件js/组件css)</span></a></h2><pre><code>1. 使用eject命令将所有内建的配置暴露出来
	npm run eject
2. 下载babel-plugin-import(用于按需加载组件代码和样式的 babel 插件)
	npm install babel-plugin-import --save-dev
3. 修改配置: config/webpack.config.dev.js
    // Process JS with Babel.
    {
      test: /\\.(js|jsx)$/,
      include: paths.appSrc,
      loader: &#39;babel&#39;,
      options: {
      +   plugins: [
      +     [&#39;import&#39;, { libraryName: &#39;antd&#39;, style: &#39;css&#39; }],
      +   ],
          // This is a feature of \`babel-loader\` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true
        }
	 },
4. 去除引入全量样式的语句: src/App.css
    @import &#39;~antd/dist/antd.css&#39;
</code></pre>`,12)])])}const p=a(s,[["render",c]]),o=JSON.parse('{"path":"/article/s70tllzl/","title":"React-ui笔记","lang":"zh-CN","frontmatter":{"title":"React-ui笔记","date":"2022-08-04T00:00:00.000Z","tags":["React","React-ui"],"categories":["自学篇"],"createTime":"2025/08/24 00:25:17","permalink":"/article/s70tllzl/"},"readingTime":{"minutes":1.02,"words":305},"git":{"createdTime":1762223206000,"updatedTime":1762223792000,"contributors":[{"name":"袁果锅","username":"","email":"2914310412@qq.com","commits":2,"avatar":"https://gravatar.com/avatar/ebb36e92893d0bad96657e83c4e1e8be47c5ebe9e1f87275acd48573e4759004?d=retro"}]},"filePathRelative":"React笔记/04_react-UI_教程.md","headers":[],"categoryList":[{"id":"5782db","sort":10010,"name":"React笔记"}]}');export{p as comp,o as data};
