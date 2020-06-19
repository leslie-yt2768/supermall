import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Home = () => import('../views/home/Home')
const Profile = () => import('../views/profile/Profile')
const routes = [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/category',
    component: Category
  }, {
    path: '/cart',
    component: Cart
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/profile',
    component: Profile
  }]

const router = new VueRouter({
  routes,
  mode: 'history'
})
export default router
