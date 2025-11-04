import comp from "/Users/guoguo/code/my-project/guoguo-notes-v2/docs/.vuepress/.temp/pages/en/index.html.vue"
const data = JSON.parse("{\"path\":\"/en/\",\"title\":\"Hello VuePress\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Hello VuePress\"},\"readingTime\":{\"minutes\":0.09,\"words\":26},\"git\":{},\"filePathRelative\":\"en/README.md\",\"headers\":[],\"categoryList\":[{\"id\":\"9cfefe\",\"sort\":10004,\"name\":\"en\"}]}")
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
