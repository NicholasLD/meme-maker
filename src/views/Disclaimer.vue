<template>
  <div class="home">
    <img src="../assets/mzsm.png" width="160" height="150" alt="">
    <p>
      本网站仅供娱乐和创作目的使用。通过使用本网站，您确认理解并同意以下内容：<br>
    </p>
    <ul>
      <li>本网站生成的表情包仅供个人使用，不得用于商业目的或侵犯他人的版权或隐私权。您对使用本网站生成的表情包的任何行为负全部责任。</li>
      <li>本网站生成的表情包可能包含用户提供的图像和文本。用户对所上传的图像和文本承担全部责任，并应确保其拥有合法的版权和权利。本网站不对用户上传的图像和文本的准确性、合法性或侵权行为负责。</li>
      <li>本网站生成的表情包可能包含第三方的图像、文字或其他素材。我们尽力确保使用合法和授权的素材，但无法保证绝对准确性和合法性。如果您认为您的版权或权益受到侵犯，请与我们联系，我们将尽快进行处理。</li>
      <li>本网站生成的表情包可能在生成过程中对图像和文本进行修改和处理。我们尽力保证生成的表情包的质量和准确性，但不对生成过程中的任何损失、误差或不完整性负责。</li>
      <li>本网站提供的生成表情包的服务可能会因各种原因而中断、延迟或出现错误。我们将尽力确保服务的正常运行，但不对由于服务中断、延迟或错误导致的任何损失或不便负责。</li>
      <li>本网站生成的表情包可能会被其他用户查看、使用或传播。我们无法控制其他用户的行为，并对其他用户使用或传播表情包的行为不负责。</li>
      <li>本网站不对使用本网站生成的表情包可能引发的任何纠纷、损失或后果负责，包括但不限于人身伤害、财产损失、名誉损害等。</li>
      <li>您应当理解并接受，使用本网站生成的表情包是基于您自己的决策和风险。您应对您的行为和使用承担全部责任，并应审慎评估和管理相关风险。</li>
      <li>本免责声明适用于您访问和使用本网站的全部内容和服务。通过使用本网站，即表示您同意接受本免责声明的所有条款和条件。</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'DisclaimerView',
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

ul {
  font-size: 20px;
  color: #999;
  line-height: 1.6;
}

li {
  font-size: 17px;
  color: #999;
  line-height: 1.6;
}
</style>
