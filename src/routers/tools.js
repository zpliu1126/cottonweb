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
          return import('@/views/tools/blast+')
        },
        meta: { title: 'Blast+' },
      },
    ],
  },
  {
    path: '/tools/jbrowse',
    component: HomeLayout,
    redirect: '/tools/jbrowse/index',
    children: [
      {
        path: '/tools/jbrowse/index',
        name: 'jbrowse',
        component: () => {
          return import('@/views/tools/JBrowse')
        },
        meta: { title: 'JBrowse' },
      },
    ],
  },
]
