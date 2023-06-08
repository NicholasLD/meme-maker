<script setup>

</script>

<template>
  <el-timeline>
    <el-timeline-item timestamp="2023/6/8" placement="top">
      <el-card>
        <h4>更新内容：</h4>
        <p>新功能：制作自定义表情，目前正在测试版阶段，部分功能可能不完善，可以在菜单直接进入。</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2023/6/7" placement="top">
      <el-card>
        <h4>更新内容：</h4>
        <ol>
          <li>添加了更新日志页面 🤔</li>
          <li>优化了菜单，将表情包制作添加进子菜单。</li>
          <li>修改了制作页面表情包展示，手机现在可以长按保存制作的表情。</li>
        </ol>
        <p>本次更新代码没有及时推送至GitHub和官网，因为写到这已经凌晨三点了，白天再推送吧。</p>
        <img src="https://img.nicholasld.cn/i/2023/06/07/647f848f2a265.png" alt="">
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="2023/6/4" placement="top">
      初版完工，项目上线
    </el-timeline-item>
    <el-timeline-item timestamp="2023/6/3" placement="top">
      项目开工，仓库创建
    </el-timeline-item>
  </el-timeline>
</template>

<style scoped>
  p {
    font-size: 17px;
    color: #999;
  }

  li {
    font-size: 16px;
    color: #999;
    line-height: 1.3;
  }
</style>
