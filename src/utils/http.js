//axios基础的封装
import axios from 'axios'
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'
import router from '@/router'


const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net/',
    timeout: 5000
})

httpInstance.interceptors.request.use((config) => {
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}), err => {
    return Promise.reject(err)
}

httpInstance.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    const userStore = useUserStore() 
    //可以在这里统一处理错误
    ElMessage.warning(err.response.data.message || '请求出错了')
    switch (err.response.status) {
        case 401:
            //token过期或者没有token了，清除用户信息，跳转到登录页
            //1.清除用户信息
            userStore.clearUserInfo()
            //2.跳转到登录页
            router.push('/login')
            break;

        default:
            break;
    }
    return Promise.reject(err)
})

export default httpInstance