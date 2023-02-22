import { createApp } from 'vue'

import './assets/css/reset.css'
import './assets/css/style.css'
import 'element-plus/dist/index.css'

import App from './App.vue'
import Router from './router'
import ElementPlus from 'element-plus'
import axios from 'axios'
import VueAxios from 'vue-axios'



const app = createApp(App)

app.use(Router)
app.use(ElementPlus)
app.use(VueAxios, axios)


app.mount('#app')
