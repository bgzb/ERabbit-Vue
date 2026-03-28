<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <!-- 二级路由出口  Home组件或Category组件-->
   <!-- 为了解决组件复用生命周期钩子函数不重新执行，导致路由跳转不重新发送请求 -->
  <!-- 给路由组件添加一个key，每次路由跳转都会重新渲染组件， 问题：暴力销毁和重新渲染，浪费 -->
  <!-- <router-view :key=$route.fullPath></router-view>  -->
   <router-view></router-view>
  <LayoutFooter></LayoutFooter>
</template>

<script setup>
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue';
import LayoutNav from '@/views/Layout/components/LayoutNav.vue';
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue';
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue';

//在父组件触发获取导航列表的action给子组件提供categoryList，保证只触发一次
import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';

const categoryStore = useCategoryStore();

onMounted(() => {
  categoryStore.getCategory()
}) 
</script>

<style scoped></style>