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
