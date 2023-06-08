import { createStore } from 'vuex'

export default createStore({
  state: {
    memes: [
        {
            id: 1,
            name: '龙脸熊猫拿喇叭',
            url: require('../assets/memes/long-1.png'),
            tags: ['龙脸熊猫', '拿喇叭', '龙脸熊猫拿喇叭'],
            description: '龙脸熊猫拿喇叭',
            width: 160,
            height: 150,
            x: 80,
            y: 140,
        },
        {
            id: 2,
            name: '什么猫-干什么呢',
            url: require('../assets/memes/smm-1.png'),
            tags: ['什么猫', '干什么呢', '什么猫-干什么呢'],
            description: '什么猫-干什么呢',
            width: 160,
            height: 150,
            x: 80,
            y: 30,
        },
        {
            id: 3,
            name: '龙图-向上指',
            url: require('../assets/memes/long-2.png'),
            tags: ['龙图', '向上指', '龙图-向上指'],
            description: '龙图-向上指',
            width: 160,
            height: 150,
            x: 80,
            y: 140,
        },
        {
            id: 4,
            name: '龙图-向左指',
            url: require('../assets/memes/long-3.png'),
            tags: ['龙图', '向左指', '龙图-向左指'],
            description: '龙图-向左指',
            width: 150,
            height: 112,
            x: 75,
            y: 108,
        }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
