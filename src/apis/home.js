import httpInstance from '@/utils/http'

// 获取banner

export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner',
  })
}
//获取新鲜好物数据
export function getNewAPI() {
  return httpInstance({
    url: '/home/new',
  })
}

export function getHotAPI() {
  return httpInstance({
    url: '/home/hot'
  })
}

export function getGoodsAPI() {
  return httpInstance({
    url: '/home/goods'
  })
}