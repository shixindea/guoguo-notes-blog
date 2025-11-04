<template><div><ol>
<li>安装HomeBrew：</li>
</ol>
<p>/bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot; speed
2. 使用brew安装Fvm：</p>
<p>brew install jenv
3. 写入配置文件</p>
<p>echo 'export PATH=&quot;<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>H</mi><mi>O</mi><mi>M</mi><mi>E</mi><mi mathvariant="normal">/</mi><mi mathvariant="normal">.</mi><mi>j</mi><mi>e</mi><mi>n</mi><mi>v</mi><mi mathvariant="normal">/</mi><mi>b</mi><mi>i</mi><mi>n</mi><mo>:</mo></mrow><annotation encoding="application/x-tex">HOME/.jenv/bin:</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.08125em;">H</span><span class="mord mathnormal" style="margin-right:0.05764em;">OME</span><span class="mord">/.</span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mord mathnormal">e</span><span class="mord mathnormal">n</span><span class="mord mathnormal" style="margin-right:0.03588em;">v</span><span class="mord">/</span><span class="mord mathnormal">bin</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">:</span></span></span></span>PATH&quot;' &gt;&gt; ~/.zshrc
echo 'eval &quot;$(jenv init -)&quot;' &gt;&gt; ~/.zshrc
4.配置生效.</p>
<p>source ~/.zshrc
5.验证jenv是否配置完成</p>
<p>jenv doctor
[ERROR]	Java binary in path is not in the jenv shims.
[ERROR]	Please check your path, or try using /path/to/java/home is not a valid path to java installation.
输出结果报错：需要下载JDK</p>
<p>6.启用export插件</p>
<p>jenv enable-plugin export
输出结果</p>
<p>You may restart your session to activate jenv export plugin echo export plugin activated
7.启用Maven插件</p>
<p>jenv enable-plugin maven
输出结果</p>
<p>maven plugin activated
8.安装Java JDK</p>
<p>//安装最新版OpenJDK
brew install --cask temurin</p>
<p>//安装其他版本
brew tap homebrew/cask-versions
brew install --cask temurin11
brew install --cask temurin8
9.查看目前系统中存在的Java JDK版本</p>
<p>/usr/libexec/java_home -V
输出结果</p>
<p>Matching Java Virtual Machines (2):
11.0.16.1 (x86_64) &quot;Microsoft Build of OpenJDK&quot; - &quot;Microsoft Build of OpenJDK 11&quot; /Library/Java/JavaVirtualMachines/microsoft-11.jdk/Contents/Home
1.8.0_302 (x86_64) &quot;Eclipse Temurin&quot; - &quot;Eclipse Temurin 8&quot; /Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home
10.将现有的JDK添加到 jenv中</p>
<p>jenv add &lt;jdk_path&gt;
例如：</p>
<p>jenv add /Library/Java/JavaVirtualMachines/temurin-8.jdk/Contents/Home
查看下jenv管理的所有JDK版本：</p>
<p>jenv versions
输出：</p>
<ul>
<li>system (set by /Users/shen.ef/.jenv/version)
1.8
1.8.0.302
11.0
11.0.16.1
openjdk64-11.0.16.1
temurin64-1.8.0.302
11.设置全局jdk</li>
</ul>
<p>jenv global 1.8
12.设置shellJDK</p>
<p></p>
<p>13.如果要为项目指定JDK版本，只需在项目根目录下使用以下命令即可，jenv会在目录下生成.java-version文件来描述当前项目使用的JDK版本</p>
<p>jenv local 1.8</p>
</div></template>


