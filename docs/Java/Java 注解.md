---
title: Java 注解
date: 2023-5-21
tags:
  - Java
  - 注解
categories:
  - 自学篇
createTime: 2025/08/24 00:25:17
permalink: /article/5hzelc7o/
---

##  Java注解

| 注解名                 | 作用                                                         | 备注                                                         |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| @Override              | 用来重写父类中的定义的方法                                   | Static 和 private 里面的方法不能被重写                       |
| @RequestParam          | 集合方式请求参数名与集合变量名相同                           | 通过 @RequestParam 绑定集合关系                              |
| @PathVariable          | 路径参数标注                                                 | @RequestMapping("/path/{id}")<br/>public String path(@PathVariable Integer id) {<br/>    System.*out*.println(id);<br/>    return "ok";<br/>} |
| @RequestParam          | 默认值注解                                                   | public Result page(<br/>@RequestParam(defaultValue = "1") Integer page,<br/>@RequestParam(defaultValue = "10") Integer pageSize) |
| @JsonProperty("uType") | 当定义uId,uName,uType的情况，可以使用这个注解来<br/>指定转义， 否则可能会出现前端传值，但是后端接收不到的情况 | //    目前类型  1送养 2寻宠  3溜宠物<br/>@JsonProperty("uType")<br/>private String uType; |
| @JsonIgnore            | [实体类](https://so.csdn.net/so/search?q=实体类&spm=1001.2101.3001.7020)字段加@JsonIgnore注解 可以 不返回给前端 | @JsonIgnore<br/>private int pageNum;<br/>@JsonIgnore<br/>private int pageSize; |
|                        |                                                              |                                                              |
|                        |                                                              |                                                              |
|                        |                                                              |                                                              |
|                        |                                                              |                                                              |
|                        |                                                              |                                                              |



| 注解          | 支持的类型 | 支持的请求类型        | 支持的Content-Type | 请求示例   |
| ------------- | ---------- | --------------------- | ------------------ | ---------- |
| @PathVariable | url        | GET                   | 所有               | /test/{id} |
| @RequestParam | url        | GET                   | 所有               | /test?id=1 |
| @RequestBody  | Body       | POST/PUT/DELETE/PATCH | json               | {“id”:1}   |