/*
 * @Author: yxx
 * @Date: 2022-10-24 09:05:03
 * @LastEditTime: 2022-11-20 22:04:36
 * @LastEditors: yxx
 * @Description:
 * @FilePath: \project20221116\src\routes.ts
 */
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: {
      name: 'home',
    },
    component: () => import('~/pages/layout.vue'),
    children: [
      {
        name: 'home',
        path: '/home',
        meta: {
          title: '首页',
        },
        component: () => import('~/pages/Home/index.vue'),
      },
    ],
  },
  {
    path: '/worldSituation',
    redirect: {
      name: 'worldSituation',
    },
    component: () => import('~/pages/worldSituation.vue'),
    children: [
      {
        name: 'worldSituation',
        path: '/worldSituation',
        meta: {
          title: '全球态势',
        },
        component: () => import('~/pages/WorldSituation/index.vue'),
      },
      {
        name: 'configTable',
        path: '/configTable',
        component: () => import('~/pages/WorldSituation/configTable.vue'),
      },
    ],
  },
  {
    path: '/nationSituation',
    redirect: {
      name: 'nationSituation',
    },
    component: () => import('~/pages/nationSituation.vue'),
    children: [
      {
        name: 'nationSituation',
        path: '/nationSituation',
        meta: {
          title: '全国态势',
        },
        component: () => import('~/pages/NationSituation/index.vue'),
      },
      {
        name: 'situationArea',
        path: '/situationArea',
        meta: {
          title: '区域态势',
        },
        component: () => import('~/pages/NationSituation/area.vue'),
      },
      {
        name: 'situationSet',
        path: '/situationSet',
        meta: {
          title: '配置',
        },
        component: () => import('~/pages/NationSituation/set.vue'),
      },
    ],
  },

]

export default routes
