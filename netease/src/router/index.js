import Vue from 'vue'
import Router from 'vue-router'
import search from '@/components/search/search'
import classify from '@/components/classify/classify'
import personal from '@/components/personal/personal'
import shopcart from '@/components/shopcart/shopcart'
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/classify',
    component: classify
  },
  {
    path: '/personal',
    component: personal
  },
  {
    path: '/shopcart',
    component: shopcart
  }
]

export default new Router({
  linkActiveClass: 'active',
  routes
})
