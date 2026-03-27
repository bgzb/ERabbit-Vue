
import { useIntersectionObserver } from '@vueuse/core'
//定义懒加载插件
export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                //el代表指令绑定的元素，这里是img
                //binding:binding.value就是指令的值，即等于号后面，这里是图片的url
                // console.log(el, binding.value)
                //懒加载图片功能，进入视区才加载图片
                const { stop } = useIntersectionObserver(
                    el,
                    ([entry]) => {
                        // console.log(entry)  
                        if (entry.isIntersecting) {//进入视口区域
                            el.src = binding.value
                            stop()//停止监听
                        }
                    },
                )
            }
        })
    }
}