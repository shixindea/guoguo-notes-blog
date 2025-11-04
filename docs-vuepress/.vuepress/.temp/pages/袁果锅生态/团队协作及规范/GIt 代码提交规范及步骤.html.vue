<template><div><h2 id="git-代码管理" tabindex="-1"><a class="header-anchor" href="#git-代码管理"><span>[GIT] 代码管理</span></a></h2>
<p>每个项目内置 git commit 命令。</p>
<h3 id="提交的类型" tabindex="-1"><a class="header-anchor" href="#提交的类型"><span>提交的类型</span></a></h3>
<p>下面的这些只是列举部分，其他可补充。</p>
<div class="language-diff line-numbers-mode" data-highlighter="shiki" data-ext="diff" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-diff"><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●wip : 正在进行的工作</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●feat: 新功能</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●config: 各种项目配置</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●fix：修复，包括热修复</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●refactor: 重构</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●style: 修改样式</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●type: typescript 类型重新定义</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●update: 更新代码以及解决冲突</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●trivia: 琐事，如改个文案，换个图片等</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●docs: 仅文档更改</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●site: 站点或官网的改进</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●test: 添加缺少的测试或更正现有测试</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●chore: 不修改项目代码。例如更新生成任务、包管理器、项目配置等</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●lint: 代码规范修改</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●release: 发布新包</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●revert: 恢复到提交</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●follow: 追随上一个的提交</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">●others: 其他改动</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提交格式" tabindex="-1"><a class="header-anchor" href="#提交格式"><span>提交格式</span></a></h3>
<p>类型(关键词): 描述，如 feat(票务): 列表接口对接完成</p>
<h3 id="git-分支" tabindex="-1"><a class="header-anchor" href="#git-分支"><span>Git 分支</span></a></h3>
<p>●新功能(feat)开发，命名：feat-douyin (抖音新功能)</p>
<p>●修复(fix)分支，如 fix-seat (修复选座)</p>
<p>●优化(plus)分支，如 plus-seat (优化选座)</p>
<h3 id="commit-信息" tabindex="-1"><a class="header-anchor" href="#commit-信息"><span>commit 信息</span></a></h3>
<p>●  一个 commit 干一件事儿，比如创建页面，比如一个页面的切图，比如对接一个页面的接口。只有 commit 干一件事儿了 commit 才容易写，才容易日后追溯。只有 commit 干一件事儿了我们才可以按步骤像完成任务一样玩代码写作品。</p>
<p>●每天走之前务必提代码。</p>
<p>●相同 commit 内容后面加版本号如 v2 。</p>
<h2 id="开发提交步骤" tabindex="-1"><a class="header-anchor" href="#开发提交步骤"><span>开发提交步骤</span></a></h2>
<p>1 开发之前 更新代码 ( 大家一起用一个分支 ) :</p>
<p>a下载 origin 线下的所有分支代码，运行：  git fetch origin</p>
<p>b合并 origin 中的 feat-douyin 分支到当前分支： 运行： git merge origin/feat-douyin</p>
<p>2 咔咔咔写代码。。。</p>
<p>3 运行 pnpm lint:fix 自动 typescript 检测及代码美化</p>
<p>4 运行 pnpm gitcz 进行提交，然后自动运行 git commt 规范检测及代码检测</p>
<p>5 运行 git push origin feat-douyin</p>
</div></template>


