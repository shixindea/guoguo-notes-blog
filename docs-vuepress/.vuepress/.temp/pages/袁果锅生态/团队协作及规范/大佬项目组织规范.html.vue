<template><div><h2 id="项目组织规范" tabindex="-1"><a class="header-anchor" href="#项目组织规范"><span>项目组织规范</span></a></h2>
<p>项目组织规范定义了如何组织一个前端项目, 例如项目的命名、项目的文件结构、版本号规范等等。尤其对于开源项目，规范化的项目组织就更重要了。</p>
<h4 id="通用的项目组织规范" tabindex="-1"><a class="header-anchor" href="#通用的项目组织规范"><span>通用的项目组织规范</span></a></h4>
<p>一个典型的项目组织规范如下:</p>
<ul>
<li>
<p>README.md: 项目说明, 这个是最重要。你必须在这里提供关于项目的关键信息或者相关信息的入口. 一般包含下列信息:</p>
<ul>
<li>简要描述、项目主要特性</li>
<li>运行环境/依赖、安装和构建、测试指南</li>
<li>简单示例代码</li>
<li>文档或文档入口, 其他版本或相关资源入口</li>
<li>联系方式、讨论群</li>
<li>许可、贡献/开发指南</li>
</ul>
</li>
<li>
<p>CHANGELOG.md: 放置每个版本的变动内容, 通常要描述每个版本变更的内容。方便使用者确定应该使用哪个版本. 关于CHANGELOG的规范可以参考keep a changelog</p>
</li>
<li>
<p>package.json: 前端项目必须. 描述当前的版本、可用的命令、包名、依赖、环境约束、项目配置等信息.</p>
</li>
<li>
<p>.gitignore: 忽略不必要的文件，避免将自动生成的文件提交到版本库</p>
</li>
<li>
<p>.gitattributes: git配置，有一些跨平台差异的行为可能需要在这里配置一下，如换行规则</p>
</li>
<li>
<p>docs/: 项目的细化文档, 可选.</p>
</li>
<li>
<p>examples/: 项目的示例代码，可选.</p>
</li>
<li>
<p>build: 项目工具类脚本放置在这里，非必须。如果使用统一构建工具，则没有这个目录</p>
</li>
<li>
<p>dist/: 项目构建结果输出目录</p>
</li>
<li>
<p>src/: 源代码目录</p>
</li>
<li>
<p>tests/: 单元测试目录. 按照Jest规范, <code v-pre>__tests__</code>目录通常和被测试的模块在同一个父目录下, 例如: /src  <strong>tests</strong>/    index.ts    a.ts  index.ts  a.ts 复制代码</p>
</li>
<li>
<p>tests: 全局的测试目录，通常放应用的集成测试或E2E测试等用例</p>
</li>
<li>
<p>.env*: 项目中我们通常会使用</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>环境变量</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>来影响应用在不同运行环境下的行为. 可以通过dotEnv来从文件中读取环境变量. 通常有三个文件: 基本上这些文件的变动的频率很少，团队成员应该不要随意变动，以免影响其他成员。所以通常会使用</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>.env.*.local</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>文件来覆盖上述的配置, 另外会设置版本库来忽略</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span>*.local</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>文件.</p>
<ul>
<li><code v-pre>.env</code> 通用的环境变量</li>
<li><code v-pre>.env.development</code> 开发环境的环境变量</li>
<li><code v-pre>.env.production</code> 生成环境的环境变量</li>
</ul>
</li>
</ul>
<p>对于开源项目通常还包括这些目录:</p>
<ul>
<li>LICENSE: 说明项目许可</li>
<li>.github: 开源贡献规范和指南
<ul>
<li>CONTRIBUTING: 贡献指南, 这里一般会说明贡献的规范、以及项目的基本组织、架构等信息</li>
<li>CODE_OF_CONDUCT: 行为准则</li>
<li>COMMIT_CONVENTION: 提交信息规范，上文已经提及</li>
<li>ISSUE_TEMPLATE: Issue的模板，github可以自动识别这个模板</li>
<li>PULL_REQUEST_TEMPLATE: PR模板</li>
</ul>
</li>
</ul>
<p>任意一个优秀的开源项目都是你的老师，例如React、Vue...</p>
</div></template>


