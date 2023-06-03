<script>
import {defineComponent, onMounted, ref} from "vue";
import {useStore} from "vuex";
import html2canvas from 'html2canvas';

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
    console.log(meme)

    let text = ref("")

    function make() {
      const canvas = document.getElementById('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.src = meme.url
      img.onload = function () {
        canvas.width = meme.width
        canvas.height = meme.height
        ctx.drawImage(img, 0, 0, meme.width, meme.height)
        ctx.font = `32px sans-serif`
        const textWidth = ctx.measureText(text.value).width
        let fontSize = 32
        if (textWidth > meme.width) {
          fontSize = 32 * meme.width / textWidth
        }
        ctx.font = `${fontSize}px sans-serif`
        ctx.fillStyle = 'black'
        ctx.textAlign = 'center'
        ctx.fillText(text.value, meme.x, meme.y)
      }
      meme.url = img.src
    }

    function download() {
      const canvas = document.getElementById('canvas');

      html2canvas(canvas).then(function (canvas) {
        // 将 canvas 转换为图片
        const image = canvas.toDataURL('image/png');

        // 创建一个下载链接并触发下载
        const link = document.createElement('a');
        link.href = image;
        link.download = 'meme.png';
        link.click();
      });
    }

    return {
      meme, make, text, download
    }
  }
})
</script>

<template>
<div>
  <el-row>
    <canvas id="canvas"></canvas>
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

  <el-row style="margin-top: 20px;">
    <el-button style="margin: 0 auto" size="default" type="warning" @click="download">下载表情（针对手机）</el-button>
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
