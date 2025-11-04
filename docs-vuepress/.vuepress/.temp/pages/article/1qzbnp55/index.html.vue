<template><div><h2 id="pom-配置" tabindex="-1"><a class="header-anchor" href="#pom-配置"><span>Pom 配置</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span># Spring Boot Admin 配置项</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>   ai:</span></span>
<span class="line"><span>    ollama:</span></span>
<span class="line"><span>      chat:</span></span>
<span class="line"><span>        model: qwen3:1.7b</span></span>
<span class="line"><span>      base-url: http://localhost:11434</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2>
<h2 id="官网链接" tabindex="-1"><a class="header-anchor" href="#官网链接"><span>官网链接</span></a></h2>
<p>https://doc.spring4all.com/spring-ai/reference/api/chatclient.html</p>
<h2 id="sse-长链接-单向数据传输-后端-前端" tabindex="-1"><a class="header-anchor" href="#sse-长链接-单向数据传输-后端-前端"><span>sse 长链接  单向数据传输 后端 -&gt; 前端</span></a></h2>
<h2 id="websorket-双向数据传输" tabindex="-1"><a class="header-anchor" href="#websorket-双向数据传输"><span>websorket 双向数据传输</span></a></h2>
<h2 id="ai-格式化输出" tabindex="-1"><a class="header-anchor" href="#ai-格式化输出"><span>ai 格式化输出</span></a></h2>
<div class="language-diff line-numbers-mode" data-highlighter="shiki" data-ext="diff" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-diff"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  Boolean aBoolean = chatclient.prompt()ChatClientRequestSpec// 用户提示词</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  .user( text: message + "/no_think")</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  .system(p -> p.param(k:"current_date", LocalDate.now().t</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  .call()CallResponseSpec</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D">+  entity(Boolean.class)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="切换大模型教程" tabindex="-1"><a class="header-anchor" href="#切换大模型教程"><span>切换大模型教程</span></a></h2>
<p><img src="https://aliyxd.oss-cn-beijing.aliyuncs.com/image-20250703094738518.png" alt="image-20250703094738518"></p>
</div></template>


