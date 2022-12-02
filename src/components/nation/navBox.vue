<!--
 * @Author: yxx
 * @Date: 2022-11-28 10:44:29
 * @LastEditTime: 2022-11-30 11:02:03
 * @LastEditors: yxx
 * @Description:
 * @FilePath: \project20221116\src\components\nation\navBox.vue
-->
<script setup lang="ts">
import borderBg from '~/assets/images/nationSituation/border.png'
interface IProps {
  title: string
  isMore?: boolean
}
const { isMore = true } = defineProps<IProps>()

const emit = defineEmits(['moreClick'])
</script>

<template>
  <div class="nav-box" relative w-full  h="100%" box-border>
    <img :src="borderBg" w-full h="100%" absolute>
    <div relative box-border h="100%">
      <div text-base flex justify-between font-xs pt8 px-7>
        <span class="text-lg font-bold">{{ title }}</span>
         <div v-if="isMore" class="text-color1"  bottom-5 right-5 cursor-pointer @click="emit('moreClick')">
        更多>
      </div>
      </div>
      <slot />

    </div>
  </div>
</template>
<style lang="less" scoped>
.nav-box{
  height: calc((100vh - 10.5rem) / 2);
}
</style>
