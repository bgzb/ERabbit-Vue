import httpInstance from "@/utils/http";

// 获取一级分类数据
export function getCategoryAPI(id) {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}

// 获取二级分类数据
export function getCategoryFilterAPI(id) {
    return httpInstance({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}