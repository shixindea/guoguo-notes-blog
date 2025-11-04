---
title: vite手写插件
createTime: 2025/08/24 00:25:17
permalink: /article/rvsmt58w/
---
## 插件生命周期钩子文档

[插件 API | Vite 官方中文文档](https://vitejs.cn/vite3-cn/guide/api-plugin.html#vite-specific-hooks)

## 手写插件

> 导入 和 引入

```ts
import MyVitePlugin from "./plugins/vite-aliases.ts";

 plugins: [
        MyVitePlugin()
    ],
```

> vite-aliases.ts 文件

```ts
export default (): any => {
    return {
        /**
         * 
         * @param config vite.config.ts 中写的配置会原封不动的返回
        * @param env { mode: 'development', command: 'serve',isSsrBuild: false, isPreview: false }
         * @returns Object
         */
        config(config: any, env: any) {
            // console.log('😁😁😁config, env ===>', config, env);
            console.log('😁😁😁1111111111111');
            return {}
        },
        transformIndexHtml(html: any) {
            return html.replace(
                /<title>(.*?)<\/title>/,
                `<title>网站标题!</title>`
            )
        }

    }
}
```

## 编写插件已学配置

![image-20241124094133403](https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/image-20241124094133403.png)
