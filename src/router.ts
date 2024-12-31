import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Team from './views/Team.vue'
import SignIn from './views/SignInFlow/SignIn.vue'
import Request from './views/SignInFlow/Request.vue'
import Recover from './views/SignInFlow/Recover.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/team',
    name: 'team',
    component: Team,
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
  },
  {
    path: '/request',
    name: 'request',
    component: Request,
  },
  {
    path: '/recover',
    name: 'recover',
    component: Recover,
  },
]

// /**
//  * @type {import('vue-router').Router}
//  */
const router = createRouter({
  history: createWebHistory('/'), // Use createWebHistory for Vue 3
  routes,
})

export default router
