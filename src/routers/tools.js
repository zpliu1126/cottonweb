import HomeLayout from '@/layout/home'
export default [
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
]
