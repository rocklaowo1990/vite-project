<script setup lang="ts">
import { ref } from 'vue'
const message: string = '我是真男人'
const bool: boolean = false
const boolNumber = ref(0)
const changeBoolNumber = () => {
    boolNumber.value = boolNumber.value === 0 ? 1 : 0
}

const addBoolNumber = () => {
    boolNumber.value++
}

const reduceBoolNumber = () => {
    boolNumber.value--
}


type Conent = {
    id: number,
    content: string
}

const content: Array<Conent> = [
    {
        id: 1,
        content: '构建 vite 项目：npm init vite@latest'
    },

    {
        id: 2,
        content: '安装依赖：npm install'
    },

    {
        id: 3,
        content: '启动：npm run dev'
    },

    {
        id: 4,
        content: '启动公网地址：npm run dev -- --host'
    },

]
</script>

<template>
    <div>
        <h3>安装</h3>
        <p v-for="item in content" :key="item.id">{{ item.id + "、" + item.content }}</p>
        <h3>简单的练习</h3>
        <p>{{ '插入变量：' + message.split('').map(v => '*' + v) }}</p>
        <div class="row-between-center boolNumber">
            <p>{{ boolNumber ? '非 0 全部代表 ”真“' : '数字 0 代表 ”假“' }}</p>
            <el-button @click="changeBoolNumber" type="primary">更改状态</el-button>
        </div>

        <div class="row-between-center boolNumber">
            <span>{{ boolNumber }}</span>
            <div class="row-between-center">
                <el-button @click="reduceBoolNumber" type="primary">-</el-button>
                <el-button @click="addBoolNumber" type="primary">+</el-button>
            </div>
        </div>

    </div>
</template>

<style scoped>
.boolNumber {
    margin-top: 4px;
    background-color: #eee;
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

p {
    background-color: #eee;
    width: 100%;
    padding: 4px;
    box-sizing: border-box;
}
</style>