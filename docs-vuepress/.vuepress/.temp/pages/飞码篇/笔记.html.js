import comp from "/Users/guoguo/code/my-project/guoguo-notes-v2/docs/.vuepress/.temp/pages/飞码篇/笔记.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%A3%9E%E7%A0%81%E7%AF%87/%E7%AC%94%E8%AE%B0.html\",\"title\":\"笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"笔记\",\"date\":\"2023-09-05T00:00:00.000Z\",\"tags\":[\"笔记\"],\"categories\":[\"飞码篇\"]},\"readingTime\":{\"minutes\":1.03,\"words\":309},\"git\":{},\"filePathRelative\":\"飞码篇/笔记.md\",\"headers\":[],\"categoryList\":[{\"id\":\"e89e1a\",\"sort\":10003,\"name\":\"飞码篇\"}]}")
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
