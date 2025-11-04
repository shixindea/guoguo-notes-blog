---
title: valibot校验学习
createTime: 2025/08/24 00:25:16
permalink: /article/636rl3os/
---
## parse

### 校验 email

```ts
    console.log('-- 校验emall ')
    try {
      const EmailSchema = v.pipe(v.string(), v.email())
      const email = v.parse(EmailSchema, '')
      console.log('email ===>', email)
    } catch (error) {
      console.log(error)
    }
```



### 数组类型

```tsx
  const StringArraySchema = v.array(v.string(), 'An array is required.')
      const ObjectArraySchema = v.array(v.object({ key: v.string() }))

      const theTestStringArr = ['111', '123', '123']
      const theTestObjArr = [
        { key: 'key', value: 'value' },
        {
          key: '111',
          value: '222',
        },
      ]
      
      console.log(
        'ObjectArraySchema ===>',
        v.parse(StringArraySchema, theTestStringArr),
      )

      console.log(
        'ObjectArraySchema ===>',
        v.parse(ObjectArraySchema, theTestObjArr),
      )
```

