import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//pinia
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persistedstate'
const pinia = createPinia()
//自动持久化插件
pinia.use(piniaPluginPersist)

// ElementPlus 全量引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

//懒加载图片功能，进入视区才加载图片
import { lazyPlugin } from '@/directives'

//引入初始化样式
import '@/styles/common.scss'

//引入全局组件
import {componentPlugin} from '@/components'

const app = createApp(App)

app.use(pinia).use(router).use(lazyPlugin).use(componentPlugin).mount('#app')

