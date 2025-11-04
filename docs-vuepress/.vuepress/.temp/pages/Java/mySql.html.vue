<template><div><h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>mySql</span></a></h1>
<h2 id="创建表" tabindex="-1"><a class="header-anchor" href="#创建表"><span>创建表</span></a></h2>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mysql"><span class="line"><span>CREATE TABLE student(</span></span>
<span class="line"><span>id int comment "编号",</span></span>
<span class="line"><span>name VARCHAR(50) COMMENT "姓名",</span></span>
<span class="line"><span>age int COMMENT '年龄',</span></span>
<span class="line"><span>gender VARCHAR(1) comment '性别')</span></span>
<span class="line"><span>comment '用户表'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="显示当前数据库中的表" tabindex="-1"><a class="header-anchor" href="#显示当前数据库中的表"><span>显示当前数据库中的表</span></a></h2>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mysql"><span class="line"><span>show tables</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="显示表结构" tabindex="-1"><a class="header-anchor" href="#显示表结构"><span>显示表结构</span></a></h2>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mysql"><span class="line"><span>desc student</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="代码片段" tabindex="-1"><a class="header-anchor" href="#代码片段"><span>代码片段</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sql"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">select</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> person </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">WHERE</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> id </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">BETWEEN</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> AND</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">  122</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> and</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> name</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> like</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">%23</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">select</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> person </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">WHERE</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> id </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">in</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">112</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">113</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">select</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> gender,</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">count</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">) </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> person </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">WHERE</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> id</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">200</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> GROUP BY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> gender</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">SELECT</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,id,gender </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> person </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">LIMIT</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="管理用户" tabindex="-1"><a class="header-anchor" href="#管理用户"><span>管理用户</span></a></h2>
<h3 id="查询用户" tabindex="-1"><a class="header-anchor" href="#查询用户"><span>查询用户</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sql"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">use</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> mysql</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">select</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> user</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建用户" tabindex="-1"><a class="header-anchor" href="#创建用户"><span>创建用户</span></a></h3>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sql"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">create</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> user</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> '</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">yxd</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">'@</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">localhost</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> IDENTIFIED </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">by</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">123321</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">create</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> user</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> '</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">用户名</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">'@</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">主机地址</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> IDENTIFIED </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">by</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">密码</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>localhost</code>表示本机可用</p>
<p>如果任意主机都需要连接的话 使用<code v-pre>'%'</code> 即可</p>
</blockquote>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sql"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">create</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> user</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> '</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">用户名</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">'@</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">%</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> IDENTIFIED </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">by</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">密码</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sql"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> SELECT</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> NAME</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">CASE</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">		gender 		</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">WHEN</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">男</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> THEN</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">		'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">小伙子</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> 		WHEN</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">女</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> THEN</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">		'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">女朋友</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> ELSE</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">狗</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> 	END</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> )</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">AS</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">别称</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> </span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">FROM</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	person</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sql"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">create</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> TABLE</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> user</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	id </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> PRIMARY KEY</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> auto_increment comment </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">主键</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	name</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> VARCHAR</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">10</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">) </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">not NULL</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> UNIQUE</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> COMMENT </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">姓名</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	age </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> check</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(age</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">18</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> &#x26;&#x26; age</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">120</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">) COMMENT </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">年龄</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	STATUS</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> char</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">) </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">DEFAULT</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> COMMENT </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">状态</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	gender </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">char</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">) comment </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">性别</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)comment </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">用户表</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">use</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">INSERT into</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> user(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">name</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,age,</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">status</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,gender) </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">values</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> (</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">tom</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">19</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">女</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">),(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">tom2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">19</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">,</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">男</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">select</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> user</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自查询" tabindex="-1"><a class="header-anchor" href="#自查询"><span>自查询</span></a></h2>
<blockquote>
<p>需要注意  子查询 必须起别名</p>
</blockquote>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sql"><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> FROM</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> person </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">JOIN</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> person </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">as</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> b </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ON</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> person</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">.</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">id</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> b</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">.</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">idCard</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">SELECT</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> *</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> FROM</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> person p,person b </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">WHERE</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> p</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">.</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">id</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> b</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">.</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">idCard</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合并-两个表查询后合并为新表" tabindex="-1"><a class="header-anchor" href="#合并-两个表查询后合并为新表"><span>合并  两个表查询后合并为新表</span></a></h2>
<blockquote>
<p>UNION all  合并查询              UNION 合并查询后去重</p>
<p>注意两个表的列数需要相同 字段类型也需要一致</p>
</blockquote>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>select * FROM person WHERE gender= '男' </span></span>
<span class="line"><span>UNION all</span></span>
<span class="line"><span>SELECT * FROM person WHERE name like '张三</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="distinct-去除重复项-去重" tabindex="-1"><a class="header-anchor" href="#distinct-去除重复项-去重"><span>DISTINCT 去除重复项  去重</span></a></h2>
<h2 id="事务-四大特性-基本操作-隔离级别" tabindex="-1"><a class="header-anchor" href="#事务-四大特性-基本操作-隔离级别"><span>事务  四大特性 基本操作   隔离级别</span></a></h2>
<h3 id="四大特性acid" tabindex="-1"><a class="header-anchor" href="#四大特性acid"><span>四大特性ACID</span></a></h3>
<blockquote>
<ul>
<li>原子性(Atomicity)：事务是不可分割的最小操作但愿，要么全部成功，要么全部失败</li>
<li>一致性(Consistency)：事务完成时，必须使所有数据都保持一致状态</li>
<li>隔离性(Isolation)：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行</li>
<li>持久性(Durability)：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的</li>
</ul>
</blockquote>
<h3 id="事务的基本操作" tabindex="-1"><a class="header-anchor" href="#事务的基本操作"><span>事务的基本操作</span></a></h3>
<p>事务是一组操作的集合，事务会把所有操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。</p>
<p>基本操作：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mysql"><span class="line"><span>-- 1. 查询张三账户余额</span></span>
<span class="line"><span>select * from account where name = '张三';</span></span>
<span class="line"><span>-- 2. 将张三账户余额-1000</span></span>
<span class="line"><span>update account set money = money - 1000 where name = '张三';</span></span>
<span class="line"><span>-- 此语句出错后张三钱减少但是李四钱没有增加</span></span>
<span class="line"><span>模拟sql语句错误</span></span>
<span class="line"><span>-- 3. 将李四账户余额+1000</span></span>
<span class="line"><span>update account set money = money + 1000 where name = '李四';</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 查看事务提交方式</span></span>
<span class="line"><span>SELECT @@AUTOCOMMIT;</span></span>
<span class="line"><span>-- 设置事务提交方式，1为自动提交，0为手动提交，该设置只对当前会话有效</span></span>
<span class="line"><span>SET @@AUTOCOMMIT = 0;</span></span>
<span class="line"><span>-- 提交事务</span></span>
<span class="line"><span>COMMIT;</span></span>
<span class="line"><span>-- 回滚事务</span></span>
<span class="line"><span>ROLLBACK;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 设置手动提交后上面代码改为：</span></span>
<span class="line"><span>select * from account where name = '张三';</span></span>
<span class="line"><span>update account set money = money - 1000 where name = '张三';</span></span>
<span class="line"><span>update account set money = money + 1000 where name = '李四';</span></span>
<span class="line"><span>commit;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>操作方式二：</p>
<p>开启事务：
<code v-pre>START TRANSACTION 或 BEGIN TRANSACTION;</code>
提交事务：
<code v-pre>COMMIT;</code>
回滚事务：
<code v-pre>ROLLBACK;</code></p>
<p>操作实例：</p>
<div class="language-mysql line-numbers-mode" data-highlighter="shiki" data-ext="mysql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-mysql"><span class="line"><span>start transaction;</span></span>
<span class="line"><span>select * from account where name = '张三';</span></span>
<span class="line"><span>update account set money = money - 1000 where name = '张三';</span></span>
<span class="line"><span>update account set money = money + 1000 where name = '李四';</span></span>
<span class="line"><span>commit;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并发事务</p>
<table>
<thead>
<tr>
<th>问题</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>脏读</td>
<td>一个事务读到另一个事务还没提交的数据</td>
</tr>
<tr>
<td>不可重复读</td>
<td>一个事务先后读取同一条记录，但两次读取的数据不同</td>
</tr>
<tr>
<td>幻读</td>
<td>一个事务按照条件查询数据时，没有对应的数据行，但是再插入数据时，又发现这行数据已经存在</td>
</tr>
</tbody>
</table>
<blockquote>
<p>这三个问题的详细演示：https://www.bilibili.com/video/BV1Kr4y1i7ru?p=55cd</p>
</blockquote>
<p>并发事务隔离级别：</p>
<table>
<thead>
<tr>
<th>隔离级别</th>
<th>脏读</th>
<th>不可重复读</th>
<th>幻读</th>
</tr>
</thead>
<tbody>
<tr>
<td>Read uncommitted</td>
<td>√</td>
<td>√</td>
<td>√</td>
</tr>
<tr>
<td>Read committed</td>
<td>×</td>
<td>√</td>
<td>√</td>
</tr>
<tr>
<td>Repeatable Read(默认)</td>
<td>×</td>
<td>×</td>
<td>√</td>
</tr>
<tr>
<td>Serializable</td>
<td>×</td>
<td>×</td>
<td>×</td>
</tr>
</tbody>
</table>
<ul>
<li>√表示在当前隔离级别下该问题会出现</li>
<li>Serializable 性能最低；Read uncommitted 性能最高，数据安全性最差</li>
</ul>
<p>查看事务隔离级别：
<code v-pre>SELECT @@TRANSACTION_ISOLATION;</code>
设置事务隔离级别：
<code v-pre>SET [ SESSION | GLOBAL ] TRANSACTION ISOLATION LEVEL {READ UNCOMMITTED | READ COMMITTED | REPEATABLE READ | SERIALIZABLE };</code>
SESSION 是会话级别，表示只针对当前会话有效，GLOBAL 表示对所有会话有效</p>
<p>‘</p>
<h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h2>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-sql"><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">-- 创建索引</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">create</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> index</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> idx_student_age</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> on</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> student(age)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">-- 展示表名中的所有的索引</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">show </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">index</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> from</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> student</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">-- 删除索引</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">DROP</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> index</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> idx_student_age </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">on</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> student</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="学到了-65集" tabindex="-1"><a class="header-anchor" href="#学到了-65集"><span>学到了 65集</span></a></h1>
<p><a href="https://www.bilibili.com/video/BV1Kr4y1i7ru?p=65&amp;vd_source=cb80c53a34a612fea928a61d4319bb8d" target="_blank" rel="noopener noreferrer">08. 进阶-MySQL安装(linux版本)_哔哩哔哩_bilibili</a></p>
</div></template>


