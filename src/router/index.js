import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);


// 1. 定义 (路由) 组件。
// import Home from '@/views/home'
// import Category from '@/views/category'


// 2. 定义路由
const routes = [
  { path: '/home', component: () => import('@/views/home') },
  { path: '/details', component: () => import('@/views/home/details') },
  { path: '/goods', component: () => import('@/views/home/goods') },
  { path: '/category', component: () => import('@/views/category') },
  { path: '/cart', component: () => import('@/views/cart') },
  { path: '/my', component: () => import('@/views/my') },

]


// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})


export default router;