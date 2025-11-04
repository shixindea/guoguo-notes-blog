import comp from "/Users/guoguo/code/my-project/guoguo-notes-v2/docs/.vuepress/.temp/pages/React笔记/02_react案例_笔记.html.vue"
const data = JSON.parse("{\"path\":\"/React%E7%AC%94%E8%AE%B0/02_react%E6%A1%88%E4%BE%8B_%E7%AC%94%E8%AE%B0.html\",\"title\":\"React案例\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"React案例\",\"date\":\"2022-08-04T00:00:00.000Z\",\"tags\":[\"React\",\"案例\"],\"categories\":[\"自学篇\"]},\"readingTime\":{\"minutes\":3.39,\"words\":1016},\"git\":{},\"filePathRelative\":\"React笔记/02_react案例_笔记.md\",\"headers\":[],\"categoryList\":[{\"id\":\"5782db\",\"sort\":10016,\"name\":\"React笔记\"}]}")
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
