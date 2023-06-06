import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import memes from "@/router/memes";

const routes = [
  {
    id: 1,
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '主页',
      icon: require('../assets/icons/pop-cat.gif'),
      isMeme: false
    }
  },
  {
    path: '/memes',
    name: 'memes',
    children: memes,
    meta: {
        title: '制作表情',
        icon: require('../assets/icons/duck.gif'),
        isMeme: false
    }
  },
  {
    path: '/disclaimer',
    name: 'disclaimer',
    component: () => import('../views/Disclaimer.vue'),
    meta: {
      title: '免责声明',
      icon: require('../assets/icons/pop-cat-1.gif'),
      isMeme: false
    }
  },
  {
    path: '/updatelog',
    name: 'updatelog',
    component: () => import('../views/UpdateLog.vue'),
    meta: {
        title: '更新日志',
        icon: require('../assets/icons/pop-cat.gif'),
        isMeme: false
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
