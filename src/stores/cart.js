import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart',
    () => {
        //1.定义购物车列表的state
        const cartList = ref([])

        //2.定义一个action，添加商品到购物车
        const addCart = (goods) => {
            //添加过 count+1
            //没有添加过 直接push
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                item.count++
            } else {
                cartList.value.push(goods)
            }
        }
        return {
            cartList,
            addCart
        }

    },
    {
        persist: true
    }
)