---
title: GIt 代码提交规范及步骤
createTime: 2025/08/24 00:25:17
permalink: /article/i2awpj99/
---
## [GIT] 代码管理

每个项目内置 git commit 命令。  

### 提交的类型 

下面的这些只是列举部分，其他可补充。

```diff
●wip : 正在进行的工作
●feat: 新功能
●config: 各种项目配置
●fix：修复，包括热修复
●refactor: 重构
●style: 修改样式
●type: typescript 类型重新定义
●update: 更新代码以及解决冲突
●trivia: 琐事，如改个文案，换个图片等
●docs: 仅文档更改
●site: 站点或官网的改进
●test: 添加缺少的测试或更正现有测试
●chore: 不修改项目代码。例如更新生成任务、包管理器、项目配置等
●lint: 代码规范修改
●release: 发布新包
●revert: 恢复到提交
●follow: 追随上一个的提交
●others: 其他改动
```

### 提交格式 

类型(关键词): 描述，如 feat(票务): 列表接口对接完成

### Git 分支 

●新功能(feat)开发，命名：feat-douyin (抖音新功能)

●修复(fix)分支，如 fix-seat (修复选座)

●优化(plus)分支，如 plus-seat (优化选座)

### commit 信息 

●  一个 commit 干一件事儿，比如创建页面，比如一个页面的切图，比如对接一个页面的接口。只有 commit 干一件事儿了 commit 才容易写，才容易日后追溯。只有 commit 干一件事儿了我们才可以按步骤像完成任务一样玩代码写作品。

●每天走之前务必提代码。

●相同 commit 内容后面加版本号如 v2 。



## 开发提交步骤 

1 开发之前 更新代码 ( 大家一起用一个分支 ) : 

a下载 origin 线下的所有分支代码，运行：  git fetch origin

b合并 origin 中的 feat-douyin 分支到当前分支： 运行： git merge origin/feat-douyin

2 咔咔咔写代码。。。

3 运行 pnpm lint:fix 自动 typescript 检测及代码美化

4 运行 pnpm gitcz 进行提交，然后自动运行 git commt 规范检测及代码检测

5 运行 git push origin feat-douyin