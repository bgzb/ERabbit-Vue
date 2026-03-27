import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

// ElementPlus 全量引入
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

//懒加载图片功能，进入视区才加载图片
import { useIntersectionObserver } from '@vueuse/core'


//引入初始化样式
import '@/styles/common.scss'

const app = createApp(App)

app.use(pinia).use(router).mount('#app')

//定义全局指令
app.directive('img-lazy', {
    mounted(el, binding) {
        //el代表指令绑定的元素，这里是img
        //binding:binding.value就是指令的值，即等于号后面，这里是图片的url
        console.log(el, binding.value)
        //懒加载图片功能，进入视区才加载图片
        useIntersectionObserver(
            el,
            ([entry]) => {
                // console.log(entry)  
                if(entry.isIntersecting) {//进入视口区域
                    el.src = binding.value
                }
            },
        )
    }
})