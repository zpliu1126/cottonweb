/*
 * @Author: zpliu
 * @Date: 2020-07-21 12:46:31
 * @Last Modified by: zpliu
 * @Last Modified time: 2020-08-15 15:54:51
 * this file contain some commond routers
 * + home
 * + 404
 */
import HomeLayout from '@/layout/home'
export default [
  {
    path: '/',
    component: HomeLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => {
          return import('@/views/home')
        },
        meta: { title: 'cottonWeb' },
      },
    ],
  },
  {
    path: '/404',
    name: 'pge404',
    component: () => {
      return import('../views/404.vue')
    },
    meta: { title: '404' },
  },
  {
    path: '/lazyload',
    name: 'lazyload',
    component: () => {
      return import('@/views/lazyload')
    },
    meta: {
      title: '相册',
    },
  },
]
