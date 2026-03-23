<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <!-- 二级路由出口 -->
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