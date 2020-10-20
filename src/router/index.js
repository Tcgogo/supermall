import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/profile',
    component: () => import('../views/profile/profile.vue')
  },
  {
    path: '/classify',
    component: () => import('../views/classify/calssify.vue')
  },
  {
    path: '/shoppingcart',
    component: () => import('../views/shoppingcart/shoppingcart.vue')
  },
]
const router = new VueRouter({
  routes,
  //改为history模式，默认hash模式
  mode: 'history',
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function push(location) {
  return originalReplace.call(this, location).catch(err => err)
}

export default router
