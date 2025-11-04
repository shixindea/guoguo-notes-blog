import comp from "/Users/guoguo/code/my-project/guoguo-notes-v2/docs/.vuepress/.temp/pages/demo/kvidu408/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/kvidu408/\",\"title\":\"foo\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"foo\",\"createTime\":\"2025/08/24 00:20:06\",\"permalink\":\"/demo/kvidu408/\"},\"readingTime\":{\"minutes\":0.04,\"words\":11},\"git\":{},\"filePathRelative\":\"notes/demo/foo.md\",\"headers\":[]}")
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
