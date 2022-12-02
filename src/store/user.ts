/*
 * @Author: yxx
 * @Date: 2022-10-24 15:46:47
 * @LastEditTime: 2022-12-02 10:25:10
 * @LastEditors: yxx
 * @Description:
 * @FilePath: \project20221116\src\store\user.ts
 */
import { defineStore } from 'pinia'

import indexHeaderBg from '~/assets/images/indexHeader.png'
import headerBg from '~/assets/images/header.png'
import mainHeaderBg from '~/assets/images/mainHeader.png'
import btnBg1 from '~/assets/images/nationSituation/btnBg_1.png'
import btnBg2 from '~/assets/images/nationSituation/btnBg_2.png'
import bg1 from '~/assets/images/nationSituation/bg1.png'
import bg2 from '~/assets/images/nationSituation/bg2.png'
import bg3 from '~/assets/images/nationSituation/bg3.png'
import bgl from '~/assets/images/nationSituation/bgl.png'
import top from '~/assets/images/nationSituation/top.png'
import title from '~/assets/images/nationSituation/title.png'
import top1 from '~/assets/images/nationSituation/top1.png'


export const useUserStore = defineStore('user', () => {
  /**
   * Current name of the user.
   */

  const themeColor = reactive({
    blue: {

      bgImages: { // 公共背景图
        headerBg,
        indexHeaderBg,
        mainHeaderBg,
        btnBg1,
        btnBg2,
        bg1,
        bg2,
        bg3,
        bgl,
        top,
        top1,
        title
      },
      indexBgColor: '#02152D',
    },
  })
  // 主题
  const commonStyle = ref(localStorage.getItem('CommonStyle') || 'blue')
  // 设置主题
  const setCommonStyle = (val: string) => {
    commonStyle.value = val
    document.getElementsByTagName('body')[0].style.setProperty('--color-primary', commonStyle.value)
    document.getElementsByTagName('body')[0].style.setProperty('--color-border', commonStyle.value)
    document.getElementsByTagName('body')[0].style.setProperty('--color-bg', commonStyle.value)
  }

  return {
    commonStyle,
    setCommonStyle,
    themeColor,
  }
})

