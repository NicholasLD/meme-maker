<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'ImageIcon',
  props: {
    img: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 20
    }
  }
})
</script>

<template>
  <div>
    <img :src="img" :style="{width: size + 'px', height: size + 'px'}" alt="">
  </div>
</template>

<style scoped>
img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px 0 0;
}
</style>
