<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<blockquote>
<p>可以参考项目  <a href="https://gitee.com/small_bud_star/vue3-tsx-todo" target="_blank" rel="noopener noreferrer">星星在线/vue3-tsx-todo - 码云 - 开源中国</a></p>
<p>笔记参考 <a href="https://zhuanlan.zhihu.com/p/563203507" target="_blank" rel="noopener noreferrer">vue3+tsx开发语法详解 - 知乎</a></p>
</blockquote>
<h2 id="安装jsx库" tabindex="-1"><a class="header-anchor" href="#安装jsx库"><span><strong>安装JSX库</strong></span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>pnpm install @vitejs/plugin-vue-jsx -D</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>安装完之后在<code v-pre>vite.config.ts</code>进行插件使用，代码如下：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>import { defineConfig } from "vite";</span></span>
<span class="line"><span>import vue from "@vitejs/plugin-vue";</span></span>
<span class="line"><span>import vueJsx from "@vitejs/plugin-vue-jsx";</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineConfig({</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    vue(),</span></span>
<span class="line"><span>    vueJsx() //插件使用</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>});</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就可以愉快的使用<code v-pre>TSX</code>来开发<code v-pre>Vue</code>组件了，下面主要说一下<code v-pre>SFC</code>和<code v-pre>TSX</code>的部分区别。</p>
<h2 id="基本语法对照-sfc" tabindex="-1"><a class="header-anchor" href="#基本语法对照-sfc"><span><strong>基本语法对照 SFC</strong></span></a></h2>
<h3 id="definecomponent-和-setup" tabindex="-1"><a class="header-anchor" href="#definecomponent-和-setup"><span><strong>defineComponent 和 setup</strong></span></a></h3>
<p>SFC方式结构固定：template、script、style</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div>Hello World&#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;script setup lang="ts"></span></span>
<span class="line"><span>&#x3C;/script></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;style scope></span></span>
<span class="line"><span>&#x3C;/style></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TSX方式就完全是一个ts文件的写法，没有模板template和样式style</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>import { defineComponent } from 'vue';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>  setup() {</span></span>
<span class="line"><span>    // Todo</span></span>
<span class="line"><span>    return () => &#x3C;div>Hello World&#x3C;/div></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setup中函数的返回值有多种方式，可以直接返回html：<code v-pre>&lt;div&gt;Hello World&lt;/div&gt;</code>，这个适合结构简单的页面，如果返回比较多，可以使用如下方式：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>import { defineComponent } from 'vue';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>  setup() {</span></span>
<span class="line"><span>    // Todo</span></span>
<span class="line"><span>    return () => (</span></span>
<span class="line"><span>      &#x3C;div></span></span>
<span class="line"><span>        &#x3C;div>Child1&#x3C;/div></span></span>
<span class="line"><span>        &#x3C;div>Child2&#x3C;/div></span></span>
<span class="line"><span>        &#x3C;div>Child3&#x3C;/div></span></span>
<span class="line"><span>      &#x3C;/div></span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是多节点，可以使用空符号包裹</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>return () => (</span></span>
<span class="line"><span>  &#x3C;></span></span>
<span class="line"><span>    &#x3C;div>Child1&#x3C;/div></span></span>
<span class="line"><span>    &#x3C;div>Child2&#x3C;/div></span></span>
<span class="line"><span>    &#x3C;div>Child3&#x3C;/div></span></span>
<span class="line"><span>  &#x3C;/></span></span>
<span class="line"><span>)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在以上的方式中我们把除了布局以外的逻辑都写在<code v-pre>//Todo</code>部分，但是有时候我们需要做一些按条件渲染的逻辑，那么也可以在<code v-pre>return</code>里加处理逻辑，例如：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>import { defineComponent } from 'vue';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>  setup() {</span></span>
<span class="line"><span>    // Todo</span></span>
<span class="line"><span>    return () => {</span></span>
<span class="line"><span>      if (something) {</span></span>
<span class="line"><span>        return (</span></span>
<span class="line"><span>          &#x3C;div></span></span>
<span class="line"><span>            &#x3C;div>Child1&#x3C;/div></span></span>
<span class="line"><span>            &#x3C;div>Child2&#x3C;/div></span></span>
<span class="line"><span>            &#x3C;div>Child3&#x3C;/div></span></span>
<span class="line"><span>          &#x3C;/div></span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>      } else {</span></span>
<span class="line"><span>        return (</span></span>
<span class="line"><span>          &#x3C;div>noChild&#x3C;/div></span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方式类似<code v-pre>v-if</code>，但是和<code v-pre>v-if</code>还是有点区别，<code v-pre>v-if</code>可以作用在更小的范围，而这种方式只适合整个组件的条件渲染，这个可能不好理解，在下面<code v-pre>v-if</code>的使用中我们会看到区别。</p>
<h2 id="v-if" tabindex="-1"><a class="header-anchor" href="#v-if"><span><strong>v-if</strong></span></a></h2>
<p>使用条件判断语句来实现v-if的功能，一般是<a href="https://zhida.zhihu.com/search?content_id=213288748&amp;content_type=Article&amp;match_order=1&amp;q=%E4%B8%89%E7%9B%AE%E8%BF%90%E7%AE%97%E7%AC%A6&amp;zhida_source=entity" target="_blank" rel="noopener noreferrer">三目运算符</a></p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// SFC</span></span>
<span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div></span></span>
<span class="line"><span>    &#x3C;span v-if="condition ">A&#x3C;/span></span></span>
<span class="line"><span>    &#x3C;span v-else>B&#x3C;/span></span></span>
<span class="line"><span>  &#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX</span></span>
<span class="line"><span>return () => (</span></span>
<span class="line"><span>  &#x3C;div></span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      condition ?  &#x3C;span>A&#x3C;/span> : &#x3C;span>B&#x3C;/span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  &#x3C;/div></span></span>
<span class="line"><span>)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这里你可以看到<code v-pre>v-if</code>的使用和我们上面的条件返回不一样，区别就是整体渲染没有大的变化，只是其中部分地方要按条件显示。</p>
<h3 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind"><span><strong><a href="https://zhida.zhihu.com/search?content_id=213288748&amp;content_type=Article&amp;match_order=1&amp;q=v-bind&amp;zhida_source=entity" target="_blank" rel="noopener noreferrer">v-bind</a></strong></span></a></h3>
<p>绑定变量，也就是简写的:冒号，修改方式就是将冒号去掉，把双引号改为大括号</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// SFC</span></span>
<span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div :class="c_class" :style="c_style" :custom="custom"></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX</span></span>
<span class="line"><span>return () => (</span></span>
<span class="line"><span>  &#x3C;div class={c_class} style={c_style} custom={custom}></span></span>
<span class="line"><span>)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for"><span><strong>v-for</strong></span></a></h3>
<p>采用map循环的方式，返回一个数组</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// SFC</span></span>
<span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div v-for="(index, item) in list" :key="item">{{item}}&#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX</span></span>
<span class="line"><span>return () => (</span></span>
<span class="line"><span>  &#x3C;></span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      list.map((item, index) => &#x3C;div>{item}&#x3C;/div></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  &#x3C;/></span></span>
<span class="line"><span>)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义指令" tabindex="-1"><a class="header-anchor" href="#自定义指令"><span><strong>自定义指令</strong></span></a></h3>
<p>自定义指令和普通指令<code v-pre>v-model</code>一样</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// SFC</span></span>
<span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div v-custom="command">自定义指令&#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX</span></span>
<span class="line"><span>return () => (</span></span>
<span class="line"><span>  &#x3C;div v-custom={command}>自定义指令&#x3C;/div></span></span>
<span class="line"><span>)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽"><span><strong>插槽</strong></span></a></h3>
<p>插槽有两种实现方式，一种是用<code v-pre>v-slots</code>绑定对象，一种是直接在元素中使用对象。</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// SFC child</span></span>
<span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div></span></span>
<span class="line"><span>    &#x3C;slot>默认插槽: default&#x3C;/slot></span></span>
<span class="line"><span>    &#x3C;br /></span></span>
<span class="line"><span>    &#x3C;slot name="header">具名插槽：header&#x3C;/slot></span></span>
<span class="line"><span>    &#x3C;br /></span></span>
<span class="line"><span>    &#x3C;slot name="main" :var1="111" class="item" :var2="222">作用域插槽：main&#x3C;/slot></span></span>
<span class="line"><span>  &#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// SFC parent</span></span>
<span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div></span></span>
<span class="line"><span>    &#x3C;child></span></span>
<span class="line"><span>      我就是默认的</span></span>
<span class="line"><span>      &#x3C;template #main="row"> 我是主要的{{ row.var1 }} &#x3C;/template></span></span>
<span class="line"><span>      &#x3C;template #header>我是头&#x3C;/template></span></span>
<span class="line"><span>    &#x3C;/child></span></span>
<span class="line"><span>  &#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX child</span></span>
<span class="line"><span>import { defineComponent } from 'vue';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>  setup(props, { slots }) {</span></span>
<span class="line"><span>    return () => (</span></span>
<span class="line"><span>      &#x3C;div></span></span>
<span class="line"><span>        默认插槽: {slots.default &#x26;&#x26; slots.default()}</span></span>
<span class="line"><span>        &#x3C;br /></span></span>
<span class="line"><span>        具名插槽: {slots.header &#x26;&#x26; slots.header()}</span></span>
<span class="line"><span>        &#x3C;br /></span></span>
<span class="line"><span>        作用域插槽:{slots.main &#x26;&#x26; slots.main({ name: '我是作用域插槽的传值' })}</span></span>
<span class="line"><span>      &#x3C;/div></span></span>
<span class="line"><span>    );</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX parent 第一种方式</span></span>
<span class="line"><span>return () => (</span></span>
<span class="line"><span>  &#x3C;Child v-slots={{
      default: () => '默认的内容是',
      header: () => '我是有名称的',
      main: (props: Record<'name', string>) => '我才是主要的' + props.name
    }}></span></span>
<span class="line"><span>  &#x3C;/Child></span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第二种方式</span></span>
<span class="line"><span>return () => (</span></span>
<span class="line"><span>  &#x3C;Child v-slots={{
      default: () => '默认的内容是',
      header: () => '我是有名称的',
      main: (props: Record<'name', string>) => '我才是主要的' + props.name
    }}></span></span>
<span class="line"><span>  &#x3C;/Child></span></span>
<span class="line"><span>)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span><strong>props</strong></span></a></h3>
<p><a href="https://zhida.zhihu.com/search?content_id=213288748&amp;content_type=Article&amp;match_order=1&amp;q=%E7%88%B6%E7%BB%84%E4%BB%B6&amp;zhida_source=entity" target="_blank" rel="noopener noreferrer">父组件</a>向子组件传值</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// SFC</span></span>
<span class="line"><span>defineProps&#x3C;{</span></span>
<span class="line"><span>  name: string,</span></span>
<span class="line"><span>  childs: string[]</span></span>
<span class="line"><span>}>()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX</span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>  props: {</span></span>
<span class="line"><span>    name: String,</span></span>
<span class="line"><span>    childs: {</span></span>
<span class="line"><span>      type: Array as PropsType&#x3C;string[]>,</span></span>
<span class="line"><span>      default: []</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  setup(props, { slots }) {</span></span>
<span class="line"><span>    return () => &#x3C;div>{props.name}&#x3C;/div></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是，prop传递过来的值如果没有默认值，需要判断是否为空，可以使用计算属性或者条件渲染处理。</p>
<h3 id="emit" tabindex="-1"><a class="header-anchor" href="#emit"><span><strong>emit</strong></span></a></h3>
<p><a href="https://zhida.zhihu.com/search?content_id=213288748&amp;content_type=Article&amp;match_order=2&amp;q=%E5%AD%90%E7%BB%84%E4%BB%B6&amp;zhida_source=entity" target="_blank" rel="noopener noreferrer">子组件</a>向父组件传值</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// SFC</span></span>
<span class="line"><span>const emits = defineEmits&#x3C;{</span></span>
<span class="line"><span>  (e: 'changeName', name: string): void;</span></span>
<span class="line"><span>}>();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>emits('changeName', '张三')</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX</span></span>
<span class="line"><span>export default defineComponent({</span></span>
<span class="line"><span>  emits: ['changeName'],</span></span>
<span class="line"><span>  setup(props, {emit}) {</span></span>
<span class="line"><span>    emit('changeName', '张三')</span></span>
<span class="line"><span>    return () => &#x3C;div>&#x3C;/div></span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件监听" tabindex="-1"><a class="header-anchor" href="#事件监听"><span><strong>事件监听</strong></span></a></h3>
<p>事件监听就是<code v-pre>v-on</code>或者<code v-pre>@</code>，在<code v-pre>TSX</code>中事件以<code v-pre>on</code>开头，即使我们的自定义事件没有<code v-pre>on</code>，也要在监听的时候加上，一般都采用的是小驼峰的方式。</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// SFC</span></span>
<span class="line"><span>&#x3C;template></span></span>
<span class="line"><span>  &#x3C;div @click="handleClick">无参数&#x3C;/div></span></span>
<span class="line"><span>  &#x3C;div @click="(event) => handleClick1(event)">鼠标事件参数&#x3C;/div></span></span>
<span class="line"><span>  &#x3C;div @click="handleClick2('abc')">自定义参数&#x3C;/div></span></span>
<span class="line"><span>&#x3C;/template></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX</span></span>
<span class="line"><span>return () => (</span></span>
<span class="line"><span>  &#x3C;></span></span>
<span class="line"><span>    &#x3C;div onClick={handleClick}>无参数&#x3C;/div></span></span>
<span class="line"><span>    &#x3C;div onClick={(event) => handleClick1(event)}>鼠标事件参数&#x3C;/div></span></span>
<span class="line"><span>    &#x3C;div onClick={() => handleClick2('abc')}>自定义参数&#x3C;/div></span></span>
<span class="line"><span>  &#x3C;/></span></span>
<span class="line"><span>);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 函数定义相同</span></span>
<span class="line"><span>const handleClick = () => {</span></span>
<span class="line"><span>  console.log('click');</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const handleClick1 = (e: MouseEvent) => {</span></span>
<span class="line"><span>  console.log(e.offsetX);</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const handleClick2 = (name: string) => {</span></span>
<span class="line"><span>  console.log(name);</span></span>
<span class="line"><span>};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://zhida.zhihu.com/search?content_id=213288748&amp;content_type=Article&amp;match_order=2&amp;q=%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BA%8B%E4%BB%B6&amp;zhida_source=entity" target="_blank" rel="noopener noreferrer">自定义事件</a>只需要在事件名前面加上<code v-pre>on</code>即可，<a href="https://zhida.zhihu.com/search?content_id=213288748&amp;content_type=Article&amp;match_order=1&amp;q=%E5%8F%82%E6%95%B0%E4%BC%A0%E9%80%92&amp;zhida_source=entity" target="_blank" rel="noopener noreferrer">参数传递</a>与上面一致</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// SFC</span></span>
<span class="line"><span>&#x3C;div @custom="handleCustom()">&#x3C;/div></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX</span></span>
<span class="line"><span>&#x3C;div onCustom={handleCustom}>&#x3C;/div></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>TSX</code>中处理事件不能使用<a href="https://zhida.zhihu.com/search?content_id=213288748&amp;content_type=Article&amp;match_order=1&amp;q=%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6&amp;zhida_source=entity" target="_blank" rel="noopener noreferrer">事件修饰符</a>，因此需要在事件函数中自行处理，例如冒泡、阻止默认行为等。</p>
<h3 id="属性-事件继承" tabindex="-1"><a class="header-anchor" href="#属性-事件继承"><span><strong>属性/事件继承</strong></span></a></h3>
<p>对于这个我也不知道怎么描述，当我们给一个组件传递属性和事件时，一般子组件在<code v-pre>props</code>中接收属性值，<code v-pre>emits</code>中接收事件，但是我们也可以传一些额外的属性和事件，即不在<code v-pre>props</code>和<code v-pre>emits</code>中的属性和事件，虽然这是不推荐的做法，但是有时候当我们封装第三方库的时候，这种用法就非常的方便。具体看如下代码：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// parent name和click都不在子组件的明确接收中</span></span>
<span class="line"><span>&#x3C;Child name="张三" @click="handleClick" /></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// SFC child</span></span>
<span class="line"><span>&#x3C;div v-bind="$attrs">继承属性/事件&#x3C;/div></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX child</span></span>
<span class="line"><span>&#x3C;div {...attrs}>继承事件&#x3C;/div></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>SFC</code>中，在<code v-pre>template</code>中我们可以通过<code v-pre>$attrs</code>获取到额外的属性和方法，<code v-pre>script</code>中可以通过<code v-pre>getCurrentInstance</code>方法获取组件对象，然后通过<code v-pre>.attrs</code>拿到属性和方法。</p>
<p><code v-pre>TSX</code>中，直接通过<code v-pre>attrs</code>获取属性和方法，通过<code v-pre>{...attrs}</code>把属性和方法传递给子元素。</p>
<h3 id="其他命令" tabindex="-1"><a class="header-anchor" href="#其他命令"><span><strong>其他命令</strong></span></a></h3>
<p><code v-pre>v-show</code>和<code v-pre>v-model</code>与<code v-pre>SFC</code>中使用一样，这里不做示例</p>
<h3 id="组件引用" tabindex="-1"><a class="header-anchor" href="#组件引用"><span><strong>组件引用</strong></span></a></h3>
<p>通过<code v-pre>ref</code>获取组件<code v-pre>dom</code>信息</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// SFC</span></span>
<span class="line"><span>&#x3C;ChildComponent ref="com" /></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const com = ref(null)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX</span></span>
<span class="line"><span>const com = ref(null)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return () => &#x3C;ChildComponent ref={com} /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对外暴露属性和方法" tabindex="-1"><a class="header-anchor" href="#对外暴露属性和方法"><span><strong>对外暴露属性和方法</strong></span></a></h3>
<p>在父组件中直接调用子组件的属性和方法</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// SFC</span></span>
<span class="line"><span>defineExpose&#x3C;{</span></span>
<span class="line"><span>  name: Ref&#x3C;string>;</span></span>
<span class="line"><span>  handleClick: () => void;</span></span>
<span class="line"><span>}>({</span></span>
<span class="line"><span>  name,</span></span>
<span class="line"><span>  handleClick</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX</span></span>
<span class="line"><span>setup(props, { expose }) {</span></span>
<span class="line"><span>  expose({name, handleClick})</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样式修改" tabindex="-1"><a class="header-anchor" href="#样式修改"><span><strong>样式修改</strong></span></a></h3>
<p>样式的改造一度是我切换<code v-pre>TSX</code>的最大痛点，因为在<code v-pre>SFC</code>中最麻烦的是修改第三方库的样式，一般要用到<code v-pre>:deep</code>，而且有时候还不一定成功，非常麻烦，改为<code v-pre>TSX</code>后我一直不知道怎么解决这种问题，后来搞定以后再回过头来看，发现是<code v-pre>vue</code>写久了养成了固定思维。我们在<code v-pre>vue</code>文件中写的样式都包含在<code v-pre>scoped</code>下面，如果不加<code v-pre>scoped</code>就可能会造成全局样式污染。那为什么会造成全局样式污染？又为什么加了<code v-pre>scoped</code>就不会呢？实际上我们只要知道<code v-pre>CSS</code>基础，明白<code v-pre>CSS</code>中的样式优先级即可。<code v-pre>vue</code>生成的项目最终还是会回归到<code v-pre>html</code>、<code v-pre>css</code>、<code v-pre>js</code>来，因此我们从这里来理解就方便多了。</p>
<ul>
<li>为什么会造成全局样式污染？</li>
</ul>
<p>这个不是<code v-pre>vue</code>的专利，而是<code v-pre>css</code>本身的优先级问题，就是如果我们定义了相同的<code v-pre>css</code>类，并以相同的方式来使用它，那么根据先后加载顺序，就会导致后加载的覆盖掉先加载的样式，造成先加载的样式无效，这就是所谓的样式污染。</p>
<ul>
<li>为什么加了<code v-pre>scoped</code>就不会造成样式污染呢？</li>
</ul>
<p>我们看一个简单的例子：</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>&#x3C;div class="item">样式示例&#x3C;/div></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#x3C;style lang="less" scoped></span></span>
<span class="line"><span>.item {</span></span>
<span class="line"><span>  background-color: pink;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&#x3C;/style></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看一下<code v-pre>html</code>和<code v-pre>css</code>源码</p>
<p><img src="https://picx.zhimg.com/v2-100c9bd4e9762d8ad40868347a992d05_1440w.jpg" alt="img"></p>
<p>可以看到，<code v-pre>vue</code>组件在渲染的时候，会给元素增加一个属性<code v-pre>data-v-xxxx</code>，然后在生成样式的时候也会在样式上加上<code v-pre>[data-v-xxxxx]</code>，这是<code v-pre>css</code>属性选择器的用法，这样根据<code v-pre>css</code>选择器的优先级，这个属性就具有唯一性。</p>
<p>但是在<code v-pre>TSX</code>中没有了<code v-pre>scoped</code>怎么办？很简单，回归原始的<code v-pre>css</code>即可。在原始<code v-pre>css</code>中需要我们自己来保证<code v-pre>css</code>选择的唯一性，具体做法就是给组件内使用的css类都加上唯一前缀，例如组件名称为<code v-pre>Child</code>，那么所有的<code v-pre>css</code>类都加上<code v-pre>child-xxx</code>，因为我们肯定要保证组件名称的唯一性，所以这样下来对应的样式也就是唯一的。这就要求我们给所有需要修改样式的元素都加上类或者<a href="https://zhida.zhihu.com/search?content_id=213288748&amp;content_type=Article&amp;match_order=1&amp;q=%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7&amp;zhida_source=entity" target="_blank" rel="noopener noreferrer">自定义属性</a>，以便于我们可以通过唯一的<code v-pre>css</code>选择器选中它。</p>
<p>示例如下：</p>
<p>创建一个<code v-pre>css</code>文件：<code v-pre>child.css</code></p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>.child-item {</span></span>
<span class="line"><span>  background-color: pink;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>tsx</code>文件中引用</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// TSX child.tsx</span></span>
<span class="line"><span>import './child.css'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return () => &#x3C;div class="child-item">&#x3C;/div></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上面这种保证样式名称唯一的方式以外，<code v-pre>vue</code>其实一直为我们提供了另外一种方式-<code v-pre>css module</code>，具体来讲就是把<code v-pre>css</code>作为模块引入到<code v-pre>js</code>中，然后会生成一个唯一的名称，在以前用<code v-pre>webpack</code>的时候还需要装额外的包，现在<code v-pre>vite</code>已经帮我们集成了，只需要在<code v-pre>vite.config.ts</code>中加一下配置即可。</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>css: {</span></span>
<span class="line"><span>  modules: {</span></span>
<span class="line"><span>    localsConvention: 'camelCase'</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里规定<code v-pre>css</code>类名的<a href="https://zhida.zhihu.com/search?content_id=213288748&amp;content_type=Article&amp;match_order=1&amp;q=%E5%91%BD%E5%90%8D%E8%A7%84%E5%88%99&amp;zhida_source=entity" target="_blank" rel="noopener noreferrer">命名规则</a>为小驼峰，即<code v-pre>child-item</code>类在<code v-pre>js</code>中会变成<code v-pre>childItem</code>变量。但是要实现<code v-pre>css module</code>的功能，对<code v-pre>css</code>文件命名由要求，必须在后缀名前面是<code v-pre>module</code>，例如<code v-pre>xxx.module.css</code>、<code v-pre>xxx.module.less</code>、<code v-pre>xxx.module.scss</code>。</p>
<p>示例如下：</p>
<p>创建一个<code v-pre>css</code>文件：<code v-pre>child.module.css</code></p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>.child-item {</span></span>
<span class="line"><span>  background-color: pink;</span></span>
<span class="line"><span>}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>tsx</code>文件中引用</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// TSX child.tsx</span></span>
<span class="line"><span>import styles from './child.module.css'</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return () => &#x3C;div class={styles.childItem}>&#x3C;/div></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开浏览器看一下源码</p>
<p><img src="https://pic1.zhimg.com/v2-a6bbcab3ce3d79e939e7ee09c04afe72_1440w.jpg" alt="img"></p>
<p>可以看到元素上绑定的<code v-pre>css</code>和全局的<code v-pre>css</code>都出现了变化，这种方式我们就不需要去关注编写的<code v-pre>css</code>是否是唯一的，<code v-pre>vite</code>会帮我们自行处理，只是在使用的时候有一些区别。</p>
<p>除了常规的<code v-pre>css</code>使用，我们还有动态<code v-pre>class</code>的使用。</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// SFC</span></span>
<span class="line"><span>&#x3C;div class="box" :class="{active: count === 1}">&#x3C;/div></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX</span></span>
<span class="line"><span>&#x3C;div class={['box', count===1 ? 'active' : '']}>&#x3C;/div></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们把需要的<code v-pre>class</code>处理成一个数组给它即可。</p>
<p>除了动态<code v-pre>class</code>还有动态<code v-pre>style</code>的使用。</p>
<div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-text"><span class="line"><span>// SFC</span></span>
<span class="line"><span>&#x3C;div :style="{ height: height + 'px' }">&#x3C;/div></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// TSX</span></span>
<span class="line"><span>&#x3C;div style={{ height: height.value + 'px' }}>&#x3C;/div></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><strong>总结</strong></span></a></h2>
<p>目前对于大部分场景的使用都写到了，如果后期有其他的<a href="https://zhida.zhihu.com/search?content_id=213288748&amp;content_type=Article&amp;match_order=1&amp;q=%E8%AF%AD%E6%B3%95%E7%B3%96&amp;zhida_source=entity" target="_blank" rel="noopener noreferrer">语法糖</a>在进行补充，示例项目：vue3-tsx-todo，请在<a href="https://zhida.zhihu.com/search?content_id=213288748&amp;content_type=Article&amp;match_order=1&amp;q=gitee&amp;zhida_source=entity" target="_blank" rel="noopener noreferrer">gitee</a>上进行搜索</p>
<p><img src="https://pic4.zhimg.com/v2-cc6406106de8b22a08ea1fababd5c42d_r.jpg" alt="img"></p>
</div></template>


