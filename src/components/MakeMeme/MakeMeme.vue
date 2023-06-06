<script>
import {defineComponent, onMounted, ref} from "vue";
import {useStore} from "vuex";

export default defineComponent({
  name: 'MakeMeme',
  components: {
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    onMounted(() => {
      make()
    })

    const store = useStore()
    const meme = store.state.memes.find(meme => meme.name === props.name)

    const beforeImg = {
      url: meme.url,
      width: meme.width,
      height: meme.height,
      x: meme.x,
      y: meme.y
    }

    let text = ref("")

    function make() {
      const canvas = document.getElementById('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.src = beforeImg.url
      img.onload = function () {
        canvas.width = beforeImg.width
        canvas.height = beforeImg.height
        ctx.drawImage(img, 0, 0, beforeImg.width, beforeImg.height)
        ctx.font = `32px sans-serif`
        const textWidth = ctx.measureText(text.value).width
        let fontSize = 32
        if (textWidth > beforeImg.width) {
          fontSize = 32 * beforeImg.width / textWidth
        }
        ctx.font = `${fontSize}px sans-serif`
        ctx.fillStyle = 'black'
        ctx.textAlign = 'center'
        ctx.fillText(text.value, beforeImg.x, beforeImg.y)

        meme.url = canvas.toDataURL('image/png')
      }

    }

    return {
      meme, make, text
    }
  }
})
</script>

<template>
<div>
  <el-row>
    <canvas id="canvas" hidden="hidden"></canvas>
    <el-image
        :src="meme.url"
        :width="meme.width"
        :height="meme.height"
        style="margin: 0 auto"
    />
  </el-row>
  <el-row style="margin-top: 20px;">
    <el-input
        v-model="text"
        placeholder="请输入要加的文字"
        style="width: 100%;"
    />
  </el-row>
  <el-row style="margin-top: 20px;">
    <el-button style="margin: 0 auto" size="large" type="primary" @click="make">立即生成表情</el-button>
  </el-row>


</div>
</template>

<style scoped>
h1 {
  font-size: 60px;
  color: #2c3e50;
  margin-bottom: 20px;
}

/*手机端*/
@media screen and (max-width: 768px) {
  h1 {
    font-size: 30px;
  }

  p {
    font-size: 16px;
  }
}

.el-image {
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0 rgba(0,21,41,.35);
}

#canvas {
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 1px 10px 0 rgba(0,21,41,.35);
}
</style>
