import { ref, computed } from 'vue'
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

        //3.定义删除商品的action
        const delCart = (skuId) => {
            const index = cartList.value.findIndex((item) => item.skuId === skuId)
            if (index > -1) {
                cartList.value.splice(index, 1)
            }
        }

        //4.定义计算属性 - 购物车总件数
        const allCount = computed(() => {
            return cartList.value.reduce((sum, item) => sum + item.count, 0)
        })

        //5.定义计算属性 - 购物车总价格
        const allPrice = computed(() => {
            return cartList.value.reduce((sum, item) => sum + (item.price * item.count), 0)
        })

        return {
            cartList,
            addCart,
            delCart,
            allCount,
            allPrice
        }

    },
    {
        persist: true
    }
)