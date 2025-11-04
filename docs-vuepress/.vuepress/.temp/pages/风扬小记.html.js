import comp from "/Users/guoguo/code/my-project/guoguo-notes-v2/docs/.vuepress/.temp/pages/风扬小记.html.vue"
const data = JSON.parse("{\"path\":\"/%E9%A3%8E%E6%89%AC%E5%B0%8F%E8%AE%B0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"git\":{},\"filePathRelative\":\"风扬小记.md\",\"headers\":[],\"categoryList\":[]}")
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
