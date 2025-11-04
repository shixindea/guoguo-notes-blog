<template><div><h2 id="nginx-启动和关闭" tabindex="-1"><a class="header-anchor" href="#nginx-启动和关闭"><span>nginx 启动和关闭</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span></span></span>
<span class="line"><span>###启动服务</span></span>
<span class="line"><span>#需要先进入sbin目录下</span></span>
<span class="line"><span>cd /usr/local/nginx/sbin</span></span>
<span class="line"><span>#启动nginx服务</span></span>
<span class="line"><span>./nginx</span></span>
<span class="line"><span></span></span>
<span class="line"><span>###关闭服务</span></span>
<span class="line"><span>#需要先进入sbin目录下</span></span>
<span class="line"><span>cd /usr/local/nginx/sbin</span></span>
<span class="line"><span>#关闭nginx服务</span></span>
<span class="line"><span>./nginx -s stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#进入nginx目录</span></span>
<span class="line"><span>cd /usr/local/nginx/sbin</span></span>
<span class="line"><span>#执行重载命令 重启</span></span>
<span class="line"><span>./nginx -s reload</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code class="language-"><span class="line"><span></span></span>
<span class="line"><span>####端口号操作</span></span>
<span class="line"><span>#查询开启的所有端口</span></span>
<span class="line"><span>firewall-cmd --list-port</span></span>
<span class="line"><span>#设置80端口开启</span></span>
<span class="line"><span>firewall-cmd --zone=public --add-port=80/tcp --permanent</span></span>
<span class="line"><span>#验证80端口是否开启成功 (单个端口查询)</span></span>
<span class="line"><span>firewall-cmd --zone=public --query-port=80/tcp</span></span>
<span class="line"><span>#设置80端口关闭</span></span>
<span class="line"><span>firewall-cmd --zone=public --remove-port=80/tcp --permanent</span></span>
<span class="line"><span></span></span>
<span class="line"><span>####防火墙操作</span></span>
<span class="line"><span>#检查防火墙是否开启</span></span>
<span class="line"><span>systemctl status firewalld</span></span>
<span class="line"><span>#开机自启防火墙</span></span>
<span class="line"><span>systemctl enable firewalld</span></span>
<span class="line"><span>#开机禁止自启防火墙</span></span>
<span class="line"><span>systemctl disable firewalld</span></span>
<span class="line"><span>#启动</span></span>
<span class="line"><span>systemctl start firewalld</span></span>
<span class="line"><span>#关闭</span></span>
<span class="line"><span>systemctl stop firewalld</span></span>
<span class="line"><span>#重启</span></span>
<span class="line"><span>firewall-cmd --reload</span></span>
<span class="line"><span>————————————————</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。</span></span>
<span class="line"><span>                        </span></span>
<span class="line"><span>原文链接：https://blog.csdn.net/qq_45316925/article/details/128957728</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


