export default [
  {
    path: '/',
    name: 'AppMaster',
    component: () => import('../layout/AppMaster.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]
