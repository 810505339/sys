<!--
 * @Author: yxx
 * @Date: 2022-11-16 09:59:44
 * @LastEditTime: 2022-11-23 22:34:31
 * @LastEditors: yxx
 * @Description: 全国态势
 * @FilePath: \project20221116\src\pages\nationSituation.vue
-->
<script setup lang="ts">
const userStore = useUserStore()
const style = userStore.themeColor[userStore.commonStyle as keyof typeof userStore.themeColor]
</script>

<template>
  <main class="w-full h-100vh overflow-auto" :style="{ 'background-color': style.indexBgColor }">
    <MainHeader />
    <router-view />
  </main>
</template>

<style lang="css" scoped>

</style>
