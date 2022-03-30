import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('../views/Login')
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'empty'},
      component: () => import('../views/Register')
    },
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('../views/Home')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: {layout: 'main'},
      component: () => import('../views/Categories')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      meta: {layout: 'main'},
      component: () => import('../views/Detail')
    },
    {
      path: '/history',
      name: 'history',
      meta: {layout: 'main'},
      component: () => import('../views/History')
    },
    {
      path: '/planning',
      name: 'planning',
      meta: {layout: 'main'},
      component: () => import('../views/Planning')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'main'},
      component: () => import('../views/Profile')
    },
    {
      path: '/record',
      name: 'record',
      meta: {layout: 'main'},
      component: () => import('../views/Record')
    }
  ]
})
