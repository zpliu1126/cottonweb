/*
 * @Author: zpliu
 * @Date: 2020-07-21 12:46:31
 * @Last Modified by: zpliu
 * @Last Modified time: 2020-07-28 09:02:36
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
    path: '/tools/blast',
    component: HomeLayout,
    redirect: '/tools/blast/index',
    children: [
      {
        path: '/tools/blast/index',
        name: 'Blast',
        component: () => {
          return import('@/views/404.vue')
        },
        meta: { title: 'Blast' },
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
]
