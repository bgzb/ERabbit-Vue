import { ref } from 'vue'
import { defineStore } from 'pinia' //引入pinia，定义一个category的store
import { getCategoryAPI } from '@/apis/layout'
export const useCategoryStore = defineStore('category', () => {
    //当前导航列表的逻辑
    const categoryList = ref([])

    const getCategory = async () => {
        const res = await getCategoryAPI()
        console.log("这里是一级分类数据",res)
        categoryList.value = res.result
    }

    return {
        categoryList,
        getCategory
    }
})