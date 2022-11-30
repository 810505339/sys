<!--
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-11-20 21:41:51
 * @LastEditors: yxx
 * @Description:全球态势头
 * @FilePath: \project20221116\src\components\header.vue
-->
<script setup lang="ts">
import btn from '~/assets/images/button.png'
const route = useRoute()
const userStore = useUserStore()
const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')

const style = userStore.themeColor[userStore.commonStyle as keyof typeof userStore.themeColor]
</script>

<template>
  <div
    class="
            h-29
            flex
            justify-between
            text-right
            px-9
            bg-contain bg-no-repeat bg-center
        " :style="`background-image:url(${style.bgImages.headerBg}) `"
  >
    <div class="mt-5" text="#929698" font-bold>
      {{ formatted }}
    </div>

    <div class="text-right mt-5">
      <div class="flex items-center">
        <n-icon class="text-4 ml-5">
          <svg
            version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"
          >
            <g>
              <g>
                <g>
                  <path d="M192,277.4h189.7l-43.6,44.7L368,352l96-96l-96-96l-31,29.9l44.7,44.7H192V277.4z" />
                </g>
              </g>
              <g>
                <path
                  d="M255.7,421.3c-44.1,0-85.5-17.2-116.7-48.4c-31.2-31.2-48.3-72.7-48.3-116.9c0-44.1,17.2-85.7,48.3-116.9
			c31.2-31.2,72.6-48.4,116.7-48.4c44,0,85.3,17.1,116.5,48.2l30.3-30.3c-8.5-8.4-17.8-16.2-27.7-23.2C339.7,61,298.6,48,255.7,48
			C141.2,48,48,141.3,48,256s93.2,208,207.7,208c42.9,0,84-13,119-37.5c10-7,19.2-14.7,27.7-23.2l-30.2-30.2
			C341.1,404.2,299.7,421.3,255.7,421.3z"
                />
                <rect
                  x="447.4" y="255.4" transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 583.767 753.7971)"
                  width="1.2" height="1.2"
                />
              </g>
            </g>
          </svg>
        </n-icon>
        <span class="mx-3">退出</span>
      </div>
      <router-link
        :to="
          route.name == 'configTable'
            ? '/worldSituation'
            : '/configTable'
        " :style="`background-image:url(${btn}) `" class="
                    inline-block
                    cursor-pointer
                    bg-contain bg-no-repeat bg-center
                    mt-7.5
                    text-#DD8025
                    w-36
                    text-center
                    h-9
                    leading-9
                "
      >
        全球实力配置
      </router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>

</style>
