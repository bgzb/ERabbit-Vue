import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

// ElementPlus 全量引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'


//测试axios接口函数
import { getCategory } from '@/apis/testApi'
getCategory().then(res => {
  console.log(res)
})

//引入初始化样式
import '@/styles/common.scss'

const app = createApp(App)

app.use(pinia).use(router).mount('#app')
