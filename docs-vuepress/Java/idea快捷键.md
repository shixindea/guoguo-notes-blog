---
title: idea 快捷键
date: 2023-5-21
tags:
  - idea
  - 快捷键
categories:
  - 自学篇
createTime: 2025/08/24 00:25:17
permalink: /article/u5l9svfl/
---
## j快速生成定义名加方法[Ctrl + Alt + V]

> 首先拥有一个方法  `getMax`  
>
> 在调用的地方点击方法的名字  按快捷键  Ctrl + Alt + V

```java
public class hello_world {
    public static void main(String[] args) {
       // getMax(1, 2);    Ctrl + Alt + V
        int max = getMax(1, 2);
    }

    public static int getMax(int a, int b) {
        int max = a + b;
        return max;
    }
}
```

## 快速生成构造函数的变量[Alt+Fn+Insert]

> 从这里的代码 直接按 快捷键  `Alt+Fn+Insert`

```java
public class User {
    //    属性
    private String username;
    private String password;
    private String email;
    private String gender;
    private int age;
}
```

> 然后自动会生成下面的代码

```java
public class User {
    //    属性
    private String username;
    private String password;
    private String email;
    private String gender;
    private int age;

    //以下代码为自动生成代码
    public User() {
    }

    public User(String username, String password, String email, String gender, int age) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.gender = gender;
        this.age = age;
    }
}
```

## 定义方法后提示参数[Ctrl+P]

## 变量名批量修改 [Shift + F6]

## 字符串.fori 遍历   字符串.forr 反向遍历

## 将1行代码快速分割成两行 [Alt+Enter]

```java
//一行代码
String num = sc.next();  
//使用快捷键之后
String num;
num = sc.next();
```

## 报错代码 按快捷键[Alt+Enter] 快速生成错误解决方案

## 快读生成方法片段 [Ctrl+Alt+M]

> 选中一段你需要 封装方法片段的代码  按住快捷键 `[Ctrl+Alt+M]` 就可以自动生成！

