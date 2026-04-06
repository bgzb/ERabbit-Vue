//把components下所有的组件都进行全局注册
//通过插件的方式
import imageView from '@/components/imageView/index.vue'
import Sku from '@/components/XtxSku/index.vue'
export const componentPlugin = {
    install(app){
        //app是vue实例
        //app.component('组件名',组件)
        //app.component('my-button',MyButton)
        app.component('XtxImageView',imageView)
        app.component('XtxSku',Sku)
    }
}