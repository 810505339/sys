<!--
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-12-02 14:52:11
 * @LastEditors: yxx
 * @Description:
 * @FilePath: \project20221116\src\pages\index.vue
-->
<script setup lang="ts">
// 设置主题色
import type { GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColorHover: '#00C7FA',
  },
  Button: {
    textColorHover: '#ffffff',

  },
  Select: {
    peers: {
      InternalSelectMenu: {
        color: '#02152d',
        optionTextColor: '#00C7FA',
        optionColorActivePending: '#00C7FA',
        optionColorPending: '#00C7FA',

      },
      InternalSelection: {
        textColor: '#00C7FA',
        colorActive: '#02152d',
      },
    },
  },
  Input: {
    loadingColor: '#ffff',
  },
  Tree:{
    nodeColorHover: '#02152d'
  }
}
</script>

<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <n-dialog-provider>
      <n-message-provider>
        <router-view />
      </n-message-provider>
    </n-dialog-provider>
  </NConfigProvider>
</template>

