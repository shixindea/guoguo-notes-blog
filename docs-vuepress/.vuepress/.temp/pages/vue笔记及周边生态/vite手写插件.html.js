import comp from "/Users/guoguo/code/my-project/guoguo-notes-v2/docs/.vuepress/.temp/pages/vue笔记及周边生态/vite手写插件.html.vue"
const data = JSON.parse("{\"path\":\"/vue%E7%AC%94%E8%AE%B0%E5%8F%8A%E5%91%A8%E8%BE%B9%E7%94%9F%E6%80%81/vite%E6%89%8B%E5%86%99%E6%8F%92%E4%BB%B6.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.43,\"words\":129},\"git\":{},\"filePathRelative\":\"vue笔记及周边生态/vite手写插件.md\",\"headers\":[],\"categoryList\":[{\"id\":\"fa4ad0\",\"sort\":10017,\"name\":\"vue笔记及周边生态\"}]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
