// 封装分类数据业务相关代码
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getCategoryAPI } from '@/api/category'
import { onBeforeRouteUpdate } from 'vue-router'


export const useCategory(){
    const categoryData = ref({})

    const getCategory = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        console.log(res)
        categoryData.value = res.result
    }

    onMounted(() => {
        getCategory()
    })

    //路由参数变化的时候 可以把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        // console.log('路由参数变化了')
        // console.log(to)
        //使用新的路由参数
        getCategory(to.params.id)
    })
    return {
        categoryData,
    }
}