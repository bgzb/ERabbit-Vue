<template>
    <ul class="app-header-nav">
        <li class="home">
            <router-link to="/">首页</router-link>
        </li>
        <li class="home" v-for="(item) in categoryStore.categoryList" :key="item.id">
            <router-link to="/">
                {{ item.name }}
            </router-link>
        </li>
    </ul>
</template>

<script setup>
import { useCategoryStore } from '@/stores/category';

const categoryStore = useCategoryStore();
</script>

<style lang="scss">
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

    .active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}
</style>