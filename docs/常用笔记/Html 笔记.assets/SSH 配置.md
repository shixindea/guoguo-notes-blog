---
title: SSH 配置
createTime: 2025/08/24 00:25:16
permalink: /article/f7jnhyhw/
---
# Mac获取SSH公钥添加到码云

本文档详细介绍了如何配置和使用SSH密钥，以安全地连接到Git仓库进行远程操作。步骤包括设置Git用户名和邮箱，生成RSA秘钥，设置密钥名称，设置私钥密码，将私钥添加到本地ssh-agent，开启远程登录功能，并验证SSH连接。此过程对于频繁的Git推送和拉取操作至关重要，确保了身份验证的安全性。

1.配置好git的名字和邮箱
2.生成秘钥

```csharp
ssh-keygen -t rsa -C "your email"
```

3.设置秘钥名字 放在~/.s[sh文件](https://so.csdn.net/so/search?q=sh文件&spm=1001.2101.3001.7020)夹

```cobol
Enter file in which to save the key (/Users/.ssh/id_rsa): /Users/.ssh/id_rsa 
```

4.设置私钥密码

```cobol
Enter passphrase (empty for no passphrase):  123456 
Your identification has been saved in id_rsa. // 私钥
Your public key has been saved in id_rsa.pub.  //公钥
The key fingerprint is:
SHA256:IL6L2NjBQDAAuYfD6NzTbR8VIc/fJl1coDUhzL3LYP8 
The key's randomart image is:
+---[RSA 2048]----+
|B.      . +o.=o.|
|o.        +.o+.o.|
|o+  . .    oo  .o|
|*... . .  .+ + .|
|+o. o . S .. * = |
| = o o o .    *  |
|  o o . . .    . |
| = o .  .      E|
|o + .            |   
+----[SHA256]-----+  // 创建成功
```

5.添加私钥到本地电脑上

```cobol
cd /Users/.ssh/id_rsa 
ssh-add id_rsa
```

6.输入密码

```cobol
Enter passphrase for id_rsa：123456 
Identity added: id_rsa  //添加成功
```

7. 开启[远程登录](https://so.csdn.net/so/search?q=远程登录&spm=1001.2101.3001.7020)功能，方法：设置——共享——勾选远程登录
8. 与网站进行验证，记录ssh

```typescript
ssh -T git@gitee.com 回车
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes  
```