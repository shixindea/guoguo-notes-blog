---
title: springboot笔记
date: 2023-5-21
tags:
  - springboot
  - Java
  - 笔记
categories:
  - 自学篇
createTime: 2025/08/24 00:25:17
permalink: /article/4fw56d6u/
---
# springboot

## 第一个get和Post 请求

> 如果` 请求参数名`  和 `形参` 名称对应不上可以使用注解 `@RequestParam(name="name") `  
>
> 如果加上这个``@RequestParam`注解以后表示为必传项 ，可以使用下面这种方式吧 
>
> @RequestParam(name="name",required = false)

```java
//http://localhost:8080/getparams?name=张三&age=18

@RestController
public class hellowComtroller {

    @RequestMapping("/hello")
    public String hello() {
        System.out.println("hello");
        return "hello World~~~";
    }
//@RequestParam(name="name")
    @RequestMapping("/getparams")
    public String getparams(@RequestParam(name="name") String username, Integer age) {
        System.out.println(username+ ":" + age);
        return "ok";
    }
}
```

```java
    /****
     * Json  数据  post 请求
     * @url http://localhost:8080/jsonParams
     * {
     *     "name": "张三",
     *     "age": 18,
     *     "address": {
     *         "provice": "北京",
     *         "city": "天安门"
     *     }
     * }
     * @param user
     * @return
     */
    @RequestMapping("/jsonParams/{id}")
    public String jsonParams(@RequestBody User user) {
        System.out.println(user);
        System.out.println(user.getName());
        return "ok";
    }
```



## 简单数据类型和复杂数据类型 接收数据

```java
/****
     * 复杂数据类型
     * @url http://localhost:8080/simplePojo?name=张三&age=18
     * @param user
     * @return
     */
    @RequestMapping("/simplePojo")
    public String simlePojo(User user) {
        System.out.println(user);
        return "ok";
    }

    /****
     * 复杂数据类型
     * @url http://localhost:8080/complexPojo?name=张三&age=18&address.province=河北省&address.city=衡水市
     * @param user
     * @return
     */
    @RequestMapping("/complexPojo")
    public String complexPojo(User user) {
        System.out.println(user);
        return "ok";
    }
```

## 集合或者数组接收数据

```java
    /****
     * 数组方式    保证    请求参数名与形参中数组变量名相同，可以直接使用数组封装
     * @url http://localhost:8080/ArrayParam?hobby=篮球&hobby=足球&hobby=乒乓球
     * @param hobby
     * @return [篮球, 足球, 乒乓球]
     */
    @RequestMapping("/ArrayParam")
    public String ArrayParam(String[] hobby) {
        System.out.println(Arrays.toString(hobby));
        return "ok";
    }

    /****
     *集合方式  请求参数名与集合变量名相同   通过 @RequestParam 绑定集合关系
     * @url http://localhost:8080/listParam?hobby=篮球&hobby=足球&hobby=乒乓球
     * @param hobby
     * @return [篮球, 足球, 乒乓球]
     */
    @RequestMapping("/listParam")
    public String listParam(@RequestParam List<String> hobby) {
        System.out.println(hobby);
        return "ok";
    }
```

## 路径参数

```java
    /****
     *  路径参数
     * @url http://localhost:8080/jsonParams
     * @param id
     * @return
     */
    @RequestMapping("/path/{id}")
    public String path(@PathVariable Integer id) {
        System.out.println(id);
        return "ok";
    }
```

## 日期参数

```java
    @RequestMapping("/dateParams2")
    public String dateParams2(@DateTimeFormat(pattern = "yyyy-mm-dd HH:mm:ss") Date updateTime) {
        System.out.println(updateTime);
        return "ok";
    }

    @RequestMapping("/dateParams")
    public String dateParams(@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime updateTime) {
        System.out.println(updateTime);
        return "ok";
    }
```

## JWT 令牌   token

```java
    @Test  //创建令牌
    public void jwt() {
        Map<String, Object> claims = new HashMap<>();
        claims.put("id", 1);
        claims.put("name", "Tom");
        String jwt = Jwts.builder()
                .signWith(SignatureAlgorithm.HS256, "guoguo")//设置签名算法
                .setClaims(claims)  //自定义内容
                .setExpiration(new Date(System.currentTimeMillis() + 3600 * 1000))  //设置有效期为1小时
                .compact();

        System.out.println(jwt);
    }


    @Test   //解析令牌
    public void testParseJwt() {
        Claims claims = Jwts.parser()
                .setSigningKey("guoguo")  //两个密钥都要相同
                .parseClaimsJws("eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiVG9tIiwiaWQiOjEsImV4cCI6MTY5MjY4MDUxNn0.uuWEm043DAlfq_OxAB8_RTrZdiP_GPMKrBHyd7r-AHw")
                .getBody();
        System.out.println(claims);
    }
```

### 自己封装版本  

导入 令牌的包

```xml
<!--        生成令牌-->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-api</artifactId>
    <version>0.11.2</version>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-impl</artifactId>
    <version>0.11.2</version>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt-jackson</artifactId>
    <version>0.11.2</version>
    <scope>runtime</scope>
</dependency>
```

首先封装一个公共的 `JwtUtils`

```java
package com.example.onlineWatchTV.utils;


import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Slf4j

public class JwtUtil {
    /**
     * 在这里定义了三个在token中的参数  分别是 id username和 过期时间
     *
     * @param id
     * @param username
     * @return
     */
    public static String getToken(Long id, String username) {
        // 创建安全的 HS256 密钥
        SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        //使用生成的密钥进行 JWT 的签名和验证操作
        JwtParser jwtParser = Jwts.parserBuilder().setSigningKey(secretKey).build();
//// 生成 JWT
        Map<String, Object> claims = new HashMap<>();
        claims.put("id", id);
        claims.put("username", username);
        String jwtToken = Jwts.builder().setClaims(claims)  //自定义内容
                .signWith(secretKey).setExpiration(new Date(System.currentTimeMillis() + 3600 * 1000))  //设置有效期为1小时
                .compact();
        log.info("密钥创建成功:{}", jwtToken);
        return jwtToken;
    }


    public static Object getDataByToken(String jwtToken) {
        SecretKey secretKey = Keys.secretKeyFor(SignatureAlgorithm.HS256);
        JwtParser jwtParser = Jwts.parserBuilder().setSigningKey(secretKey).build();

        //// 解析和验证 JWT
        try {
            Claims claims3 = jwtParser.parseClaimsJws(jwtToken).getBody();
            log.info("密钥解析的结果claims:{}", claims3);
            return claims3;
            // 进一步处理解析得到的数据
        } catch (JwtException e) {
            // 处理验证失败的情况
            return e;
        }
    }
}
```

使用这种方式调用就可以

```java
        String token = JwtUtil.getToken(loginPerson.getId(), loginPerson.getUsername());   //获取token
        String token = JwtUtil.getToken(123456, "张三");   //获取token
        Object dataByToken = JwtUtil.getDataByToken(token);  //解析token
```



## filter 路径拦截


```java
package com.itheima.filter;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

@WebFilter(urlPatterns = "/*")
public class DemoFilter implements Filter {

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("拦截到了请求");
        filterChain.doFilter(servletRequest, servletResponse);
        System.out.println("放行后");
    }
}
```


## md5加密

> **DigestUtils.md5DigestAsHex(password.getBytes())**

```java
    employee.setPassword(DigestUtils.md5DigestAsHex("123456".getBytes()));
     password = DigestUtils.md5DigestAsHex(password.getBytes());
```

## 后端解决接口跨域问题  @CrossOrigin

> 使用 ** @CrossOrigin**  这个注解 可以解决跨域问题
>
> @CrossOrigin(origins = "http://127.0.0.1:8080")
> //origins ="允许跨域访问的协议+ip+端口"
> //如果想设置所有地址都可以跨域设置成origins ="*"

```java

@Slf4j
@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {

    @PostMapping("/auth")
    public R login(HttpServletRequest request, @RequestBody Employee employee) {
        log.info("employee数据为 {}.....", employee);
        return R.success("调用成功！");
    }
}
```



## 解决跨域问题  [全部接口]

```java
package com.example.helpanimals.utils;

import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;



@Component
public class CorsFilter implements Filter {
    @Override
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) res;
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Accept, X-Requested-With, remember-me");
        chain.doFilter(req, res);
    }
}
```

## mybatis 控制台打印sql

```yml
mybatis:
    mapper-locations: classpath:com/example/helpanimals/mapper/*.xml
    configuration:
        log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

## 后端解决  Long   Id丢失精度问题   

```java
@JsonFormat(shape =JsonFormat.Shape.STRING)
private Long id;
```

## 新版 pageHelper  分页参数为0时不能查询全部

>  首先创建一个文件  `application.properties`

```properties

#标识是数据库方言
pagehelper.helperDialect=mysql
#启用合理化，如果pageNum<1会查询第一页，如果pageNum>pages会查询最后一页
pagehelper.reasonable=true
#为了支持startPage(Object params)方法，增加了该参数来配置参数映射，用于从对象中根据属性名取值， 可以配置pageNum,pageSize,count,pageSizeZero,reasonable，不配置映射的用默认值， 默认值为pageNum=pageNum;pageSize=pageSize;count=countSql;reasonable=reasonable;pageSizeZero=pageSizeZero
pagehelper.params=count=countSql
#支持通过 Mapper 接口参数来传递分页参数，默认值false，分页插件会从查询方法的参数值中，自动根据上面 params 配置的字段中取值，查找到合适的值时就会自动分页
pagehelper.supportMethodsArguments=true
#如果 pageSize=0 就会查询出全部的结果（相当于没有执行分页查询）
pagehelper.pageSizeZero=true

```

