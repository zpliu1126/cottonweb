import HomeLayout from '@/layout/home'
export default [
  {
    path: '/login',
    component: HomeLayout,
    redirect: '/login/index',
    children: [
      {
        path: '/login/index',
        name: 'login',
        component: () => {
          return import('@/views/people/login.vue')
        },
        meta: { title: 'login' },
      },
    ],
  },
]
