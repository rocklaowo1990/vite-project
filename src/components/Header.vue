<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Menu } from '@element-plus/icons-vue'

const isPhone = ref(false)

onMounted(() => {
  isPhone.value = window.innerWidth < 480 ? true : false
})

window.onresize = (e) => {
  console.log(e)
  isPhone.value = window.innerWidth < 480 ? true : false
}



</script>

<template>
  <div class="header row-between-center">

    <RouterLink class="router-link row-start-center" to="/index">
      <img class="header-left-img" src="../assets/svg/logo.svg" alt="">
      <span class="header-left-text">Tesla的练习册</span>
    </RouterLink>

    <div v-if="!isPhone" class="header-right row-end-center">
      <RouterLink class="router-link nav row-start-center" to="/index">首页</RouterLink>
      <RouterLink class="router-link nav row-start-center" to="/train">练习项目</RouterLink>
    </div>

    <RouterLink v-else to="/menu" class="header-right row-center-center router-link">
      <Menu class="icon"></Menu>
    </RouterLink>




    <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#303133"
      text-color="#fff" active-text-color="#409EFF" :ellipsis="false">
      <el-menu-item @click="onIndex" index="/index">首页</el-menu-item>
      <el-menu-item @click="onTrain" index="/train">练习</el-menu-item>
    </el-menu> -->
  </div>

</template>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #303133;
}

.icon {
  width: 24px;
  height: 24px;
  color: #409EFF;
  margin: 0;
}


.header-left-img {
  padding-right: 10px;
  color: #409EFF;
  box-sizing: border-box;
}

.header-left-text {
  color: #409EFF;
}

.nav {
  height: 100%;
}

.nav:first-child {
  margin-right: 40px;
}

.header-right {
  box-sizing: border-box;
  height: 100%;
  cursor: pointer;
}
</style>
