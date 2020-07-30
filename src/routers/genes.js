import HomeLayout from '@/layout/home'
export default [
  {
    path: '/search/geneid',
    component: HomeLayout,
    redirect: '/search/geneid/index',
    children: [
      {
        path: '/search/geneid/index',
        name: 'genes',
        component: () => {
          return import('@/views/charts/test')
        },
        meta: { title: 'genes' },
      },
    ],
  },
]
