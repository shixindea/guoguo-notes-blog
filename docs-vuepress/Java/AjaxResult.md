---
title: Java AjaxResult
date: 2023-5-21
tags:
  - Java
  - AjaxResult
categories:
  - 自学篇
createTime: 2025/08/24 00:25:17
permalink: /article/eu6eeqww/
---

# 后端返前端



## 分页调用

```java
     // 构建分页信息
        PageHelper.startPage(pageNum, pageSize);
        List<Employee> employees = employeeMapper.getUsers();
        PageInfo<Employee> employeePageInfo = new PageInfo<>(employees);

        return AjaxResult.pageSuccess(employeePageInfo.getList(), employeePageInfo.getTotal());
```















## 整体代码

```java
package com.example.helpanimals.common;

import com.example.helpanimals.entity.Employee;
import org.springframework.util.StringUtils;

import java.util.HashMap;
import java.util.List;
//public class AjaxResult {
//}
//


public class AjaxResult extends HashMap<String, Object> {
    private static final long serialVersionUID = 1L;
    public static final String CODE_TAG = "code";
    public static final String MSG_TAG = "msg";
    public static final String DATA_TAG = "data";

    public AjaxResult() {
    }

    public AjaxResult(int code, String msg) {
        super.put("code", code);
        super.put("msg", msg);
    }

    public AjaxResult(int code, String msg, Object data) {
        super.put("code", code);
        super.put("msg", msg);
        if (!StringUtils.isEmpty(data)) {
            super.put("data", data);
        }
    }

    public <T> AjaxResult(int code, String msg, List<T> data, long total) {
        super.put("code", code);
        super.put("msg", msg);
        if (!StringUtils.isEmpty(data)) {
            super.put("data", data);
        }
        if (!StringUtils.isEmpty(total)) {
            super.put("total", total);
        }
    }

    public static AjaxResult success() {
        return success("操作成功");
    }

    public static AjaxResult success(Object data) {
        return success("操作成功", data);
    }

    public static AjaxResult success(String msg) {
        return success(msg, (Object) null);
    }

    public static <T> AjaxResult pageSuccess(List<T> data, long total) {
        return new AjaxResult(200, "操作成功", data, total);
    }

    public static AjaxResult success(String msg, Object data) {
        return new AjaxResult(200, msg, data);
    }

    public static AjaxResult error() {
        return error("操作失败");
    }

    public static AjaxResult error(String msg) {
        return error(msg, (Object) null);
    }

    public static AjaxResult error(String msg, Object data) {
        return new AjaxResult(500, msg, data);
    }

    public static AjaxResult error(int code, String msg) {
        return new AjaxResult(code, msg, (Object) null);
    }
}



```

