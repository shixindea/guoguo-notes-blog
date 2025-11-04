import comp from "/Users/guoguo/code/my-project/guoguo-notes-v2/docs/.vuepress/.temp/pages/React.html.vue"
const data = JSON.parse("{\"path\":\"/React.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":2.9,\"words\":870},\"git\":{},\"filePathRelative\":\"React.md\",\"headers\":[],\"categoryList\":[]}")
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
