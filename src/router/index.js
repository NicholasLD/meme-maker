import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import {HomeFilled}  from '@element-plus/icons-vue'

const routes = [
  {
    id: 1,
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '主页',
      icon: require('../assets/icons/pop-cat.gif')
    }
  },
  {
    id: 2,
    path: '/long-1',
    name: 'long-1',
    component: () => import('../views/memes/Long-1.vue'),
    meta: {
      title: '龙脸熊猫拿喇叭',
      icon: require('../assets/icons/duck.gif')
    }
  },
  {
    id: 3,
    path: '/smm-1',
    name: 'smm-1',
    component: () => import('../views/memes/Smm-1.vue'),
    meta: {
      title: '什么猫-干什么呢',
      icon: require('../assets/icons/cat.gif')
    }
  },
  {
    path: '/disclaimer',
    name: 'disclaimer',
    component: () => import('../views/Disclaimer.vue'),
    meta: {
      title: '免责声明',
      icon: require('../assets/icons/pop-cat-1.gif')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
    document.title = to.meta.title + ' - ' + 'Meme Maker'
    next()
})

export default router
