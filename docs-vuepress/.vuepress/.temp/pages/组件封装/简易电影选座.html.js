import comp from "/Users/guoguo/code/my-project/guoguo-notes-v2/docs/.vuepress/.temp/pages/组件封装/简易电影选座.html.vue"
const data = JSON.parse("{\"path\":\"/%E7%BB%84%E4%BB%B6%E5%B0%81%E8%A3%85/%E7%AE%80%E6%98%93%E7%94%B5%E5%BD%B1%E9%80%89%E5%BA%A7.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":10.38,\"words\":3114},\"git\":{},\"filePathRelative\":\"组件封装/简易电影选座.md\",\"headers\":[],\"categoryList\":[{\"id\":\"2d5f87\",\"sort\":10006,\"name\":\"组件封装\"}]}")
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
