import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import dayBoookRouter from '../modules/daybook/router'
import authRouter from '../modules/auth/router'
import isAuthenticatedGuard from '../modules/auth/router/auth-guard'

const routes = [
  {
    path:'/',
    redirect:{name:'login'}
  },
  {
    path:'/auth',
    ...authRouter
  },
  {
    path:'/daybook',
    beforeEnter:[isAuthenticatedGuard],
    ...dayBoookRouter
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
