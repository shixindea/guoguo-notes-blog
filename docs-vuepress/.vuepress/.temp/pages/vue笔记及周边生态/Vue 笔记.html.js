import comp from "/Users/guoguo/code/my-project/guoguo-notes-v2/docs/.vuepress/.temp/pages/vue笔记及周边生态/Vue 笔记.html.vue"
const data = JSON.parse("{\"path\":\"/vue%E7%AC%94%E8%AE%B0%E5%8F%8A%E5%91%A8%E8%BE%B9%E7%94%9F%E6%80%81/Vue%20%E7%AC%94%E8%AE%B0.html\",\"title\":\"Vue 笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Vue 笔记\",\"date\":\"2022-12-29T00:00:00.000Z\",\"tags\":[\"笔记\",\"Vue\"],\"categories\":[\"居家篇\"]},\"readingTime\":{\"minutes\":9.65,\"words\":2896},\"git\":{},\"filePathRelative\":\"vue笔记及周边生态/Vue 笔记.md\",\"headers\":[],\"categoryList\":[{\"id\":\"fa4ad0\",\"sort\":10017,\"name\":\"vue笔记及周边生态\"}]}")
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
