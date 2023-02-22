<script setup lang="ts">
import { Document } from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<template>
    <div class="train-body row-start-center">
        <div class="train-body-left shadow">
            <el-menu :router="true" active-text-color="#409EFF" background-color="#303133" class="el-menu-vertical-demo"
                default-active="/train/1" text-color="#fff" @open="handleOpen" @close="handleClose">
                <el-sub-menu index="/train">
                    <template #title>
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>搭建和安装</span>
                    </template>
                    <el-menu-item index="/train/1">环境搭建</el-menu-item>
                    <el-menu-item index="/train/2">vue 指令</el-menu-item>
                    <el-menu-item index="/train/3">论坛审核</el-menu-item>
                </el-sub-menu>
            </el-menu>
        </div>
        <el-scrollbar class="train-body-right shadow">
            <RouterView></RouterView>
        </el-scrollbar>
    </div>
</template>

<style scoped>
.el-menu-vertical-demo {
    width: 200px;
    border-right: none;
    height: calc(100vh - 60px - 40px);
}

.train-body {
    height: calc(100vh - 60px);
    width: 100%;
    max-width: 1000px;
    box-sizing: border-box;
    padding: 20px;
}

.shadow {
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
    overflow-y: scroll;
    overflow-x: hidden;
}

.shadow::-webkit-scrollbar {
    display: none;
}

.shadow:last-child {
    padding: 20px;
    box-sizing: border-box;
}

.train-body-left {
    width: 200px;
    height: 100%;

}

.train-body-right {
    width: calc(100% - 200px - 20px);
    height: 100%;
    margin-left: 20px;
}
</style>