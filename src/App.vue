<template>
  <el-container>
    <el-aside width="200px" class="hidden-sm-and-down">
      <el-menu
          router
          class="el-menu-vertical-demo"
          active-text-color="#ffffff"
      >
        <div id="logo">
          <span>MEME MAKER</span>
        </div>
        <template v-for="r in routes">
          <template v-if="r.children && r.children.length">
            <el-sub-menu :key="r.path" :index="r.path">
              <template #title>
                <ImageIcon :img="r.meta.icon" :size="20"/>
                <span> {{r.meta.title}} </span>
              </template>
              <div :key="c.path" v-for="c in r.children">
                <el-menu-item :key="c.path" :index="c.path" @click="routerDo.push(c.path)">
                  <ImageIcon :img="c.meta.icon" :size="20"/>
                  <span>{{ c.meta.title }}</span>
                </el-menu-item>
              </div>
            </el-sub-menu>
          </template>
          <template v-else>
            <el-menu-item :key="r.path" :index="r.path" @click="routerDo.push(r.path)">
              <template #title>
                <ImageIcon :img="r.meta.icon" :size="20"/>
                <span>{{ r.meta.title }}</span>
              </template>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="hidden-sm-and-up ">
        <el-menu
            router
            mode="horizontal"
            class="el-menu-vertical-demo"
            active-text-color="#ffffff"
        >
          <template v-for="r in routes">
            <template v-if="r.children && r.children.length">
              <el-sub-menu :key="r.path" :index="r.path">
                <template #title>
                  <ImageIcon :img="r.meta.icon" :size="20"/>
                  <span> {{r.meta.title}} </span>
                </template>
                <div :key="c.path" v-for="c in r.children">
                  <el-menu-item :key="c.path" :index="c.path" @click="routerDo.push(c.path)">
                    <ImageIcon :img="c.meta.icon" :size="20"/>
                    <span>{{ c.meta.title }}</span>
                  </el-menu-item>
                </div>
              </el-sub-menu>
            </template>
            <template v-else>
              <el-menu-item :key="r.path" :index="r.path" @click="routerDo.push(r.path)">
                <template #title>
                  <ImageIcon :img="r.meta.icon" :size="20"/>
                  <span>{{ r.meta.title }}</span>
                </template>
              </el-menu-item>
            </template>
          </template>
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

.el-sub-menu {
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
import 'element-plus/theme-chalk/display.css'
import ImageIcon from "@/components/ImageIcon/ImageIcon.vue";
import router from "@/router";

const routes = router.getRoutes().filter(r => r.meta.isMeme === false)
const routerDo = router


</script>
