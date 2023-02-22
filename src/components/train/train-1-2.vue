<script setup lang="ts">
import { ref } from 'vue'
const message: string = '我是真男人'
const htmlValue: string = "<p>例：--> + {{ message }}</p>"
const flag = ref(1)
const inputText1 = ref('0')
const inputText2 = ref('0')
const translate = 7.02

const changeFlag = () => {
    flag.value = flag.value === 1 ? 0 : 1
    console.log(flag.value)
}

const inputChange1 = () => {
    console.log(inputText1)
    const value = parseFloat(inputText1.value)
    if (inputText1.value === '') {
        inputText2.value = '0'
    } else {
        inputText2.value = (value / translate).toFixed(2)
    }
}

const inputChange2 = () => {
    console.log(inputText2)
    const value = parseFloat(inputText2.value)
    if (inputText2.value === '') {
        inputText1.value = '0'
    } else {
        inputText1.value = (value * translate).toFixed(2)
    }
}

const flag2 = ref(1)

const changeFlag2 = () => {
    flag2.value = flag2.value === 1 ? 0 : 1
    console.log(flag2.value)
}


const boolNumber = ref(1)

const addBoolNumber = () => {
    boolNumber.value++
}

const reduceBoolNumber = () => {
    boolNumber.value--
}


const forNumber = ref([0, 1, 2, 3])

const addForNumber = () => {
    forNumber.value.push(forNumber.value.length)
}

const reduceForNumber = () => {
    forNumber.value.pop()
}
</script>

<template>
    <div>
        <h3>v-text = "message" 等同于 { { message } } </h3>
        <p v-text="'例：--> ' + message"></p>


        <h3>v-html 富文本格式 </h3>
        <p v-html="htmlValue"></p>


        <h3>v-if 控制组件是否渲染，资源损耗较大</h3>
        <div class="row-between-center flex-box">
            <div>
                <span v-if="flag">例：我在被控制着显示和隐藏</span>
            </div>
            <el-button @click="changeFlag" type="primary">{{ flag ? '隐藏' : '显示' }}</el-button>
        </div>


        <h3>v-show 控制组件是否隐藏，资源损耗较小</h3>
        <div class="row-between-center flex-box">
            <div>
                <span v-show="flag2">例：我在被控制着显示和隐藏</span>
            </div>
            <el-button @click="changeFlag2" type="primary">{{ flag2 ? '隐藏' : '显示' }}</el-button>
        </div>


        <h3>v-else-if 和 v-else 一般和 v-if 配合使用</h3>
        <div class="row-between-center flex-box">
            <div>
                <span v-if="boolNumber == 1">例：我是 v-if text == 1 ，变量值：{{ boolNumber }} , Dom: 1</span>
                <span v-else-if="boolNumber == 2">例：我是 v-else-if text == 2 ，变量值：{{ boolNumber }} , Dom: 2</span>
                <span v-else-if="boolNumber == 3">例：我是 v-else-if text == 3 ，变量值：{{ boolNumber }} , Dom: 3</span>
                <span v-else-if="boolNumber == 4">例：我是 v-else-if text == 4 ，变量值：{{ boolNumber }} , Dom: 4</span>
                <span v-else-if="boolNumber == 5">例：我是 v-else-if text == 5 ，变量值：{{ boolNumber }} , Dom: 5</span>
                <span v-else-if="boolNumber > 5">例：我是 v-else-if text > 5 ，变量值：{{ boolNumber }} , Dom: 6</span>
                <span v-else>例：我是 v-else , 变量值：{{ boolNumber }} , Dom: 0</span>
            </div>
            <div class="row-between-center">
                <el-button @click="reduceBoolNumber" type="primary">-</el-button>
                <el-button @click="addBoolNumber" type="primary">+</el-button>
            </div>
        </div>


        <h3>v-on 绑定事件</h3>
        <p>v-on:clink = "onTap" 等同于 @click = "onTap"</p>
        <p>阻止点击到父级：在子组件加 @click.stop</p>

        <h3>v-bind 绑定元素的属性</h3>
        <p>v-bind 可简写成 : 属性名字一般可以自定义</p>

        <h3>v-for 循环输出组件</h3>
        <div class="row-between-center flex-box">
            <p>需要注意 :key 的使用</p>
            <div class="row-between-center">
                <el-button @click="reduceForNumber" type="primary">-</el-button>
                <el-button @click="addForNumber" type="primary">+</el-button>
            </div>
        </div>
        <p :key="item" v-for="item in forNumber">{{ '我是数组的第 ' + (item + 1) + ' 个元素' }}</p>
        <p v-show="!forNumber.length">{{ '数组里没有子元素了，点击 “+” 添加' }}</p>

        <h3>v-modle 绑定表单元素，双向绑定</h3>
        <span class="secondText">输入人民币数量：</span>
        <el-input type="number" @input="inputChange1" v-model="inputText1" placeholder="Please input" clearable />
        <span class="secondText">输入美元数量：</span>
        <el-input type="number" @input="inputChange2" v-model="inputText2" placeholder="Please input" clearable />
        <div>{{ '输入框1的值：' + inputText1 + '------输入框2的值：' + inputText2 }}</div>
    </div>
</template>

<style scoped>
.el-button p {
    background-color: #eee;
    width: 100%;
    padding: 4px;
    box-sizing: border-box;
}

.flex-box {
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

.secondText {
    color: #989898;
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
}

.el-input {
    margin-bottom: 10px;
}
</style>