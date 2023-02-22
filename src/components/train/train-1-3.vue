<template>
    <el-upload ref="uploadRef" class="upload-demo" action="" :auto-upload="false" :multiple="true" :on-change="onChange"
        :accpect="'.xlsx,.xlx'">
        <template #trigger>
            <el-button type="primary">select file</el-button>
        </template>

        <el-button type="success" @click="submitUpload">
            upload to server
        </el-button>

        <template #tip>
            <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
            </div>
        </template>
    </el-upload>


    <div class="crawler">
        <el-input v-model="inputModel" placeholder="输入爬取的地址"></el-input>
        <el-button type="success" @click="getData">爬取</el-button>
    </div>
</template>
<script lang="ts" setup>
import { Ref, ref } from 'vue'
import { affixProps, ElMessage, UploadFile, UploadFiles, UploadInstance } from 'element-plus'
import { read, utils } from 'xlsx'
import axios from 'axios';
import { method } from 'lodash';

const uploadRef = ref<UploadInstance>()
const inputModel = ref('')
const getData = () => {
    axios.post('http://localhost:5173/c/multilingual-discussions/10').then(response => (console.log(response)))
}

const fileList: Ref<UploadFiles> = ref([])


const onChange = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {

    fileList.value.push(uploadFile)

}

const submitUpload = () => {
    if (fileList.value.length > 0) {
        for (const item of fileList.value) {
            const fileReader = new FileReader()
            fileReader.readAsBinaryString(item.raw!)
            fileReader.onload = (ev) => {
                let data = ev.target?.result
                var workbook = read(data, { type: 'binary' })
                const wsname = workbook.SheetNames[0]
                var worksheet = workbook.Sheets[wsname]; // 只能通过工作表名称来获取指定工作表
                for (var key in worksheet) {
                    // v是读取单元格的原始值
                    console.log(key, key[0] === '!' ? worksheet[key] : worksheet[key].v);
                }
            }
        }
    } else {
        ElMessage.error('请上传文件, 不上传文件我怎么处理呢')
    }
}
</script>
  