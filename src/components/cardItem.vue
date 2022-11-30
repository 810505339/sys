<!--
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-11-27 11:14:58
 * @LastEditors: yxx
 * @Description:卡片
 * @FilePath: \project20221116\src\components\cardItem.vue
-->
<script setup lang="ts">
withDefaults(
  defineProps<{
    item?: Object
  }>(),
  {},
)
const userStore = useUserStore()
const style
    = userStore.themeColor[
      userStore.commonStyle as keyof typeof userStore.themeColor
    ]
</script>

<template>
  <div class="card-item pt-2.5 px-8 pb-5" :style="`background-image:url(${style.bgImages[`bg${item.span}`]}) `">
    <div
      class="title h-10 leading-10 text-center text-color font-bold text-4"
      :style="`background-image:url(${style.bgImages.top}) `"
    >
      {{ item.title }}
    </div>
    <div class="card-info py-5">
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>
.card-item {
    height: calc((100vh - 10.5rem) / 3);
    background: no-repeat center/100%;
    background-size: 100% 100%;

    .title {
        background: no-repeat center/contain;
    }

    .card-info {
        height: calc((100% - 2rem));
    }
}
</style>
