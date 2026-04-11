import {ref} from 'vue'
import {defineStore} from 'pinia'
import { loginAPI } from '@/apis/user'
export const useUserStore = defineStore('user', () =>{
    //1.定义管理用户信息的state
    const userInfo = ref({})
    //2.定义一个action，获取用户信息
    const getUserInfo = async ({account, password}) =>{
        const res = await loginAPI({account, password})
        console.log("这里是登录接口返回的数据",res)
        userInfo.value = res.result
        console.log("这里是用户信息",res.result)
    }
    //3.把state和action暴露出去
    return {
        userInfo,
        getUserInfo
    }
})