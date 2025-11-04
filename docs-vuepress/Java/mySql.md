---
title: Mysql
date: 2023-5-21
tags:
  - Mysql
categories:
  - 自学篇
createTime: 2025/08/24 00:25:17
permalink: /article/oqmkm6lq/
---
# mySql

## 创建表

```mysql
CREATE TABLE student(
id int comment "编号",
name VARCHAR(50) COMMENT "姓名",
age int COMMENT '年龄',
gender VARCHAR(1) comment '性别')
comment '用户表'
```

## 显示当前数据库中的表

```mysql
show tables
```

## 显示表结构

```mySql
desc student
```

## 代码片段

```sql
select * from person WHERE id BETWEEN 0 AND  122 and name like '%23'

select * from person WHERE id in (112,113)

select gender,count(*) from person WHERE id<200 GROUP BY gender

SELECT name,id,gender from person LIMIT 1,1
```

## 管理用户

### 查询用户

```sql
use mysql
select * from user
```

### 创建用户

```sql
create user 'yxd'@'localhost' IDENTIFIED by '123321'
create user '用户名'@'主机地址' IDENTIFIED by '密码'
```

> `localhost`表示本机可用
>
> 如果任意主机都需要连接的话 使用`'%'` 即可

```sql
create user '用户名'@'%' IDENTIFIED by '密码'
```




```sql
 SELECT NAME,
(CASE		gender 		WHEN '男' THEN		'小伙子' 		WHEN '女' THEN		'女朋友' ELSE '狗' 	END )AS '别称' 
FROM	person
```



```sql
create TABLE user(
	id int PRIMARY KEY auto_increment comment '主键',
	name VARCHAR(10) not NULL UNIQUE COMMENT '姓名',
	age int check(age>18 && age<120) COMMENT '年龄',
	STATUS char(1) DEFAULT '1' COMMENT '状态',
	gender char(1) comment '性别'

)comment '用户表'

use test

INSERT into user(name,age,status,gender) values ('tom',19,'1','女'),('tom2',19,'2','男')


select * from user
```



## 自查询

> 需要注意  子查询 必须起别名

```sql
SELECT * FROM person JOIN person as b ON person.id = b.idCard

SELECT * FROM person p,person b WHERE p.id = b.idCard
```

## 合并  两个表查询后合并为新表

> UNION all  合并查询              UNION 合并查询后去重
>
> 注意两个表的列数需要相同 字段类型也需要一致

```
select * FROM person WHERE gender= '男' 
UNION all
SELECT * FROM person WHERE name like '张三
```

## DISTINCT 去除重复项  去重



## 事务  四大特性 基本操作   隔离级别

###  四大特性ACID

>- 原子性(Atomicity)：事务是不可分割的最小操作但愿，要么全部成功，要么全部失败
>- 一致性(Consistency)：事务完成时，必须使所有数据都保持一致状态
>- 隔离性(Isolation)：数据库系统提供的隔离机制，保证事务在不受外部并发操作影响的独立环境下运行
>- 持久性(Durability)：事务一旦提交或回滚，它对数据库中的数据的改变就是永久的



### 事务的基本操作



事务是一组操作的集合，事务会把所有操作作为一个整体一起向系统提交或撤销操作请求，即这些操作要么同时成功，要么同时失败。

基本操作：

```mysql
-- 1. 查询张三账户余额
select * from account where name = '张三';
-- 2. 将张三账户余额-1000
update account set money = money - 1000 where name = '张三';
-- 此语句出错后张三钱减少但是李四钱没有增加
模拟sql语句错误
-- 3. 将李四账户余额+1000
update account set money = money + 1000 where name = '李四';

-- 查看事务提交方式
SELECT @@AUTOCOMMIT;
-- 设置事务提交方式，1为自动提交，0为手动提交，该设置只对当前会话有效
SET @@AUTOCOMMIT = 0;
-- 提交事务
COMMIT;
-- 回滚事务
ROLLBACK;

-- 设置手动提交后上面代码改为：
select * from account where name = '张三';
update account set money = money - 1000 where name = '张三';
update account set money = money + 1000 where name = '李四';
commit;
```

操作方式二：

开启事务：
`START TRANSACTION 或 BEGIN TRANSACTION;`
提交事务：
`COMMIT;`
回滚事务：
`ROLLBACK;`

操作实例：

```mysql
start transaction;
select * from account where name = '张三';
update account set money = money - 1000 where name = '张三';
update account set money = money + 1000 where name = '李四';
commit;
```

  并发事务

| 问题       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| 脏读       | 一个事务读到另一个事务还没提交的数据                         |
| 不可重复读 | 一个事务先后读取同一条记录，但两次读取的数据不同             |
| 幻读       | 一个事务按照条件查询数据时，没有对应的数据行，但是再插入数据时，又发现这行数据已经存在 |

> 这三个问题的详细演示：https://www.bilibili.com/video/BV1Kr4y1i7ru?p=55cd 

并发事务隔离级别：

| 隔离级别              | 脏读 | 不可重复读 | 幻读 |
| --------------------- | ---- | ---------- | ---- |
| Read uncommitted      | √    | √          | √    |
| Read committed        | ×    | √          | √    |
| Repeatable Read(默认) | ×    | ×          | √    |
| Serializable          | ×    | ×          | ×    |

- √表示在当前隔离级别下该问题会出现
- Serializable 性能最低；Read uncommitted 性能最高，数据安全性最差

查看事务隔离级别：
`SELECT @@TRANSACTION_ISOLATION;`
设置事务隔离级别：
`SET [ SESSION | GLOBAL ] TRANSACTION ISOLATION LEVEL {READ UNCOMMITTED | READ COMMITTED | REPEATABLE READ | SERIALIZABLE };`
SESSION 是会话级别，表示只针对当前会话有效，GLOBAL 表示对所有会话有效

‘

## 索引

```sql
-- 创建索引
create index idx_student_age on student(age)
-- 展示表名中的所有的索引
show index from student
-- 删除索引
DROP index idx_student_age on student
```







# 学到了 65集

[08. 进阶-MySQL安装(linux版本)_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Kr4y1i7ru?p=65&vd_source=cb80c53a34a612fea928a61d4319bb8d)