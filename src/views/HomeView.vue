<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/banner.jpg">
    <h1>欢迎使用 Meme Maker</h1>
    <p>
      使用 Meme Maker 立即生成自定义文字表情包。<br>
    </p>
    <p>
      支持开源项目，您可以通过以下方式向我们捐赠：
    </p>
    <div>
      <img src="https://img.nicholasld.cn/i/2023/06/03/647b374ac7281.jpg" height="400" width="260" alt="">
      <img src="https://img.nicholasld.cn/i/2023/06/03/647b375ad63d0.jpg" height="400" width="260" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  justify-content: flex-start;
}

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

p {
  font-size: 20px;
  color: #999;
  line-height: 1.6;
}
</style>
