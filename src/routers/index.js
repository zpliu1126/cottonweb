import Vue from 'vue'
import VueRouter from 'vue-router'
import Nprogress from 'nprogress'
Vue.use(VueRouter)
let routes = []
/**
 * 自动注册
 */
const requireContext = require.context('./', true, /\.js$/)
requireContext.keys().forEach((filename) => {
  if (filename === './index.js') {
    return
  }
  const routeModule = requireContext(filename) // 获取文件内容
  routes = [...routes, ...routeModule.default] // 合并两个数组内容
})
const router = new VueRouter({
  routes,
})
//最后添加404守卫路由
router.addRoutes([
  {
    path: '*',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
])

//配置全局路由守卫
router.beforeEach((to, from, next) => {
  Nprogress.start()
  document.title = from.meta.title
  next()
})
router.afterEach((to) => {
  // console.log(from.name)
  document.title = to.meta.title
  Nprogress.done()
})
export default router
