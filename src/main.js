import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
//pinia
import {createPinia} from 'pinia'
const pinia = createPinia()

// ElementPlus 全量引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'


//测试接口函数
import { getCategory } from '@/apis/testApi'
getCategory().then(res => {
  console.log(res)
})

app.use(pinia).mount('#app')
