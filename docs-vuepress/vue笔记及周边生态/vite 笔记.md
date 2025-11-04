---
title: vite 笔记
createTime: 2025/08/24 00:25:17
permalink: /article/r8086lxg/
---
## 开启 CSS 路径追踪

>  devSourcemap: true, 

```ts
import { defineConfig } from "vite";

export default defineConfig({
    optimizeDeps: {
        exclude: [] // 将指定数组中的依赖不进行依赖预构建
    },
    envPrefix: "VITE_",  // 配置环境变量前缀
    css: {
        devSourcemap: true,  // 开启 CSS source map 追踪 就是在页面上的
    }
});
```

## vite.Base.config.ts 配置

```ts
import { defineConfig } from "vite";
import viteCompression from 'vite-plugin-compression'

export default defineConfig({

    optimizeDeps: {
        exclude: [] // 将指定数组中的依赖不进行依赖预构建
    },
    envPrefix: "VITE_",  // 配置环境变量前缀
    resolve: {
        alias: {
            "@": "/src",
            "@assets": "/src/assets",
        }
    },
   plugins: [
        vue(),
        viteCompression()   // 压缩插件
    ],
    build: {  // 配置打包配置
        rollupOptions: {  // rollup 配置
            output: {
                assetFileNames: "[name].[ext].[hash]",  // 输出的文件名  名称.扩展名.hash值
                // 分包策略  会再打包时 将node_modules 打包为 vendor 文件
                manualChunks: (id) => {
                    console.log('id ===>', id);
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                }
            }
        },
        assetsInlineLimit: 4096000, // 4000kb
        outDir: 'dist', // 输出目录
        assetsDir: 'static',
        minify: false, // 打包后不乱码
    }
});
```

## vite.config.ts 配置

```ts
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

import viteBaseConfig from './vite.base.config.ts'
import viteDevConfig from './vite.dev.config.ts'
import viteTestConfig from './vite.dev.config.ts'
import viteProdConfig from './vite.prod.config.ts'

const envResolver: any = {
  "serve": () => {
    console.log("本地环境");
    return { ...viteBaseConfig, ...viteDevConfig }
  },
  "test": () => {
    console.log("测试环境");
    return { ...viteBaseConfig, ...viteTestConfig }
  },
  "build": () => {
    console.log("生产环境");
    return { ...viteBaseConfig, ...viteProdConfig }
  },
}


export default defineConfig(({ command, mode }) => {
  console.log('command,mode ===>', command, mode);
  // 加载环境变量，确保环境变量文件路径正确
  const env = loadEnv(mode, `${process.cwd()}/config/env`, 'VITE_');      // 这个地方控制的是 env 中的变量
  console.log('env.VITE_APP_KEY ===>', env.VITE_APP_KEY);

  // 指定新的 env 目录路径
  const envDir = './config/env';

  return {
    envDir,           // 指定新的 env 目录路径  这个地方控制的是 import.meta.env 中的变量
    plugins: [vue()],
    ...envResolver[command]()  
  };
});

```

## 编写插件已学配置

![image-20241124094133403](https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/image-20241124094133403.png)

## vite 打包 **[gzip压缩]**    vite-plugin-compression

```ts
import viteCompression from 'vite-plugin-compression'


plugins: [
    viteCompression()
],
```

## vite CDN 加速

![image-20241124164217011](https://aliyxd.oss-cn-beijing.aliyuncs.com/guoguo-notes/image-20241124164217011.png)