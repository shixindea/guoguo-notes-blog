import comp from "/Users/guoguo/code/my-project/guoguo-notes-v2/docs/.vuepress/.temp/pages/React笔记/React 笔记.html.vue"
const data = JSON.parse("{\"path\":\"/React%E7%AC%94%E8%AE%B0/React%20%E7%AC%94%E8%AE%B0.html\",\"title\":\"React 笔记\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"React 笔记\",\"date\":\"2022-12-29T00:00:00.000Z\",\"tags\":[\"React\",\"笔记\"],\"categories\":[\"居家篇\"]},\"readingTime\":{\"minutes\":12.41,\"words\":3724},\"git\":{},\"filePathRelative\":\"React笔记/React 笔记.md\",\"headers\":[],\"categoryList\":[{\"id\":\"5782db\",\"sort\":10016,\"name\":\"React笔记\"}]}")
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
