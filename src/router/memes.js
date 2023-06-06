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
]

export default memes
