//axios基础的封装
import axios from 'axios'
 import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'


const httpInstance = axios.create({
    baseURL:'http://pcapi-xiaotuxian-front-devtest.itheima.net/',
    timeout: 5000
})

httpInstance.interceptors.request.use((config) =>{
    return config
}),err =>{
    return Promise.reject(err)
}

httpInstance.interceptors.response.use((res) =>{
    return res.data
}, (err) =>{
    //可以在这里统一处理错误
    ElMessage.warning(err.response.data.message || '请求出错了')
    return Promise.reject(err)
})

export default httpInstance