import comp from "/Users/riverjjiang/code/vuepress-theme-hope/my-docs/src/.vuepress/.temp/pages/demo/disable.html.vue"
const data = JSON.parse("{\"path\":\"/demo/disable.html\",\"title\":\"Disabling layout and features\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Disabling layout and features\",\"icon\":\"gears\",\"order\":4,\"category\":[\"Guide\"],\"tag\":[\"disable\"],\"navbar\":true,\"breadcrumb\":true,\"pageInfo\":false,\"contributors\":false,\"editLink\":false,\"lastUpdated\":false,\"prev\":true,\"next\":true,\"comment\":false,\"footer\":true,\"backtotop\":true,\"description\":\"You can disable some function and layout on the page by setting the Frontmatter of the page.\"},\"headers\":[],\"readingTime\":{\"minutes\":0.31,\"words\":92},\"filePathRelative\":\"demo/disable.md\",\"excerpt\":\"<p>You can disable some function and layout on the page by setting the Frontmatter of the page.</p>\\n\",\"autoDesc\":true}")
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
