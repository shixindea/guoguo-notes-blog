---
title: java jdk 管理
createTime: 2025/08/24 00:25:17
permalink: /article/7zijdiof/
---
# MacOS 配置 jenv环境

1. 安装HomeBrew：

/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)" speed
2. 使用brew安装Fvm：

brew install jenv
3. 写入配置文件

echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
echo 'eval "$(jenv init -)"' >> ~/.zshrc
4.配置生效. 

source ~/.zshrc
5.验证jenv是否配置完成

jenv doctor
[ERROR]	Java binary in path is not in the jenv shims.
[ERROR]	Please check your path, or try using /path/to/java/home is not a valid path to java installation.
输出结果报错：需要下载JDK

6.启用export插件

jenv enable-plugin export
输出结果

You may restart your session to activate jenv export plugin echo export plugin activated
7.启用Maven插件

jenv enable-plugin maven
输出结果

maven plugin activated
8.安装Java JDK

//安装最新版OpenJDK
brew install --cask temurin

//安装其他版本
brew tap homebrew/cask-versions
brew install --cask temurin11
brew install --cask temurin8
9.查看目前系统中存在的Java JDK版本

/usr/libexec/java_home -V
输出结果

Matching Java Virtual Machines (2):
    11.0.16.1 (x86_64) "Microsoft Build of OpenJDK" - "Microsoft Build of OpenJDK 11" /Library/Java/JavaVirtualMachines/microsoft-11.jdk/Contents/Home
    1.8.0_302 (x86_64) "Eclipse Temurin" - "Eclipse Temurin 8" /Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home
10.将现有的JDK添加到 jenv中

jenv add <jdk_path>
例如：

jenv add /Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home
查看下jenv管理的所有JDK版本：

jenv versions
输出：

* system (set by /Users/shen.ef/.jenv/version)
  1.8
  1.8.0.302
  11.0
  11.0.16.1
  openjdk64-11.0.16.1
  temurin64-1.8.0.302
  11.设置全局jdk

jenv global 1.8
12.设置shellJDK

　



13.如果要为项目指定JDK版本，只需在项目根目录下使用以下命令即可，jenv会在目录下生成.java-version文件来描述当前项目使用的JDK版本

jenv local 1.8