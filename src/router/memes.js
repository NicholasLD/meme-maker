const memes = [
    {
        path: '/memes/long-1',
        name: 'long-1',
        component: () => import('../views/memes/Long-1.vue'),
        meta: {
            title: '龙脸熊猫拿喇叭',
            icon: require('../assets/icons/duck.gif'),
            isMeme: true
        }
    },
    {
        path: '/memes/smm-1',
        name: 'smm-1',
        component: () => import('../views/memes/Smm-1.vue'),
        meta: {
            title: '什么猫-干什么呢',
            icon: require('../assets/icons/cat.gif'),
            isMeme: true
        }
    },
    {
        path: '/memes/long-2',
        name: 'long-2',
        component: () => import('../views/memes/Long-2.vue'),
        meta: {
            title: '龙图-向上指',
            icon: require('../assets/icons/duck.gif'),
            isMeme: true
        }
    },
    {
        path: '/memes/long-3',
        name: 'long-3',
        component: () => import('../views/memes/Long-3.vue'),
        meta: {
            title: '龙图-向左指',
            icon: require('../assets/icons/duck.gif'),
            isMeme: true
        }
    }
]

export default memes
