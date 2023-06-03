<template>
  <el-container>
    <el-aside width="200px" class="hidden-sm-and-down">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
      >
        <el-menu-item id="logo">
          <h1>Meme Maker</h1>
        </el-menu-item>
        <el-menu-item v-for="menu in $router.getRoutes()" :key="menu.id" :index="menu.id" @click="$router.push(menu.path)">
          <template #title>
            <ImageIcon :img="menu.meta.icon" :size="20"/>
            <span>{{ menu.meta.title }}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="hidden-sm-and-up ">
        <el-menu
            class="el-menu-demo"
            mode="horizontal"
        >
          <el-menu-item v-for="menu in $router.getRoutes()" :key="menu.id" :index="menu.id" @click="$router.push(menu.path)">
            <template #title>
              <ImageIcon :img="menu.meta.icon" :size="20"/>
              <span>{{ menu.meta.title }}</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <transition name="route-transition">
          <router-view/>
        </transition>
      </el-main>
      <el-footer class="hidden-sm-and-down">
        <el-divider content-position="center">
          <span>© 2023 Meme Maker</span>
          鲁ICP备2022034231号-1
        </el-divider>
      </el-footer>
    </el-container>
  </el-container>
</template>

<style scoped>
/* 使用 CSS 过渡 */
.route-transition-enter-active,
.route-transition-leave-active {
  transition: opacity 0.5s;
}

.route-transition-enter-from,
.route-transition-leave-to {
  opacity: 0;
}

.el-aside {
  background-color: rgb(238, 241, 246);
  /*右边阴影*/
  box-shadow: 0 1px 10px 0 rgba(0,21,41,.35);

}

.el-menu-item {
  background-color: rgb(238, 241, 246);
}

#logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-size: 20px;
  font-weight: bold;
  //background-color: rgb(210, 218, 247);
}

.el-menu-item:hover {
  background-color: rgb(170, 192, 230);
}

.el-header {
  padding: 0;
  box-shadow: 0 1px 10px 0 rgba(0,21,41,.35);
}
</style>
<script setup>
import ImageIcon from "@/components/ImageIcon/ImageIcon.vue";
import 'element-plus/theme-chalk/display.css'


</script>
