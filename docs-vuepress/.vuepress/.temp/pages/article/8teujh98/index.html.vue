<template><div><h1 id="第一次需要指定用户名" tabindex="-1"><a class="header-anchor" href="#第一次需要指定用户名"><span>第一次需要指定用户名</span></a></h1>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>git config --global user.name "name"</span></span>
<span class="line"><span>git config --global user.email "291XXXXX@qq.com"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-git-init-初始化文档" tabindex="-1"><a class="header-anchor" href="#_1-git-init-初始化文档"><span>1. git init 初始化文档</span></a></h2>
<h2 id="_2-git-add-添加到暂存区" tabindex="-1"><a class="header-anchor" href="#_2-git-add-添加到暂存区"><span>2. git add . 添加到暂存区</span></a></h2>
<h2 id="_3-git-commit-m-first-commit-提交并写名字" tabindex="-1"><a class="header-anchor" href="#_3-git-commit-m-first-commit-提交并写名字"><span>3. git commit -m &quot;first commit&quot;  提交并写名字</span></a></h2>
<h2 id="_4-git-remote-add-origin-https-gitee-com-xxx-地址" tabindex="-1"><a class="header-anchor" href="#_4-git-remote-add-origin-https-gitee-com-xxx-地址"><span>4. git remote add origin https://gitee.com/XXX  地址</span></a></h2>
<h2 id="_5-git-push-u-origin-master-合并主分支" tabindex="-1"><a class="header-anchor" href="#_5-git-push-u-origin-master-合并主分支"><span>5. git push -u origin &quot;master&quot;  合并主分支</span></a></h2>
<h1 id="二次提交" tabindex="-1"><a class="header-anchor" href="#二次提交"><span>二次提交</span></a></h1>
<h2 id="_1-git-add-添加到暂存区" tabindex="-1"><a class="header-anchor" href="#_1-git-add-添加到暂存区"><span>1. git add .   添加到暂存区</span></a></h2>
<h2 id="_2-git-commit-m-first-commit-提交并写名字" tabindex="-1"><a class="header-anchor" href="#_2-git-commit-m-first-commit-提交并写名字"><span>2. git commit -m &quot;first commit&quot;   提交并写名字</span></a></h2>
<h2 id="_3-git-push-提交" tabindex="-1"><a class="header-anchor" href="#_3-git-push-提交"><span>3. git push  提交</span></a></h2>
<h2 id="git-remote-v-查看当前git-指向哪里" tabindex="-1"><a class="header-anchor" href="#git-remote-v-查看当前git-指向哪里"><span>git remote -v  查看当前git 指向哪里</span></a></h2>
<h1 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h1>
<h2 id="git-status-查看暂存区状态" tabindex="-1"><a class="header-anchor" href="#git-status-查看暂存区状态"><span>git status 查看暂存区状态</span></a></h2>
<h2 id="git-log-查看版本日志" tabindex="-1"><a class="header-anchor" href="#git-log-查看版本日志"><span>git log 查看版本日志</span></a></h2>
<h2 id="git-remote-v-查看本地仓库的远程仓库地址" tabindex="-1"><a class="header-anchor" href="#git-remote-v-查看本地仓库的远程仓库地址"><span>git remote -v 查看本地仓库的远程仓库地址</span></a></h2>
<h2 id="git-remote-remove-origin-取消与远程仓库的连接" tabindex="-1"><a class="header-anchor" href="#git-remote-remove-origin-取消与远程仓库的连接"><span>git remote remove origin  取消与远程仓库的连接</span></a></h2>
<h1 id="bug" tabindex="-1"><a class="header-anchor" href="#bug"><span>Bug</span></a></h1>
<h2 id="在不慎多次提交后出现-master-rebase-1-2" tabindex="-1"><a class="header-anchor" href="#在不慎多次提交后出现-master-rebase-1-2"><span>在不慎多次提交后出现 (master|<a href="https://so.csdn.net/so/search?q=REBASE&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">REBASE</a> 1/2)，</span></a></h2>
<p><strong>解决办法：</strong></p>
<p>回退提交，<code v-pre>git rebase --abort</code> ，解决</p>
<h2 id="git-cz-【-git-commit-的提交命令的加强版】" tabindex="-1"><a class="header-anchor" href="#git-cz-【-git-commit-的提交命令的加强版】"><span>git cz   【 git commit 的提交命令的加强版】</span></a></h2>
<p>git cz 是 Git 中的一个命令，它相当于是一个对 git commit 的提交命令的加强版。它通过安装 Commitizen 和 conventional-changelog 等工具，使得提交代码时更加规范，例如写上提交的代码写了哪些功能、修改了哪些文件等等信息，也可以方便自己日后查看。</p>
</div></template>


