/*
 * @Author: zpliu
 * @Date: 2020-07-21 12:46:31
 * @Last Modified by: zpliu
 * @Last Modified time: 2020-07-21 13:06:26
 * this file contain some commond routers
 * + home
 * + 404
 */

export default [
  {
    path: '/',
    name: 'home',
    meta: { title: 'cottonweb' },
  },
  {
    path: '/404',
    name: 'pge404',
    component: () => {
      return import('../views/404.vue')
    },
    meta: { title: '404' },
  },
]
