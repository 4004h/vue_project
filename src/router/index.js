import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import BasicView from '../views/BasicView.vue'
import DeepView from '../views/DeepView.vue'
import DeepView2 from '../views/DeepView2.vue'
import LoginView from '../views/LoginView.vue'
import CalculatorView1 from '../views/CalculatorView1.vue'
import CalculatorView2 from '../views/CalculatorView2.vue'
import CalculatorView3 from '../views/CalculatorView3.vue'
import CalculatorView4 from '../views/CalculatorView4.vue'
import MixView from '../views/MixView.vue'
import User from '../views/UserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/basic',
    name: 'basic',
    component: BasicView
  },
  {
    path: '/deep',
    name: 'deep',
    component: DeepView
  },
  {
    path: '/deep_2',
    name: 'deep_2',
    component: DeepView2
  },
  {
    path: '/calculator1',
    name: 'calculator1',
    component: CalculatorView1
  },
  {
    path: '/calculator2',
    name: 'calculator2',
    component: CalculatorView2
  },
  {
    path: '/calculator3',
    name: 'calculator3',
    component: CalculatorView3
  },
  {
    path: '/calculator4',
    name: 'calculator4',
    component: CalculatorView4
  },
  {
    path: '/mixin',
    name: 'mixin',
    component: MixView
  },
  {
    path: '/user',
    name: 'user',
    component: User
  }
  
  ,
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router