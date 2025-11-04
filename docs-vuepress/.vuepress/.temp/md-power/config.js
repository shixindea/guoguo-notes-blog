import { defineClientConfig } from 'vuepress/client'
import Tabs from '/Users/guoguo/code/my-project/guoguo-notes-v2/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.161_esbuild@0.25.9_markdown-it@14.1.0_typescript@5.9._d139a86124d94be7d20268c11f4114bc/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/guoguo/code/my-project/guoguo-notes-v2/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.161_esbuild@0.25.9_markdown-it@14.1.0_typescript@5.9._d139a86124d94be7d20268c11f4114bc/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/Users/guoguo/code/my-project/guoguo-notes-v2/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.161_esbuild@0.25.9_markdown-it@14.1.0_typescript@5.9._d139a86124d94be7d20268c11f4114bc/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from '/Users/guoguo/code/my-project/guoguo-notes-v2/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.161_esbuild@0.25.9_markdown-it@14.1.0_typescript@5.9._d139a86124d94be7d20268c11f4114bc/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'

import '/Users/guoguo/code/my-project/guoguo-notes-v2/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.161_esbuild@0.25.9_markdown-it@14.1.0_typescript@5.9._d139a86124d94be7d20268c11f4114bc/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
    
  }
})
