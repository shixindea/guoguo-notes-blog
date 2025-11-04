<template><div><h2 id="小程序触底刷新下一页" tabindex="-1"><a class="header-anchor" href="#小程序触底刷新下一页"><span>小程序触底刷新下一页</span></a></h2>
<h3 id="usereachbottom" tabindex="-1"><a class="header-anchor" href="#usereachbottom"><span>useReachBottom<a href="https://taro-docs.jd.com/docs/composition-api#usereachbottom" target="_blank" rel="noopener noreferrer"></a></span></a></h3>
<p>监听用户上拉触底事件。等同于 <code v-pre>onReachBottom</code> 页面生命周期钩子。</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span></span></span>
<span class="line"><span>  onReachBottom() {</span></span>
<span class="line"><span>    if (this.theListCurrentPage &#x3C; this.theListPagination.lastPage) {</span></span>
<span class="line"><span>      this.theListCurrentPage++</span></span>
<span class="line"><span>      this.onGetList()</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


